#!/usr/bin/env python3
"""GTD Voice App - Flask Server"""

from flask import Flask, render_template, request, jsonify, send_file
from flask_cors import CORS
import json
import os
import re
from datetime import datetime

app = Flask(__name__)
CORS(app)

DATA_FILE = os.path.join(os.path.dirname(__file__), 'gtd_data.json')

# Initialize data file if not exists
def init_data():
    if not os.path.exists(DATA_FILE):
        # Import from gtd_data.py
        import sys
        sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))
        from gtd_data import gtd_items
        save_data(gtd_items)
        return gtd_items
    return load_data()

def load_data():
    with open(DATA_FILE, 'r') as f:
        return json.load(f)

def save_data(data):
    with open(DATA_FILE, 'w') as f:
        json.dump(data, f, indent=2)

def parse_voice_input(text):
    """Parse voice input and determine action and item details"""
    text_lower = text.lower().strip()
    
    result = {
        'action': 'add',  # add, complete, update, delete
        'item': '',
        'category': 'Personal',
        'project': '',
        'context': '@Anywhere',
        'priority': 'Medium',
        'status': 'Next Action',
        'next_action': '',
        'notes': '',
        'parsed_info': []
    }
    
    # Detect action
    if any(text_lower.startswith(w) for w in ['complete ', 'done ', 'finished ', 'mark complete ']):
        result['action'] = 'complete'
        text = re.sub(r'^(complete|done|finished|mark complete)\s+', '', text, flags=re.IGNORECASE)
    elif any(text_lower.startswith(w) for w in ['delete ', 'remove ']):
        result['action'] = 'delete'
        text = re.sub(r'^(delete|remove)\s+', '', text, flags=re.IGNORECASE)
    elif any(text_lower.startswith(w) for w in ['update ', 'change ']):
        result['action'] = 'update'
        text = re.sub(r'^(update|change)\s+', '', text, flags=re.IGNORECASE)
    
    # Detect category
    if any(w in text_lower for w in ['work', 'professional', 'office', 'upside', 'client', 'project']):
        result['category'] = 'Professional'
        result['parsed_info'].append('Category: Professional')
    
    # Detect priority
    if any(w in text_lower for w in ['critical', 'urgent', 'asap', 'immediately']):
        result['priority'] = 'Critical'
        result['parsed_info'].append('Priority: Critical')
    elif any(w in text_lower for w in ['high priority', 'important', 'high']):
        result['priority'] = 'High'
        result['parsed_info'].append('Priority: High')
    elif any(w in text_lower for w in ['low priority', 'someday', 'when possible', 'low']):
        result['priority'] = 'Low'
        result['parsed_info'].append('Priority: Low')
    
    # Detect context
    contexts = {
        '@Computer': ['computer', 'laptop', 'online', 'email', 'digital'],
        '@Phone': ['call', 'phone', 'ring'],
        '@Office': ['office', 'meeting', 'upside'],
        '@Home': ['home', 'house'],
        '@Errands': ['buy', 'shop', 'pick up', 'errand', 'store'],
        '@Thinking': ['think', 'decide', 'plan', 'strategy', 'consider'],
        '@Reading': ['read', 'book', 'article'],
    }
    for ctx, keywords in contexts.items():
        if any(w in text_lower for w in keywords):
            result['context'] = ctx
            result['parsed_info'].append(f'Context: {ctx}')
            break
    
    # Detect project/account
    accounts = {
        'World Bank Group': ['world bank', 'wb', 'skills framework', 'qii', 'climate toolkit'],
        'HPE': ['hpe', 'clearbook', 'hewlett'],
        'CAA': ['caa', 'cybersecurity', 'axiom', 'sap project'],
        'Riyadh Air': ['riyadh', 'riyadh air', 'safety sense'],
        'AstraZeneca': ['astrazeneca', 'az', 'astra'],
        'BAT': ['bat', 'british american', 'webinar tours'],
        'Business Planning': ['business plan', 'new business', 'startup'],
        'Family - Children': ['ananya', 'daughter', 'baby'],
        'Family - Partner': ['mmd', 'wife'],
        'Family - Parents': ['parents', 'mom', 'dad', 'father', 'mother'],
        'Health': ['health', 'doctor', 'gym', 'exercise', 'diet', 'sleep'],
        'AI Skills Development': ['ai', 'artificial intelligence', 'prompt', 'claude', 'gpt'],
    }
    for proj, keywords in accounts.items():
        if any(w in text_lower for w in keywords):
            result['project'] = proj
            result['parsed_info'].append(f'Project: {proj}')
            if proj in ['World Bank Group', 'HPE', 'CAA', 'Riyadh Air', 'AstraZeneca', 'BAT']:
                result['category'] = 'Professional'
            break
    
    # Detect status
    if 'waiting for' in text_lower or 'waiting on' in text_lower:
        result['status'] = 'Waiting For'
        result['parsed_info'].append('Status: Waiting For')
    elif 'someday' in text_lower or 'maybe' in text_lower:
        result['status'] = 'Someday/Maybe'
        result['parsed_info'].append('Status: Someday/Maybe')
    elif 'recurring' in text_lower or 'daily' in text_lower or 'weekly' in text_lower:
        if 'daily' in text_lower:
            result['status'] = 'Recurring - Daily'
        elif 'weekly' in text_lower:
            result['status'] = 'Recurring - Weekly'
        elif 'monthly' in text_lower:
            result['status'] = 'Recurring - Monthly'
        result['parsed_info'].append(f"Status: {result['status']}")
    
    # Clean up the item text
    clean_text = text
    # Remove detected keywords for cleaner item name
    remove_patterns = [
        r'\b(high priority|low priority|critical|urgent)\b',
        r'\b(for work|for office|professional|personal)\b',
        r'\b(someday|maybe|waiting for|waiting on)\b',
        r'\b(daily|weekly|monthly|recurring)\b',
    ]
    for pattern in remove_patterns:
        clean_text = re.sub(pattern, '', clean_text, flags=re.IGNORECASE)
    
    result['item'] = clean_text.strip()
    result['next_action'] = result['item']
    
    return result

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/items', methods=['GET'])
def get_items():
    items = load_data()
    return jsonify(items)

