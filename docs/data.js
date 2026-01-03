// GTD Items Data - Pre-loaded from your capture session
const GTD_INITIAL_DATA = [
  // WORLD BANK GROUP
  {id:1, item:"Skills Framework - review details from Anurag", category:"Professional", project:"World Bank Group", context:"@Computer", priority:"High", status:"Next Action", energy:"Medium", time:"30 min", notes:"Deriving skills from courses", waiting_for:"Anurag"},
  {id:2, item:"QII project - needs attention", category:"Professional", project:"World Bank Group", context:"@Computer", priority:"Medium", status:"Next Action", energy:"High", time:"2 hours", notes:"Started but not paid attention to"},
  {id:3, item:"Climate Toolkit project", category:"Professional", project:"World Bank Group", context:"@Computer", priority:"Medium", status:"Next Action", energy:"High", time:"2 hours", notes:"Started but needs focus"},
  
  // HPE
  {id:4, item:"Gamified experience for sales (Clearbook)", category:"Professional", project:"HPE", context:"@Computer", priority:"High", status:"Next Action", energy:"High", time:"1 hour", notes:"Sales gamification"},
  
  // CAA
  {id:5, item:"Cybersecurity project - going live", category:"Professional", project:"CAA", context:"@Office", priority:"High", status:"Next Action", energy:"High", time:"2 hours", notes:"Going live when back"},
  {id:6, item:"SAP project - going live", category:"Professional", project:"CAA", context:"@Office", priority:"High", status:"Next Action", energy:"High", time:"2 hours", notes:"Going live when back"},
  {id:7, item:"Axiom Hub project - going live", category:"Professional", project:"CAA", context:"@Office", priority:"High", status:"Next Action", energy:"High", time:"2 hours", notes:"Going live when back"},
  {id:8, item:"Newsletters for Axiom", category:"Professional", project:"CAA", context:"@Computer", priority:"Low", status:"Someday/Maybe", energy:"Medium", time:"Ongoing", notes:"Future - when time allows"},
  
  // BAT
  {id:9, item:"Webinar Tours / Digital Learning Tool", category:"Professional", project:"BAT", context:"@Computer", priority:"Medium", status:"Next Action", energy:"Medium", time:"1 hour", notes:""},
  
  // RIYADH AIR
  {id:10, item:"Design Thinking project", category:"Professional", project:"Riyadh Air", context:"@Computer", priority:"High", status:"Next Action", energy:"Medium", time:"1 hour", notes:""},
  {id:11, item:"Growing Riyadh Air as an account", category:"Professional", project:"Riyadh Air", context:"@Thinking", priority:"High", status:"Project", energy:"High", time:"2 hours", notes:"Strategic account development"},
  {id:12, item:"Safety Sense project", category:"Professional", project:"Riyadh Air", context:"@Computer", priority:"Medium", status:"Waiting For", energy:"Low", time:"30 min", notes:"Under client feedback", waiting_for:"Client feedback"},
  {id:13, item:"Social media project", category:"Professional", project:"Riyadh Air", context:"@Computer", priority:"Medium", status:"Waiting For", energy:"Low", time:"30 min", notes:"Under client feedback", waiting_for:"Client feedback"},
  
  // ASTRAZENECA
  {id:14, item:"Think about how to grow AstraZeneca", category:"Professional", project:"AstraZeneca", context:"@Thinking", priority:"Medium", status:"Project", energy:"High", time:"2 hours", notes:"Strategic account development"},
  {id:15, item:"Follow-up on website project proposals", category:"Professional", project:"AstraZeneca", context:"@Computer", priority:"Medium", status:"Next Action", energy:"Low", time:"15 min", notes:"Proposals submitted"},
  
  // UPSIDE SUPPORT
  {id:16, item:"Website for Upside Learning", category:"Professional", project:"Upside Marketing", context:"@Computer", priority:"Medium", status:"Next Action", energy:"Medium", time:"1 hour", notes:""},
  {id:17, item:"Panam Air - SAAB pilot training ideas", category:"Professional", project:"Presales", context:"@Thinking", priority:"High", status:"Next Action", energy:"High", time:"2 hours", notes:"Making 2000-page PDF interesting"},
  
  // AI STRATEGIC INITIATIVES
  {id:18, item:"AI workflows for efficiency and quality", category:"Professional", project:"AI Strategic", context:"@Computer", priority:"High", status:"Project", energy:"High", time:"Ongoing", notes:"Make outputs people want to learn from"},
  {id:19, item:"How processes change with AI", category:"Professional", project:"AI Strategic", context:"@Thinking", priority:"High", status:"Project", energy:"High", time:"3 hours", notes:""},
  {id:20, item:"AI co-creation with clients", category:"Professional", project:"AI Strategic", context:"@Computer", priority:"High", status:"Project", energy:"High", time:"2 hours", notes:"Proposals and prototypes"},
  
  // AI SKILLS - CORE
  {id:21, item:"Get better at working with AI", category:"Professional", project:"AI Skills", context:"@Computer", priority:"Critical", status:"Recurring - Daily", energy:"High", time:"30-60 min", notes:"CORE TASK - daily practice"},
  {id:22, item:"Build personal AI prompt library", category:"Professional", project:"AI Skills", context:"@Computer", priority:"High", status:"Project", energy:"Medium", time:"Ongoing", notes:"Document what works"},
  {id:23, item:"Learn advanced AI techniques", category:"Professional", project:"AI Skills", context:"@Computer", priority:"High", status:"Next Action", energy:"High", time:"2 hours", notes:"Chain-of-thought, multi-agent"},
  {id:24, item:"Apply AI to daily workflows", category:"Professional", project:"AI Skills", context:"@Computer", priority:"High", status:"Next Action", energy:"Medium", time:"1 hour", notes:"Identify 3 tasks to enhance"},
  
  // ROLE - AI Integration
  {id:25, item:"Review projects for AI enhancement", category:"Professional", project:"AI Integration", context:"@Computer", priority:"High", status:"Recurring - Weekly", energy:"Medium", time:"1 hour", notes:"2-3 projects weekly"},
  {id:26, item:"Create reusable prompt/template", category:"Professional", project:"AI Integration", context:"@Computer", priority:"Medium", status:"Recurring - Weekly", energy:"Medium", time:"1 hour", notes:""},
  {id:27, item:"Run AI clinic with project teams", category:"Professional", project:"AI Integration", context:"@Office", priority:"Medium", status:"Recurring - Weekly", energy:"Medium", time:"15-30 min", notes:"Coaching"},
  {id:28, item:"Present AI case study internally", category:"Professional", project:"AI Integration", context:"@Office", priority:"Medium", status:"Recurring - Monthly", energy:"High", time:"3 hours", notes:""},
  {id:29, item:"Update AI capabilities deck", category:"Professional", project:"AI Integration", context:"@Computer", priority:"Medium", status:"Recurring - Monthly", energy:"Medium", time:"2 hours", notes:"For presales"},
  {id:30, item:"Pilot new AI tool", category:"Professional", project:"AI Integration", context:"@Computer", priority:"Medium", status:"Recurring - Monthly", energy:"Medium", time:"2 hours", notes:""},
  {id:31, item:"Run AI for Learning Design workshop", category:"Professional", project:"AI Integration", context:"@Office", priority:"Medium", status:"Recurring - Quarterly", energy:"High", time:"4 hours", notes:""},
  {id:32, item:"Measure AI gains", category:"Professional", project:"AI Integration", context:"@Computer", priority:"Medium", status:"Recurring - Quarterly", energy:"High", time:"3 hours", notes:"Efficiency, quality, time saved"},
  
  // ROLE - Strategic Accounts
  {id:33, item:"Check-in calls with key stakeholders", category:"Professional", project:"Strategic Accounts", context:"@Phone", priority:"High", status:"Recurring - Weekly", energy:"Medium", time:"1 hour", notes:"WB, HPE, Riyadh Air"},
  {id:34, item:"Review project health", category:"Professional", project:"Strategic Accounts", context:"@Computer", priority:"High", status:"Recurring - Weekly", energy:"Medium", time:"1 hour", notes:"Delivering? Happy?"},
  {id:35, item:"Identify growth opportunity per account", category:"Professional", project:"Strategic Accounts", context:"@Thinking", priority:"Medium", status:"Recurring - Weekly", energy:"Medium", time:"1 hour", notes:""},
  {id:36, item:"Strategic account review", category:"Professional", project:"Strategic Accounts", context:"@Office", priority:"High", status:"Recurring - Monthly", energy:"High", time:"2 hours", notes:"What's working/at risk"},
  {id:37, item:"Full account planning session", category:"Professional", project:"Strategic Accounts", context:"@Office", priority:"High", status:"Recurring - Quarterly", energy:"High", time:"4 hours", notes:"Each strategic account"},
  
  // ROLE - Innovation Lab
  {id:38, item:"Rapid prototyping time", category:"Professional", project:"Innovation Lab", context:"@Computer", priority:"High", status:"Recurring - Weekly", energy:"High", time:"3-5 hours", notes:"Dedicated weekly time"},
  {id:39, item:"Work on sandbox projects", category:"Professional", project:"Innovation Lab", context:"@Computer", priority:"Medium", status:"Recurring - Weekly", energy:"High", time:"2 hours", notes:"1-2 active projects"},
  {id:40, item:"Showcase innovation to team", category:"Professional", project:"Innovation Lab", context:"@Office", priority:"Medium", status:"Recurring - Monthly", energy:"Medium", time:"2 hours", notes:""},
  
  // ROLE - Presales-Delivery Bridge
  {id:41, item:"Join presales calls", category:"Professional", project:"Presales Bridge", context:"@Phone", priority:"High", status:"As Needed", energy:"Medium", time:"1-2 hours", notes:"Understand client problem"},
  {id:42, item:"Brief delivery team on handoffs", category:"Professional", project:"Presales Bridge", context:"@Office", priority:"High", status:"As Needed", energy:"Medium", time:"1 hour", notes:"Vision and commitments"},
  {id:43, item:"Proposal retrospective", category:"Professional", project:"Presales Bridge", context:"@Office", priority:"Medium", status:"Recurring - Monthly", energy:"High", time:"2 hours", notes:"Won/lost analysis"},
  
  // COMMITMENTS
  {id:44, item:"Establish work-hour boundaries with Boss", category:"Professional", project:"Commitments", context:"@Office", priority:"High", status:"Next Action", energy:"Medium", time:"30 min", notes:"Flexible but limited - avoid burnout"},
  {id:45, item:"Set up 6-month meeting with Janki", category:"Professional", project:"Commitments", context:"@Office", priority:"High", status:"Next Action", energy:"Low", time:"15 min", notes:""},
  {id:46, item:"Address Janki quality and speed issues", category:"Professional", project:"Commitments", context:"@Office", priority:"High", status:"Next Action", energy:"High", time:"1 hour", notes:"Quality bad, slow - but good attitude"},
  {id:47, item:"Learn people management", category:"Professional", project:"Staff Development", context:"@Reading", priority:"Medium", status:"Project", energy:"Medium", time:"2 hours", notes:"Grove, Mochary books"},
  {id:48, item:"Set up meetings with all managers", category:"Professional", project:"Post-Holiday", context:"@Office", priority:"High", status:"Next Action", energy:"Low", time:"1 hour", notes:"When back - take stock"},
  
  // SYSTEMS
  {id:49, item:"Broken iMac - decide fate", category:"Professional", project:"Systems", context:"@Home", priority:"Low", status:"Next Action", energy:"Low", time:"30 min", notes:"Sell/fix/throw"},
  {id:50, item:"Make software list", category:"Professional", project:"Systems", context:"@Computer", priority:"Low", status:"Next Action", energy:"Low", time:"1 hour", notes:""},
  {id:51, item:"Figure out AI and design subscriptions", category:"Professional", project:"Systems", context:"@Computer", priority:"Medium", status:"Next Action", energy:"Medium", time:"1 hour", notes:"Personal vs company card"},
  
  // NETWORKING
  {id:52, item:"Start networking meetings", category:"Professional", project:"Networking", context:"@Anywhere", priority:"High", status:"Project", energy:"Medium", time:"1 hour", notes:"For future business"},
  {id:53, item:"Set up Calendly", category:"Professional", project:"Networking", context:"@Computer", priority:"Medium", status:"Next Action", energy:"Low", time:"30 min", notes:""},
  {id:54, item:"Track industry events", category:"Professional", project:"Industry", context:"@Computer", priority:"Medium", status:"Project", energy:"Low", time:"2 hours", notes:"CLO, DevLearn, Learning Tech"},
  
  // ===== PERSONAL =====
  
  // BUSINESS PLANNING
  {id:55, item:"Complete business plan in Q1 2026", category:"Personal", project:"Business Planning", context:"@Computer", priority:"Critical", status:"Project", energy:"High", time:"20+ hours", notes:"Start business after quitting", due:"Q1 2026"},
  {id:56, item:"Fill in all roles in business plan", category:"Personal", project:"Business Planning", context:"@Computer", priority:"High", status:"Next Action", energy:"High", time:"4 hours", notes:"Make it watertight"},
  {id:57, item:"Marketing plans for new business", category:"Personal", project:"Business Planning", context:"@Computer", priority:"High", status:"Project", energy:"High", time:"4 hours", notes:""},
  {id:58, item:"Financial plans for new business", category:"Personal", project:"Business Planning", context:"@Computer", priority:"High", status:"Project", energy:"High", time:"4 hours", notes:""},
  
  // PERSONAL PROJECTS
  {id:59, item:"Complete personal website", category:"Personal", project:"Personal Projects", context:"@Computer", priority:"Medium", status:"Project", energy:"Medium", time:"10 hours", notes:"Started but not completed"},
  {id:60, item:"Clarify professional identity", category:"Personal", project:"Professional Identity", context:"@Thinking", priority:"High", status:"Project", energy:"High", time:"3 hours", notes:"Talks? Writing? Social media?"},
  {id:61, item:"Get professional coaching", category:"Personal", project:"Professional Identity", context:"@Anywhere", priority:"High", status:"Next Action", energy:"Medium", time:"2 hours", notes:"Professional therapy equivalent"},
  
  // GOALS
  {id:62, item:"Revisit Measure What Matters book", category:"Personal", project:"Goals", context:"@Reading", priority:"Medium", status:"Next Action", energy:"Low", time:"3 hours", notes:"OKRs"},
  {id:63, item:"Set goals for this year", category:"Personal", project:"Goals", context:"@Thinking", priority:"High", status:"Next Action", energy:"High", time:"2 hours", notes:"Goals that don't break me"},
  
  // OFFICE SETUP
  {id:64, item:"Set up office space in veranda", category:"Personal", project:"Office Setup", context:"@Home", priority:"High", status:"Project", energy:"Medium", time:"2 hours", notes:"Need security solution"},
  {id:65, item:"Get good office chair", category:"Personal", project:"Office Setup", context:"@Errands", priority:"High", status:"Next Action", energy:"Low", time:"2 hours", notes:"Ergonomic"},
  
  // HEALTH
  {id:66, item:"How to reduce 6 kilos", category:"Personal", project:"Health - Weight", context:"@Thinking", priority:"Medium", status:"Project", energy:"Medium", time:"1 hour", notes:"Sustainable approach"},
  {id:67, item:"Get proper sleep", category:"Personal", project:"Health - Sleep", context:"@Home", priority:"High", status:"Ongoing", energy:"Low", time:"Ongoing", notes:"Critical for performance"},
  {id:68, item:"Get 10K steps daily", category:"Personal", project:"Health - Exercise", context:"@Anywhere", priority:"Medium", status:"Recurring - Daily", energy:"Low", time:"1 hour", notes:""},
  {id:69, item:"Schedule GP checkup", category:"Personal", project:"Health", context:"@Phone", priority:"High", status:"Next Action", energy:"Low", time:"15 min", notes:""},
  {id:70, item:"Schedule wisdom teeth removal", category:"Personal", project:"Health - Dentist", context:"@Phone", priority:"High", status:"Next Action", energy:"Low", time:"15 min", notes:"4 teeth affecting others"},
  {id:71, item:"Schedule quarterly checkup", category:"Personal", project:"Health", context:"@Phone", priority:"High", status:"Next Action", energy:"Low", time:"15 min", notes:"Due now"},
  {id:72, item:"Eliminate/reduce outside food", category:"Personal", project:"Health - Diet", context:"@Home", priority:"High", status:"Next Action", energy:"Low", time:"Ongoing", notes:"Step 1"},
  
  // MINDFULNESS
  {id:73, item:"Reduce screen time on phone", category:"Personal", project:"Mindfulness", context:"@Anywhere", priority:"High", status:"Next Action", energy:"Low", time:"15 min", notes:"Set limits"},
  {id:74, item:"Increase mindfulness practice", category:"Personal", project:"Mindfulness", context:"@Anywhere", priority:"Medium", status:"Project", energy:"Medium", time:"15 min daily", notes:"Reduce compulsions"},
  
  // FINANCES
  {id:75, item:"Start tracking expenses", category:"Personal", project:"Finance", context:"@Computer", priority:"High", status:"Next Action", energy:"Low", time:"1 hour", notes:"A lot of expenses"},
  {id:76, item:"Consolidate all insurance details", category:"Personal", project:"Finance", context:"@Computer", priority:"High", status:"Next Action", energy:"Medium", time:"2 hours", notes:"Mine and family"},
  {id:77, item:"Consolidate all savings/stock accounts", category:"Personal", project:"Finance", context:"@Computer", priority:"High", status:"Next Action", energy:"Medium", time:"2 hours", notes:""},
  {id:78, item:"Plan finances with father", category:"Personal", project:"Finance", context:"@Phone", priority:"High", status:"Next Action", energy:"Medium", time:"2 hours", notes:"Tax, investments, debt"},
  {id:79, item:"Ensure regular home loan payments", category:"Personal", project:"Finance", context:"@Computer", priority:"High", status:"Recurring - Monthly", energy:"Low", time:"15 min", notes:"30-year loan"},
  
  // FAMILY
  {id:80, item:"Be more present with Ananya", category:"Personal", project:"Family - Ananya", context:"@Home", priority:"Critical", status:"Ongoing", energy:"Low", time:"Ongoing", notes:"Put away devices"},
  {id:81, item:"Think about making Divya's life better", category:"Personal", project:"Family - Divya", context:"@Thinking", priority:"High", status:"Project", energy:"Medium", time:"1 hour", notes:""},
  {id:82, item:"Meet parents twice a quarter", category:"Personal", project:"Family - Parents", context:"@Phone", priority:"High", status:"Recurring - Quarterly", energy:"Low", time:"Ongoing", notes:"8x per year both sets"},
  {id:83, item:"Call parents regularly", category:"Personal", project:"Family - Parents", context:"@Phone", priority:"Medium", status:"Recurring - Weekly", energy:"Low", time:"30 min", notes:""},
  
  // HOME
  {id:84, item:"Get contractor quote on renovations", category:"Personal", project:"Home Renovations", context:"@Home", priority:"High", status:"Waiting For", energy:"Low", time:"", notes:"Garden, kitchen, bathroom", waiting_for:"Contractor quotes"},
  {id:85, item:"Get society permission for remodeling", category:"Personal", project:"Home Renovations", context:"@Errands", priority:"Medium", status:"Next Action", energy:"Low", time:"30 min", notes:""},
  {id:86, item:"Get house in proper shape", category:"Personal", project:"Home Renovations", context:"@Home", priority:"High", status:"Project", energy:"High", time:"3 hours", notes:"Bathrooms, kitchen, garden"},
  {id:87, item:"Execute minimalism project", category:"Personal", project:"Home - Minimalism", context:"@Home", priority:"Medium", status:"Project", energy:"Medium", time:"Ongoing", notes:"Purge kitchen, clothes"},
  
  // EVENTS
  {id:88, item:"Plan vacation with wife and daughter", category:"Personal", project:"Events - Vacation", context:"@Computer", priority:"High", status:"Project", energy:"Medium", time:"3 hours", notes:"3 years married - no vacation yet!"},
  {id:89, item:"Plan date nights", category:"Personal", project:"Events - Date", context:"@Anywhere", priority:"Medium", status:"Next Action", energy:"Low", time:"30 min", notes:""},
  {id:90, item:"Make list of important dates", category:"Personal", project:"Events", context:"@Computer", priority:"Medium", status:"Next Action", energy:"Low", time:"1 hour", notes:"Birthdays, anniversaries"},
  {id:91, item:"Research Dubai trip", category:"Personal", project:"Events - Travel", context:"@Computer", priority:"Medium", status:"Next Action", energy:"Low", time:"1 hour", notes:"March? With baby?"},
  
  // RELATIONSHIPS
  {id:92, item:"Stay in touch with friends", category:"Personal", project:"Relationships", context:"@Phone", priority:"Medium", status:"Recurring - Weekly", energy:"Low", time:"30 min", notes:"Phone better than text"},
  
  // LEISURE
  {id:93, item:"Find time for gaming", category:"Personal", project:"Leisure", context:"@Home", priority:"Medium", status:"Recurring - Weekly", energy:"Low", time:"2 hours", notes:"Purifies soul"},
  {id:94, item:"Schedule leisure planning session", category:"Personal", project:"Leisure", context:"@Thinking", priority:"Medium", status:"Next Action", energy:"Low", time:"2-3 hours", notes:"Nothing planned currently"},
  
  // OTHER
  {id:95, item:"Repair bike for commuting", category:"Personal", project:"Transportation", context:"@Errands", priority:"Medium", status:"Next Action", energy:"Low", time:"2 hours", notes:"Limited to cabs now"},
  {id:96, item:"Start skincare routine", category:"Personal", project:"Self-care", context:"@Home", priority:"Low", status:"Next Action", energy:"Low", time:"30 min", notes:"Look good on calls"},
  {id:97, item:"Purge unnecessary clothes", category:"Personal", project:"Home - Minimalism", context:"@Home", priority:"Low", status:"Next Action", energy:"Low", time:"2 hours", notes:""},
  {id:98, item:"Organize stationery", category:"Personal", project:"Home Office", context:"@Home", priority:"Low", status:"Next Action", energy:"Low", time:"2 hours", notes:""},
  {id:99, item:"Get portable mic", category:"Personal", project:"Equipment", context:"@Errands", priority:"Medium", status:"Next Action", energy:"Low", time:"1 hour", notes:""},
  {id:100, item:"Research family activities for year", category:"Personal", project:"Family", context:"@Computer", priority:"Medium", status:"Project", energy:"Medium", time:"2 hours", notes:"Multiple stakeholder groups"},
  {id:101, item:"Write about who I want to be at Upside", category:"Professional", project:"Reflection", context:"@Thinking", priority:"Medium", status:"Project", energy:"High", time:"2 hours", notes:"Deep thinking"}
];
