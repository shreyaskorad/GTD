# GTD Voice Capture App

A personal GTD (Getting Things Done) system with voice dictation support, built for capturing and processing tasks using David Allen's methodology.

## Features

🎤 **Voice Dictation** - Speak your tasks, the app parses them automatically  
📊 **Smart Parsing** - Detects priority, context, project, and category  
📋 **GTD Workflow** - Next Actions, Projects, Waiting For, Someday/Maybe  
🎨 **Color-Coded Excel Export** - Formatted spreadsheet with filters  
🔍 **Search & Filter** - Quickly find items by status or category  

## Quick Start

```bash
# Create virtual environment
python3 -m venv .venv
source .venv/bin/activate

# Install dependencies
pip install flask flask-cors pandas openpyxl

# Start the web app
cd webapp
python server.py
```

Open http://localhost:5050 in your browser (Chrome/Edge recommended for voice).

## Project Structure

```
GTD-Gather/
├── webapp/
│   ├── server.py          # Flask backend
│   ├── templates/
│   │   └── index.html     # Voice capture UI
│   └── gtd_data.json      # Data storage
├── gtd_data.py            # Initial GTD items
├── create_excel.py        # Excel generator
└── Shreyas_GTD_Master.xlsx # Exported spreadsheet
```

## Voice Commands

The app understands natural language:

- *"Call John about the project - high priority"* → @Phone, High
- *"Buy groceries on the way home"* → @Errands
- *"Think about business plan - critical"* → @Thinking, Critical
- *"Waiting for client feedback on proposal"* → Waiting For

## GTD Categories

- **Priority**: Critical 🔴, High 🟠, Medium 🟡, Low 🟢
- **Status**: Next Action, Project, Waiting For, Someday/Maybe, Recurring
- **Context**: @Computer, @Phone, @Office, @Home, @Errands, @Thinking, @Anywhere
- **Category**: Professional, Personal

## Author

Shreyas - Strategic Innovation Lead

## License

MIT