@app.route('/api/items', methods=['POST'])
def add_item():
    data = request.json
    items = load_data()
    
    new_item = {
        'item': data.get('item', ''),
        'category': data.get('category', 'Personal'),
        'project': data.get('project', ''),
        'context': data.get('context', '@Anywhere'),
        'next_action': data.get('next_action', data.get('item', '')),
        'waiting_for': data.get('waiting_for', ''),
        'someday': data.get('someday', ''),
        'priority': data.get('priority', 'Medium'),
        'status': data.get('status', 'Next Action'),
        'energy': data.get('energy', 'Medium'),
        'time': data.get('time', ''),
        'due': data.get('due', ''),
        'delegated': data.get('delegated', ''),
        'notes': data.get('notes', f"Added via voice on {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    }
    
    items.append(new_item)
    save_data(items)
    
    return jsonify({'success': True, 'item': new_item, 'total': len(items)})

@app.route('/api/items/<int:index>', methods=['PUT'])
def update_item(index):
    data = request.json
    items = load_data()
    
    if 0 <= index < len(items):
        items[index].update(data)
        save_data(items)
        return jsonify({'success': True, 'item': items[index]})
    
    return jsonify({'success': False, 'error': 'Item not found'}), 404

@app.route('/api/items/<int:index>/complete', methods=['POST'])
def complete_item(index):
    items = load_data()
    
    if 0 <= index < len(items):
        items[index]['status'] = 'Completed'
        items[index]['notes'] = f"{items[index].get('notes', '')} | Completed {datetime.now().strftime('%Y-%m-%d %H:%M')}"
        save_data(items)
        return jsonify({'success': True, 'item': items[index]})
    
    return jsonify({'success': False, 'error': 'Item not found'}), 404

@app.route('/api/items/<int:index>', methods=['DELETE'])
def delete_item(index):
    items = load_data()
    
    if 0 <= index < len(items):
        deleted = items.pop(index)
        save_data(items)
        return jsonify({'success': True, 'deleted': deleted})
    
    return jsonify({'success': False, 'error': 'Item not found'}), 404

@app.route('/api/parse', methods=['POST'])
def parse_input():
    data = request.json
    text = data.get('text', '')
    parsed = parse_voice_input(text)
    return jsonify(parsed)

@app.route('/api/search', methods=['GET'])
def search_items():
    query = request.args.get('q', '').lower()
    items = load_data()
    
    results = []
    for i, item in enumerate(items):
        if query in item.get('item', '').lower() or query in item.get('project', '').lower():
            results.append({'index': i, **item})
    
    return jsonify(results)

@app.route('/api/stats', methods=['GET'])
def get_stats():
    items = load_data()
    
    stats = {
        'total': len(items),
        'by_category': {},
        'by_priority': {},
        'by_status': {},
        'by_context': {}
    }
    
    for item in items:
        cat = item.get('category', 'Unknown')
        pri = item.get('priority', 'Unknown')
        sta = item.get('status', 'Unknown')
        ctx = item.get('context', 'Unknown')
        
        stats['by_category'][cat] = stats['by_category'].get(cat, 0) + 1
        stats['by_priority'][pri] = stats['by_priority'].get(pri, 0) + 1
        stats['by_status'][sta] = stats['by_status'].get(sta, 0) + 1
        stats['by_context'][ctx] = stats['by_context'].get(ctx, 0) + 1
    
    return jsonify(stats)

@app.route('/api/export', methods=['GET'])
def export_data():
    """Re-generate Excel file with current data"""
    items = load_data()
    
    # Save to gtd_data.py format and regenerate Excel
    import pandas as pd
    from openpyxl import Workbook
    from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
    from openpyxl.utils import get_column_letter
    
    df = pd.DataFrame(items)
    df.columns = ['Item', 'Category', 'Project/Area', 'Context', 'Next Action', 'Waiting For', 
                  'Someday/Maybe', 'Priority', 'Status', 'Energy', 'Time Required', 'Due Date', 
                  'Delegated To', 'Notes']
    
    output_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'Shreyas_GTD_Master.xlsx')
    
    # Simple export
    df.to_excel(output_path, index=False)
    
    return jsonify({'success': True, 'path': output_path, 'count': len(items)})

if __name__ == '__main__':
    init_data()
    print("🚀 GTD Voice App starting...")
    print("📍 Open http://localhost:5050 in your browser")
    app.run(host='0.0.0.0', port=5050, debug=True)
