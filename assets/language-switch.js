(function () {
  "use strict";

  const translations = {
    "李林豪 · AI 产品经理个人主页": "Linhao Li · AI Product Manager",
    "完整作品集 · 李林豪": "Full Portfolio · Linhao Li",
    "个人主页": "Home",
    "简介": "About",
    "能力": "Capabilities",
    "经历": "Experience",
    "作品": "Work",
    "联系": "Contact",
    "主导航": "Main navigation",
    "意向岗位：AI 产品经理": "Target role: AI Product Manager",
    "李林豪": "Linhao Li",
    "把值得验证的业务想法，推进为可体验、可验证的产品。": "Turning business ideas worth testing into products people can experience and validate.",
    "借助 Codex、OpenClaw 等 AI Coding 与 Agent 工具，从业务问题出发，完成 AI 应用场景拆解、产品方案设计、原型搭建、工作流验证与迭代优化。": "Using AI coding and agent tools such as Codex and OpenClaw, I work from business problems to application scoping, product solution design, prototype development, workflow validation, and iterative improvement.",
    "查看 Demo": "Explore demos",
    "查看完整作品集": "View full portfolio",
    "AI 产品 MVP": "AI product MVPs",
    "Agent 角色设计": "Agent role designs",
    "可复用技能模块": "Reusable skill modules",
    "跨界": "Cross-domain",
    "金融 × AI 探索": "Finance × AI",
    "关于我": "About me",
    "关注 AI 产品从想法到验证。": "Focused on taking AI products from idea to validation.",
    "我会先理解用户需求、业务目标与风险边界，再判断哪些问题真正适合通过 AI 产品解决。": "I start by understanding user needs, business goals, and risk boundaries, then identify which problems are genuinely worth solving with AI.",
    "确定方向后，我习惯将想法推进为可点击、可演示、可验证的产品原型，通过真实交互呈现业务理解、产品判断与验证路径。": "Once the direction is clear, I turn the idea into an interactive, demonstrable, and testable prototype that makes the business logic, product judgment, and validation path tangible.",
    "意向岗位": "Target role",
    "AI 产品经理": "AI Product Manager",
    "所在城市": "Location",
    "厦门 / 福建": "Xiamen, Fujian",
    "教育背景": "Education",
    "金融学硕士": "Master of Science in Finance",
    "南佛罗里达大学": "University of South Florida",
    "土木工程学士": "Bachelor of Engineering in Civil Engineering",
    "九江学院": "Jiujiang University",
    "认证": "Certifications",
    "证券 / 基金 / 投顾": "Securities / Funds / Investment Advisory",
    "产品、业务、技术三条线": "Product, business, and technology",
    "从发现问题到做出原型，完整的闭环能力。": "An end-to-end practice from problem discovery to working prototype.",
    "AI 产品设计": "AI product design",
    "理解 RAG、Agent、Prompt Engineering、工具调用与 AI Skills 在业务场景中的应用方式，并将其用于产品功能、工作流与评估方案设计。": "I understand how RAG, agents, prompt engineering, tool calling, and AI skills can be applied in business contexts, and use them to shape product features, workflows, and evaluation plans.",
    "金融业务理解": "Financial domain expertise",
    "具备证券、投顾、零售与机构支持经验，能把金融业务中的合规、风控、运营和客户服务问题转化为 AI 场景。": "Experience across securities, investment advisory, retail, and institutional support, translating compliance, risk, operations, and service problems into viable AI use cases.",
    "证券业务 / 风险识别 / 客户运营": "Securities / Risk identification / Customer operations",
    "原型与验证": "Prototyping and validation",
    "借助 Codex、OpenClaw 等 AI Coding 与 Agent 工具搭建可体验 MVP，用真实交互验证产品方案与工作流的可行性。": "Using AI coding and agent tools such as Codex and OpenClaw, I build interactive MVPs to test product concepts and workflow feasibility through real interactions.",
    "AI Coding / Flask / Gradio / API": "AI Coding / Flask / Gradio / APIs",
    "AI 实践与职业经历": "AI practice and professional experience",
    "AI 产品实践": "AI product practice",
    "2025.03 - 至今": "Mar 2025 – Present",
    "AI Agent 工作系统原型": "AI agent work-system prototype",
    "自研项目": "Independent project",
    "借助 Codex、OpenClaw 等 AI Coding 与 Agent 工具搭建个人 AI Agent 工作系统原型，设计 8 个 Agent 的角色分工与协作思路": "Using Codex, OpenClaw, and other AI coding and agent tools, I built a personal AI agent work-system prototype and developed role divisions and collaboration concepts for eight agents.",
    "围绕金融资讯、投资分析、公众号内容采编、办公秘书等场景，拆解任务链路与人机协作边界": "Mapped task flows and human–AI boundaries for financial news, investment analysis, content operations, and office-assistant scenarios.",
    "设计跨 Agent 协作方案，验证从信息抓取、分析整理到内容生成的工作流": "Outlined cross-agent collaboration patterns and tested workflows spanning information retrieval, analysis, synthesis, and content generation.",
    "以飞书日报、行业研究简报、公众号选题与初稿生成作为原型验证场景，持续检查工作流输出与可用性": "Used Feishu daily reports, industry briefs, topic selection, and first-draft generation as prototype-validation scenarios, continuously reviewing workflow output and usability.",
    "沉淀 20+ 个可复用技能模块，覆盖搜索、图表、文档、飞书集成等高频场景": "Created 20+ reusable skill modules for search, charts, documents, and Feishu integrations.",
    "职业经历": "Professional experience",
    "2025.11 - 至今": "Nov 2025 – Present",
    "投资顾问": "Investment Advisor",
    "华福证券有限责任公司厦门观音山台东路证券营业部": "Huafu Securities, Xiamen Guanyinshan Taidong Road Branch",
    "为高净值客户提供专业投资咨询，定制个性化资产配置方案": "Provide investment advisory services and tailored asset-allocation plans for high-net-worth clients.",
    "维护并拓展核心客户关系，定期投资组合回顾与调整": "Develop core client relationships and conduct regular portfolio reviews and adjustments.",
    "收集分析市场信息与行业动态，提供及时的市场洞察与投资建议": "Analyze market and industry developments to deliver timely insights and recommendations.",
    "2023.09 - 2025.10": "Sep 2023 – Oct 2025",
    "综合部（管培生）": "General Administration, Management Trainee",
    "华福证券厦门分公司": "Huafu Securities, Xiamen Branch",
    "策划组织工会与党建活动，协调员工福利采购发放": "Planned employee and organizational activities and coordinated employee-benefit procurement.",
    "统筹行政事务，优化档案管理流程，确保高效有序运行": "Managed administrative operations and improved records-management processes.",
    "编制月度、季度行政工作报告，为管理层运营决策提供参考": "Prepared monthly and quarterly operating reports for management decisions.",
    "参与分公司重要接待事务，树立专业企业形象": "Supported key branch events and external stakeholder reception.",
    "2021.08 - 2023.04": "Aug 2021 – Apr 2023",
    "财管/机构支持岗（管培生）": "Wealth & Institutional Support, Management Trainee",
    "协助拜访上市公司和私募机构，支持机构客户拓展": "Supported outreach to listed companies and private investment institutions.",
    "解答零售业务问题，处理客户咨询与业务操作": "Handled retail-business questions, client inquiries, and operational requests.",
    "督导投资方案实施，编制零售业务月报与基金客户画像分析": "Tracked investment-plan execution and prepared retail reports and fund-client analyses.",
    "借调期间提供柜台服务，办理开户、销户、资金转账等业务": "Provided branch-counter support for account opening, closure, and fund transfers.",
    "2020.02 - 2020.11": "Feb 2020 – Nov 2020",
    "金融服务代表": "Financial Services Representative",
    "Pipestone Payments，纽约": "Pipestone Payments, New York",
    "核验支付账单与交易数据，确保符合银行规则及监管要求": "Reviewed payment statements and transaction data for banking and regulatory compliance.",
    "维护客户关系，了解商户需求，提供支付解决方案": "Managed client relationships and provided payment solutions based on merchant needs.",
    "协助市场团队制定用户扩展策略，推广支付产品": "Supported customer-growth strategy and payment-product promotion.",
    "2019.05 - 2019.07": "May 2019 – Jul 2019",
    "项目助理": "Project Assistant",
    "HI-Skyline 投资管理公司": "HI-Skyline Investment Management",
    "收集整理财务数据，协助团队完成财务报表分析": "Collected financial data and supported financial-statement analysis.",
    "协助投资者提交财务材料，跟踪资金往来进度": "Assisted investors with financial documentation and tracked fund movements.",
    "编制数据报告，记录项目进展与财务数据变化": "Prepared data reports covering project progress and financial changes.",
    "精选项目": "Selected work",
    "精选 4 个可体验 Demo，突出 AI 前台增长、智能客服 Agent、AI 商品图生成与金融风控，展示不同业务场景下的 AI 产品原型验证实践。": "Four highlighted demos featuring AI Receptionist growth, customer-service agents, AI product imagery, and financial risk control, demonstrating prototype validation across different business contexts.",
    "查看完整作品集（11 个项目）": "View all 11 projects",
    "AI 前台 · 增长追回": "AIR · Growth Recovery",
    "AI 前台增长与机会追回系统": "AI Receptionist Growth & Recovery System",
    "基于 AI 前台通话分析设计机会追回、业务结果评估与安全试运行闭环，面向普通 AI 产品经理岗位。": "An AI PM concept that turns AI receptionist call analytics into opportunity recovery, outcome measurement, and safe rollout loops.",
    "通话分析": "Call analytics",
    "机会追回": "Recovery Queue",
    "能力路线图": "Skill Roadmap",
    "Agent · 客服场景": "Agent · Customer service",
    "智能客服 Agent": "Customer Service Agent",
    "识别 FAQ、订单、投诉与转人工意图，并通过工具调用完成查询、建单和升级。": "Recognizes FAQ, order, complaint, and human-handoff intents, then uses tool calling to complete lookup, ticketing, and escalation flows.",
    "FinTech · 风险决策": "FinTech · Risk decisioning",
    "金融风控 AI 助手": "Financial Risk AI Assistant",
    "以五维规则形成 100 分风险评分，再由 DeepSeek 输出可复核的风险解释与材料建议。": "A five-dimension rules engine produces a 100-point risk score, while DeepSeek generates reviewable explanations and document requests.",
    "规则评分": "Rules-based scoring",
    "人工复核": "Human review",
    "查看详情": "View project",
    "Knowledge Graph · 知识结构化": "Knowledge Graph · Structured knowledge",
    "知识图谱可视化": "Knowledge Graph Explorer",
    "从文本抽取实体关系，支持图谱交互、关系查看与路径推理。": "Extract entities and relationships from text, then explore links and reasoning paths interactively.",
    "知识图谱": "Knowledge graph",
    "关系推理": "Relationship reasoning",
    "可视化": "Visualization",
    "AIGC · 视觉生成": "Generative AI · Visual content",
    "跨境电商 AI 商品图生成器": "AI Product Image Generator for Cross-border E-commerce",
    "基于商品参考图与结构化属性生成 5 类电商视觉素材，并用真实参数绘制尺寸图。": "Generate five types of e-commerce visuals from a product reference image and structured attributes, with dimension graphics based on real measurements.",
    "Agent · 工作流编排": "Agent · Workflow orchestration",
    "GenAI Agent 平台": "GenAI Agent Platform",
    "通过自然语言生成可编辑工作流，支持拖拽编排、运行与导出。": "Generate editable workflows from natural language, then refine, run, and export them.",
    "AI 产品原型验证工具箱": "AI product prototype-validation toolkit",
    "大模型应用设计": "LLM application design",
    "Prompt、RAG、Agent、AIGC 工作流，围绕真实业务场景设计 AI 产品能力。": "Prompting, RAG, agents, and generative-media workflows designed around real business scenarios.",
    "AI 辅助原型": "AI-assisted prototyping",
    "AI Coding、Python、Flask、Gradio、API，快速搭建可体验 MVP Demo。": "AI-assisted coding, Python, Flask, Gradio, and APIs for rapid working MVPs.",
    "产品验证闭环": "Product validation loop",
    "需求分析、用户流程、PRD、方案分析、指标设计与迭代规划，推动想法从判断走向验证。": "Requirements, user flows, PRDs, solution analysis, metrics, and iteration planning that move ideas from judgment to evidence.",
    "数据与分析工具": "Data and analytics",
    "SQL、Excel、Python、可视化图表、指标拆解与数据报告，支持产品判断与业务复盘。": "SQL, Excel, Python, visualization, metric decomposition, and reporting for product decisions and business reviews.",
    "欢迎联系我": "Let’s connect",
    "期待与关注 AI 产品落地的团队交流，把业务想法推进为可体验、可验证的产品。": "I’d be glad to connect with teams focused on practical AI products and turn business ideas into experiences that can be tested and validated.",
    "福建厦门": "Xiamen, Fujian",
    "李林豪 · AI 产品经理个人主页 · 2026": "Linhao Li · AI Product Manager · 2026",

    "完整作品集": "Full portfolio",
    "11 个可体验 AI 产品 Demo，覆盖内容生成、知识服务、智能 Agent、业务自动化、数据分析与 AI 前台产品方案。": "Eleven interactive AI product demos spanning content generation, knowledge services, intelligent agents, business automation, data analysis, and an AI Receptionist product concept.",
    "项目作品横向浏览": "Horizontal project browser",
    "通话分析 → 业务结果评估 → 机会追回 → 安全试运行": "AIR analytics → business outcome measurement → opportunity recovery → safe experiments",
    "评估": " evaluation",
    "队列": " queue",
    "跨境电商 AI 商品图": "AI Product Imagery",
    "上传商品参考图 → 约束关键特征 → 生成 5 类电商视觉素材": "Upload a reference → preserve key features → generate five e-commerce visual formats",
    "类素材": " formats",
    "真实": "Real",
    "尺寸": " dimensions",
    "特征": "Feature",
    "约束": " preservation",
    "AI 知识库问答": "AI Knowledge Base Q&A",
    "上传文档 → 自动解析 → 自然语言问答 + 来源引用": "Upload documents → parse automatically → answer with source citations",
    "检索": " retrieval",
    "多格式": "Multi-format",
    "支持": " support",
    "驱动": " powered",
    "本地向量": "Local vectors",
    "B/C 双端": "Admin + user views",
    "游戏 NPC 智能对话": "AI NPC Dialogue System",
    "LLM 驱动 NPC 对话引擎，上下文记忆 + 情感状态 + JSON API": "LLM-driven NPC dialogue with memory, emotional state, and a JSON API",
    "个角色": " characters",
    "多轮": "Multi-turn",
    "记忆": " memory",
    "情感": "Emotion",
    "追踪": " tracking",
    "AI 自动巡检报告": "AI Inspection Report System",
    "3 类行业 SOP 模板 → AI 评估 → 整改建议与 PDF 报告": "Three industry SOPs → AI evaluation → remediation plan and PDF report",
    "行业SOP": " industry SOPs",
    "评估": " evaluation",
    "报告": " report",
    "SOP引擎": "SOP engine",
    "自动化": "Automation",
    "报告生成": "Report generation",
    "智能客服 Agent": "Customer Service Agent",
    "意图识别 → FAQ 检索 → 工单创建 → 转人工与会话升级": "Intent detection → FAQ retrieval → ticket creation → human escalation",
    "类工具": " tools",
    "转": "Human",
    "人工": " handoff",
    "五维规则评分 + DeepSeek 风险解释 + 财报原文扫描": "Five-dimension scoring + DeepSeek explanations + source-text risk scan",
    "5维": "5D",
    "评分": " scoring",
    "场景": " scenarios",
    "原文": "Source",
    "依据": " evidence",
    "规则引擎": "Rules engine",
    "直播 AI 助手": "Live-commerce AI Assistant",
    "配置商品事实 → 回复模拟弹幕 → 生成合规直播脚本": "Configure product facts → answer sample comments → generate compliant scripts",
    "弹幕": "Comments",
    "回复": " reply",
    "话术": "Script",
    "生成": " generation",
    "事实": "Fact",
    "安全回退": "Safe fallback",
    "AIoT 智能家居": "AIoT Smart Home",
    "自然语言指令 → 状态引擎执行 → 全屋设备实时同步": "Natural-language command → state-engine execution → real-time device sync",
    "状态": "State",
    "同步": " sync",
    "设备": "Device",
    "事件": " events",
    "参数": "Parameter",
    "控制": " control",
    "状态引擎": "State engine",
    "场景规则": "Scene rules",
    "文本实体关系抽取 + 最短路径推理 + 交互式图谱": "Entity-relation extraction + shortest-path reasoning + interactive graph",
    "实体": "Entity",
    "关系": " relations",
    "路径": "Path",
    "推理": " reasoning",
    "文本": "Text",
    "抽取": " extraction",
    "图算法": "Graph algorithms",
    "知识工程": "Knowledge engineering",
    "交互画布": "Interactive canvas",
    "GenAI Agent 工作流平台": "GenAI Agent Workflow Platform",
    "自然语言生成 + 节点拖拽 + 工作流运行与导出": "Natural-language generation + node editing + workflow execution and export",
    "节点": "Node",
    "拖拽": " editing",
    "可视化编排": "Visual orchestration",
    "Agent框架": "Agent framework",
    "工作流": "Workflow",
    "AI 产品经理作品集 · 李林豪 · 2026年7月 ·": "AI Product Manager Portfolio · Linhao Li · July 2026 ·",
    "返回简历": "Back to résumé",

    "在线体验 ↗": "Live demo ↗",
    "界面预览": "Interface preview",
    "当前在线 Demo": "Current live demo",
    "最新在线 Demo 界面截图": "Latest live demo screenshot",
    "生成效果预览": "Generated output preview",
    "项目概览": "Project overview",
    "打开在线 Demo →": "Open live demo →",
    "功能拆解": "Product capabilities",
    "技术架构": "Technical delivery",
    "产品洞察": "Product insight",
    "模型服务": "Model service",
    "应用服务": "Application service",
    "交互层": "Interaction layer",
    "检索层": "Retrieval layer",
    "生成层": "Generation layer",
    "应用层": "Application layer",
    "角色层": "Character layer",
    "推理层": "Inference layer",
    "接口层": "API layer",
    "模板层": "Template layer",
    "评估层": "Evaluation layer",
    "报告层": "Reporting layer",
    "决策层": "Decision layer",
    "会话层": "Session layer",
    "上下文层": "Context layer",
    "安全层": "Safety layer",
    "规则层": "Rules layer",
    "分析层": "Analysis layer",
    "设备层": "Device layer",
    "解析层": "Parsing layer",
    "同步层": "Synchronization layer",
    "图数据层": "Graph data layer",
    "可视化层": "Visualization layer",
    "画布层": "Canvas layer",
    "服务层": "Service layer",
    "← 返回完整作品集": "← Back to full portfolio",
    "← 上一个项目": "← Previous project",
    "全部项目": "All projects",
    "下一个项目 →": "Next project →",
    "回到第一个项目 →": "Back to first project →",
    "按量计费": "Usage-based",
    "API 调用": "API calls",
    "标准素材": "standard formats",
    "电商比例": "e-commerce ratio",
    "本地向量": "local vectors",
    "无需下载模型": "no model download",
    "可引用": "Citable",
    "答案溯源": "source tracing",
    "角色原型": "character archetypes",
    "上下文记忆": "context memory",
    "结构化输出": "structured output",
    "行业模板": "industry templates",
    "报告导出": "report export",
    "智能评估": "AI evaluation",
    "业务工具": "business tools",
    "FAQ 召回": "FAQ retrieval",
    "可升级": "Escalation",
    "转人工": "human handoff",
    "100 分评分": "100-point score",
    "一键体验": "one-click scenarios",
    "双层解释": "dual-layer explanation",
    "回复与脚本": "replies and scripts",
    "事实约束": "Fact-grounded",
    "商品上下文": "product context",
    "可识别": "Visible",
    "模拟设备": "simulated devices",
    "联动模式": "linked scenes",
    "统一状态": "unified state",
    "知识域": "knowledge domains",
    "可拖拽": "Draggable",
    "画布交互": "canvas",
    "关系推理": "relationship reasoning",
    "节点组件": "node types",
    "可视编辑": "visual editing",
    "自然语言": "Natural language",
    "AI 生成": "AI generation",

    "参考图驱动的商品视觉生成 · fal.ai FLUX.1 Kontext": "Reference-driven product imagery · fal.ai FLUX.1 Kontext",
    "Kontext + Flux Pro · 5 类标准素材": "Kontext + Flux Pro · Five standard formats",
    "参考图、商品属性与素材类型集中在同一工作台，支持单张生成、批量进度和结果下载。": "A single workspace for reference images, product attributes, output formats, single generation, batch progress, and downloads.",
    "参考图上传 · 属性约束 · 五类素材": "Reference upload · Attribute controls · Five output formats",
    "同一类商品在不同营销语境中的静态输出，用于验证场景一致性、材质表达和商品主体稳定性。": "Static outputs for one product across marketing contexts, used to evaluate scene consistency, material rendering, and product identity.",
    "户外场景": "Outdoor scene",
    "情境化展示": "Contextual presentation",
    "材质细节": "Material detail",
    "卖点特写": "Feature close-up",
    "办公场景": "Office scene",
    "使用情境": "Usage context",
    "让商品素材验证从拍摄排期推进到即时生成": "Move product-visual validation from photo scheduling to on-demand generation",
    "上传商品参考图并补充颜色、材质、尺寸与保留特征，生成白底主图、场景图、细节图、尺寸图与使用情境，用于快速验证不同 SKU 的视觉方向。": "Upload a product reference and specify color, material, dimensions, and preserved features to generate white-background, scene, detail, dimension, and usage visuals for rapid SKU direction testing.",
    "支持上传商品参考图，优先保留颜色、材质、造型与标识位置": "Upload a product reference while preserving color, material, form, and logo placement.",
    "通过商品类别、真实尺寸、卖点与保留特征约束生成结果": "Constrain outputs with category, real dimensions, selling points, and must-preserve features.",
    "覆盖白底、场景、细节、尺寸与使用情境五类电商素材": "Cover five e-commerce formats: white background, scene, detail, dimensions, and usage.",
    "尺寸图由程序读取真实参数并绘制标线，避免 AI 生成错误数字": "Render dimension graphics programmatically from real measurements to avoid AI-generated numeric errors.",
    "批量任务提供逐项进度、单图重试、单图下载与打包下载": "Provide per-item batch progress, retries, individual downloads, and ZIP export.",
    "参考图模式调用 FLUX.1 Kontext，概念生成模式调用 Flux Pro。": "Reference mode uses FLUX.1 Kontext; concept mode uses Flux Pro.",
    "Python + Flask 处理图片校验、任务调度、尺寸渲染与结果归档。": "Python and Flask handle image validation, task orchestration, dimension rendering, and result archiving.",
    "原生 JavaScript 完成结构化输入、批量进度、重试、预览与下载。": "Vanilla JavaScript handles structured input, batch progress, retries, preview, and downloads.",
    "跨境电商上新往往需要多组素材，而传统拍摄受制于成本、周期与返工。AI 商品图更适合承担上新前的快速验证和长尾 SKU 素材补充；高价值主图仍应保留人工审核与精修环节。": "Cross-border product launches need many visual variants, while traditional shoots are constrained by cost, lead time, and rework. AI imagery is best suited to rapid pre-launch validation and long-tail SKU coverage; high-value hero images still require human review and refinement.",
    "本 Demo 用于产品能力展示，生成结果需经人工审核，不构成真实商业承诺。": "This demo showcases product capability. Generated outputs require human review and do not constitute a commercial commitment.",

    "RAG 检索增强生成 · ChromaDB 向量检索": "Retrieval-augmented generation · ChromaDB vector search",
    "DeepSeek · ChromaDB · 引用回答": "DeepSeek · ChromaDB · Cited answers",
    "上传、索引、问答和来源状态集中在同一工作界面，便于验证知识接入与回答溯源链路。": "Upload, indexing, Q&A, and source status in one workspace for validating the full knowledge and citation flow.",
    "知识库上传与问答工作台": "Knowledge-base upload and Q&A workspace",
    "把分散文档转化为可检索、可引用的问答资产": "Turn scattered documents into searchable, citable Q&A assets",
    "用户上传文档后，系统完成解析、分块与向量索引，并基于检索片段生成答案。回答保留来源信息，支持人工复核与连续追问。": "After upload, the system parses, chunks, and indexes documents, then generates answers from retrieved passages with source information for review and follow-up questions.",
    "统一接入 PDF、TXT 与 Markdown 文档": "Ingest PDF, TXT, and Markdown documents.",
    "通过中文字符向量检索定位相关段落": "Locate relevant passages with local character-level vector retrieval.",
    "回答附带原文来源，便于验证与纠错": "Attach source passages for verification and correction.",
    "文档未覆盖的问题明确提示未找到信息": "Clearly state when the source documents do not contain an answer.",
    "展示向量库、LLM 与文档索引运行状态": "Expose vector-store, LLM, and document-index health.",
    "本地中文字符向量完成索引，ChromaDB 持久化存储。": "Local character vectors create the index, persisted in ChromaDB.",
    "DeepSeek 基于召回片段组织答案并输出引用信息。": "DeepSeek composes answers from retrieved passages and returns citations.",
    "Flask 管理文档上传、分块、会话与检索状态。": "Flask manages uploads, chunking, sessions, and retrieval state.",
    "企业知识问答的关键不是单纯接入大模型，而是建立可靠的检索、引用和纠错机制。分块策略、召回质量与答案评估共同决定系统是否真正可用。": "Enterprise Q&A depends on reliable retrieval, citations, and correction—not merely connecting an LLM. Chunking, recall quality, and answer evaluation determine whether the system is usable.",
    "本 Demo 使用明确标注的虚构产品手册展示检索与问答能力，实际业务接入需配置权限与数据治理策略。": "This demo uses a clearly labeled fictional product manual. Production use requires access controls and data governance.",

    "角色扮演 · 上下文记忆 · 情绪状态 · 流式输出": "Role play · Context memory · Emotional state · Streaming",
    "DeepSeek · 角色记忆 · SSE 流式输出": "DeepSeek · Character memory · SSE streaming",
    "角色选择、情绪状态、记忆管理和实时对话集中呈现，便于测试不同人设下的回复一致性。": "Character selection, emotional state, memory, and live dialogue in one view for testing persona consistency.",
    "NPC 角色与对话工作台": "NPC character and dialogue workspace",
    "让 NPC 从预制对白树走向具有人设与记忆的动态角色": "Move NPCs from scripted dialogue trees to dynamic characters with persona and memory",
    "为不同 NPC 配置独立人设、背景和表达方式，通过多轮记忆与情绪状态生成符合角色设定的对话，并输出可供游戏逻辑读取的结构化结果。": "Configure distinct personas, backgrounds, and speaking styles, then generate character-consistent dialogue using memory and emotional state with structured outputs for game logic.",
    "支持导师、伙伴与商人三类角色原型": "Support mentor, companion, and merchant archetypes.",
    "关键事实摘要与短期对话窗口共同维护记忆": "Combine key-fact summaries with a short-term conversation window.",
    "友好、中立与敌对状态影响回复策略": "Use friendly, neutral, and hostile states to shape response strategy.",
    "SSE 流式返回对话内容，缩短等待感": "Stream dialogue with SSE to reduce perceived latency.",
    "输出任务钩子与关系值，便于接入游戏逻辑": "Return quest hooks and relationship values for game integration.",
    "Character Prompt 约束人设、背景故事与表达风格。": "Character prompts constrain persona, backstory, and voice.",
    "DeepSeek 结合角色状态和会话记忆生成回复。": "DeepSeek generates responses from character state and conversation memory.",
    "Flask + SSE 提供流式响应与结构化 JSON 结果。": "Flask and SSE provide streaming responses and structured JSON results.",
    "AI NPC 更适合作为剧情系统的动态表达层，而不是完全替代剧情设计。稳定的人设边界、可控的状态机和内容安全规则，决定了生成式对话能否进入真实游戏。": "AI NPCs work best as a dynamic expression layer for narrative systems, not a replacement for narrative design. Stable persona boundaries, controllable state machines, and safety rules determine production readiness.",
    "本 Demo 用于角色一致性与交互流程展示，生成内容需结合游戏世界观和安全规则审核。": "This demo showcases character consistency and interaction flow. Generated content requires review against the game world and safety rules.",

    "SOP 模板 · LLM 智能评估 · PDF 报告生成": "SOP templates · LLM evaluation · PDF reporting",
    "DeepSeek · SOP 模板 · PDF 报告": "DeepSeek · SOP templates · PDF reports",
    "行业模板、巡检填报、智能评估与 PDF 输出形成完整流程，页面同时展示模型和报告服务状态。": "Industry templates, inspection input, AI evaluation, and PDF export form one complete workflow with model and reporting-service status.",
    "巡检模板与报告工作台": "Inspection template and report workspace",
    "把巡检记录、AI 评估和PDF 报告串成一条闭环": "Connect inspection records, AI evaluation, and PDF reporting in one loop",
    "围绕零售门店、餐饮卫生和物业安全场景配置检查项，巡检完成后生成评分、风险提示、整改建议和可下载的 PDF 报告。": "Configure checks for retail, food hygiene, and property safety, then generate scores, risk alerts, remediation recommendations, and a downloadable PDF.",
    "按行业配置检查项、评分标准与巡检模板": "Configure checks, scoring criteria, and templates by industry.",
    "提交巡检数据后生成综合评分和风险等级": "Generate an overall score and risk level from inspection data.",
    "大模型把结构化记录转化为诊断与整改建议": "Turn structured records into diagnosis and remediation guidance with an LLM.",
    "支持上传现场图片作为巡检证据": "Upload on-site images as inspection evidence.",
    "生成包含结果、建议和明细的 PDF 报告": "Generate a PDF containing results, recommendations, and item details.",
    "结构化 SOP 定义检查项、分值与风险规则。": "Structured SOPs define checks, scores, and risk rules.",
    "DeepSeek 结合规则结果生成巡检总结与整改建议。": "DeepSeek combines rule results into an inspection summary and remediation plan.",
    "Flask + ReportLab 将巡检结果输出为可下载 PDF。": "Flask and ReportLab export inspection results as a downloadable PDF.",
    "自动巡检的价值不只是节省写报告时间，更在于统一标准、保留证据和跟踪整改。AI适合承担重复归纳与建议生成，最终责任仍应由现场人员确认。": "Automated inspection is valuable not only for faster reporting, but also for consistent standards, evidence retention, and remediation tracking. AI can summarize and recommend; accountable staff must confirm the result.",
    "本 Demo 使用模拟巡检数据，AI 评估与 PDF 报告用于流程展示，不替代正式合规检查。": "This demo uses simulated inspection data and does not replace a formal compliance inspection.",

    "意图识别 · FAQ 检索 · Tool Calling · 智能转人工": "Intent detection · FAQ retrieval · Tool calling · Human escalation",
    "DeepSeek · Tool Calling · 双路 FAQ": "DeepSeek · Tool calling · Hybrid FAQ",
    "问答、订单查询、投诉工单与人工升级在同一会话中完成，界面同步展示可直接体验的业务场景。": "Q&A, order lookup, complaint tickets, and human escalation happen in one conversation with testable business scenarios.",
    "智能客服会话与工具工作台": "Customer-service conversation and tools workspace",
    "让客服不只回答问题，也能调用工具完成业务动作": "Let customer service answer questions and execute business actions",
    "系统识别用户意图后选择 FAQ 检索、订单查询、工单创建或人工转接，并在多轮会话中保留必要上下文。": "The system identifies intent, selects FAQ retrieval, order lookup, ticket creation, or human handoff, and preserves relevant context across turns.",
    "识别 FAQ、订单、投诉与转人工等常见意图": "Recognize FAQ, order, complaint, and handoff intents.",
    "基于 TF-IDF 与规则关键词召回 FAQ": "Retrieve FAQs with TF-IDF and rule-based keywords.",
    "调用订单查询、知识检索、建单和转人工工具": "Call order lookup, knowledge search, ticketing, and human-handoff tools.",
    "复杂或高风险问题自动升级并保留会话摘要": "Escalate complex or high-risk issues with a conversation summary.",
    "Session 级上下文维持多轮对话连贯性": "Maintain multi-turn continuity with session-level context.",
    "DeepSeek 判断用户意图并选择需要调用的业务工具。": "DeepSeek identifies intent and selects the required business tool.",
    "TF-IDF 与规则关键词共同完成轻量 FAQ 召回。": "TF-IDF and rule keywords provide lightweight FAQ retrieval.",
    "Flask 管理上下文、工具结果、工单与人工升级状态。": "Flask manages context, tool results, tickets, and escalation state.",
    "客服 Agent 的价值不在于更像人聊天，而在于能安全执行查询、建单和升级等动作。工具权限、失败兜底和人工接管机制应与对话能力同时设计。": "A service agent’s value is not human-like conversation but safe execution of lookup, ticketing, and escalation. Tool permissions, fallbacks, and human takeover must be designed alongside dialogue.",
    "本 Demo 使用模拟订单和工单数据展示业务流程，不处理真实客户信息。": "This demo uses simulated orders and tickets and does not process real customer data.",

    "五维规则评分 · DeepSeek 风险解释 · 财报风险扫描": "Five-dimension scoring · DeepSeek explanations · Financial-report risk scan",
    "Gradio · 风控规则 · DeepSeek": "Gradio · Risk rules · DeepSeek",
    "企业与融资信息、100 分制风险结果采用双栏布局，可同时查看输入条件、维度评分和模型解释。": "A two-column workspace shows company and financing inputs alongside a 100-point risk score, dimension results, and model explanations.",
    "信贷审批与风险分析工作台": "Credit review and risk-analysis workspace",
    "用标准化评分与大模型解释辅助信贷风险判断": "Support credit-risk judgment with standardized scoring and LLM explanations",
    "覆盖企业风险评估、模拟组合指标和财报文本扫描，把五维规则评分与大模型解释结合起来，输出可复核的风险建议。": "Combine five-dimension rule scoring with LLM explanations across company assessment, simulated portfolio metrics, and financial-report scans.",
    "采集营收、利润、现金流、偿债额、信用与抵押等信息": "Collect revenue, profit, cash flow, debt service, credit, and collateral inputs.",
    "按盈利、偿债、稳定性、信用和担保五个维度形成 0–100 分评分": "Produce a 0–100 score across profitability, debt service, stability, credit, and collateral.",
    "提供稳健、待复核与高风险三个虚构场景，一键填充体验": "Provide low-risk, review-needed, and high-risk fictional scenarios for one-click testing.",
    "扫描财报中的风险信号，并展示触发判断的原文依据": "Scan financial reports for risk signals and show the source text behind each trigger.",
    "由 DeepSeek 生成风险解释与补充材料建议，最终保留人工复核": "Use DeepSeek for risk explanations and document requests while retaining human review.",
    "Python 风控引擎执行五维评分、阈值判断与财报信号扫描。": "A Python risk engine performs five-dimension scoring, threshold checks, and report-signal scanning.",
    "DeepSeek 基于规则结果生成风险解释、核验材料与风控动作。": "DeepSeek generates explanations, verification requests, and risk actions from rule results.",
    "Gradio 组织审批表单、指标看板和风险分析结果。": "Gradio organizes the application form, metrics dashboard, and risk analysis.",
    "金融风控需要效率，也需要可解释和可追责。AI 适合承担材料归纳、风险解释与提示，确定性评分由规则引擎执行，最终审批仍应保留人工授权、审计记录和模型监控。": "Financial risk management requires efficiency, explainability, and accountability. AI can summarize and explain; deterministic scoring belongs in rules, while final approval requires human authorization, audit logs, and model monitoring.",
    "本 Demo 为风控流程模拟，不构成授信、投资或其他金融决策建议。": "This demo simulates a risk workflow and does not constitute credit, investment, or financial advice.",

    "商品事实配置 · 弹幕回复 · 直播脚本生成": "Product facts · Comment replies · Live script generation",
    "DeepSeek · 事实约束 · 安全回退": "DeepSeek · Fact grounding · Safe fallback",
    "商品事实、模拟弹幕和 AI 回复集中在同一操作台中，帮助主播基于已确认信息生成回应与直播脚本。": "Product facts, sample comments, and AI replies share one workspace, helping hosts respond and draft scripts from verified information.",
    "直播弹幕与 AI 话术工作台": "Live comments and AI script workspace",
    "让直播回复和脚本生成都基于可核验的商品事实": "Ground live replies and scripts in verifiable product facts",
    "主播先配置商品名称与已确认信息，系统再回答模拟弹幕或生成直播脚本；未配置的价格、功效、适用人群与服务承诺会触发明确提示或安全回退。": "The host first configures the product and confirmed facts. The system then answers sample comments or drafts a script, while unsupported price, efficacy, audience, or service claims trigger a warning or safe fallback.",
    "配置商品名称、平台与已确认事实": "Configure product name, platform, and confirmed facts.",
    "输入或模拟弹幕并生成简短回复": "Enter or simulate comments and generate concise replies.",
    "按开场、事实介绍、互动与收尾生成直播脚本": "Generate a live script covering opening, facts, interaction, and closing.",
    "拦截未配置的价格、功效与适用人群承诺": "Block unsupported price, efficacy, and audience claims.",
    "在界面中区分 DeepSeek 回答与安全回退": "Clearly distinguish DeepSeek output from safe fallbacks.",
    "商品名称、平台和已确认事实组成可核验的生成上下文。": "Product name, platform, and confirmed facts form a verifiable generation context.",
    "DeepSeek 在事实约束下生成弹幕回复与直播脚本。": "DeepSeek generates comment replies and live scripts within fact constraints.",
    "规则拦截敏感承诺，并在异常或越界时返回可识别的安全结果。": "Rules block sensitive claims and return a visible safe result when requests exceed the boundary.",
    "直播 AI 更适合作为主播的实时副驾驶，而不是自动替代主播。它首先需要尊重商品事实与营销边界，再追求回复速度和表达效果。": "Live-commerce AI works best as a real-time copilot, not an autonomous host. It must respect product facts and marketing boundaries before optimizing speed and expression.",
    "本 Demo 使用模拟弹幕和商品数据，话术仅用于能力展示，不构成真实营销承诺。": "This demo uses simulated comments and product data. Generated scripts do not constitute real marketing claims.",

    "AIoT 智能家居控制台": "AIoT Smart Home Console",
    "设备状态 · 参数控制 · 场景联动 · 自然语言执行": "Device state · Parameter control · Linked scenes · Natural-language execution",
    "DeepSeek · 状态引擎 · 场景规则": "DeepSeek · State engine · Scene rules",
    "全屋设备卡片与自然语言控制面板并列展示，用户可以直接观察指令执行后的设备状态变化。": "Device cards and natural-language controls appear side by side so users can verify state changes after every command.",
    "全屋设备与自然语言控制台": "Whole-home devices and natural-language console",
    "让全屋设备状态与自然语言控制保持在同一界面": "Keep device state and natural-language control in one interface",
    "把灯光、空调、窗帘、电视和清洁设备汇聚到统一控制台，通过手动控制、场景规则与自然语言指令共享同一份设备状态。": "Unify lighting, climate, curtains, media, and cleaning devices in one console where manual controls, scene rules, and language commands share one state model.",
    "统一展示灯光、空调、窗帘、影音与清洁设备状态": "Show lighting, climate, curtains, media, and cleaning-device status in one place.",
    "支持回家、离家、观影与睡眠四类预设场景": "Provide Home, Away, Movie, and Sleep scenes.",
    "通过开关与滑杆直接调整设备状态、亮度和温度": "Adjust device state, brightness, and temperature with switches and sliders.",
    "DeepSeek 把自然语言解析为明确、可校验的设备动作": "Use DeepSeek to turn natural language into explicit, verifiable device actions.",
    "手动控制、场景执行和自然语言共用同一状态引擎": "Route manual controls, scenes, and language commands through one state engine.",
    "统一状态模型描述开关、亮度、温度、开合与运行状态。": "A unified state model represents power, brightness, temperature, position, and runtime status.",
    "高频指令由规则快速处理，复杂表达交给 DeepSeek 结构化解析。": "Rules handle frequent commands quickly; DeepSeek structures more complex language.",
    "Flask 状态引擎执行动作并向设备卡片返回同一份最新状态。": "The Flask state engine executes actions and returns one current state to every device card.",
    "智能家居的核心价值不是设备数量，而是状态一致性和场景协同。自然语言控制必须转换为确定、可回滚的设备命令，界面也需要及时反馈执行结果。": "Smart-home value comes from consistent state and coordinated scenes, not device count. Language commands must become deterministic, reversible device actions with immediate feedback.",
    "本 Demo 使用模拟设备和状态数据，不连接真实家庭设备。": "This demo uses simulated devices and does not connect to a real home.",

    "知识图谱可视化平台": "Knowledge Graph Visualization Platform",
    "实体抽取 · 关系推理 · 画布交互": "Entity extraction · Relationship reasoning · Canvas interaction",
    "DeepSeek · 实体关系 · 可视化图谱": "DeepSeek · Entity relations · Visual graph",
    "文本输入、实体关系图和画布控制并列呈现，支持缩放、平移、适配视图和关系标签查看。": "Text input, entity graph, and canvas controls appear together with zoom, pan, fit-to-view, and relationship labels.",
    "文本抽取与知识图谱画布": "Text extraction and knowledge-graph canvas",
    "把文本中的实体关系转化为可探索、可推理的图谱": "Turn entity relationships in text into an explorable, reasoned graph",
    "输入自然语言材料后提取实体与关系，生成可拖拽、缩放和适配视图的知识图谱，并通过关系路径帮助用户理解复杂信息。": "Extract entities and relationships from natural-language material, build a draggable and zoomable graph, and use relationship paths to clarify complex information.",
    "从新输入文本中抽取实体、属性与关系三元组": "Extract entity, attribute, and relationship triples from new text.",
    "在画布中呈现节点、方向和关系标签": "Render nodes, direction, and relationship labels on the canvas.",
    "支持平移、滚轮缩放、双击适配和节点拖拽": "Support panning, wheel zoom, double-click fit, and node dragging.",
    "根据关系结构查找实体之间的关联路径": "Find paths between entities from the relationship structure.",
    "提供示例领域与自定义文本两种使用方式": "Offer sample domains and custom-text input.",
    "DeepSeek 将自然语言材料转换为实体关系结构。": "DeepSeek converts natural-language material into an entity-relation structure.",
    "统一节点、边、方向和来源信息，保持关系可追溯。": "Normalize nodes, edges, direction, and provenance to keep relationships traceable.",
    "前端图谱画布处理布局、缩放、拖拽和视图适配。": "The front-end graph canvas handles layout, zoom, dragging, and fit-to-view.",
    "知识图谱是否有价值，取决于关系质量、来源信息和交互可控性，而不是节点数量。图谱生成后必须允许用户校正、重新布局和追溯原文。": "A knowledge graph’s value depends on relationship quality, provenance, and controllable interaction—not node count. Users need correction, relayout, and source tracing after generation.",
    "本 Demo 使用公开示例文本与用户输入生成图谱，不涉及涉密或受限数据。": "This demo builds graphs from public sample text and user input and is not intended for confidential or restricted data.",

    "自然语言生成 · 拖拽编排 · 可执行工作流": "Natural-language generation · Visual editing · Executable workflows",
    "节点库、流程画布、属性面板和执行结果集中在一个编排界面，工作流可由自然语言生成并继续手动调整。": "A node library, workflow canvas, property panel, and execution output share one interface; workflows can be generated from language and refined manually.",
    "Agent Flow 工作流编排画布": "Agent Flow orchestration canvas",
    "用自然语言和拖拽编排，把业务意图转化为 Agent 工作流": "Turn business intent into an agent workflow with language and visual orchestration",
    "用户描述目标后生成可编辑的节点与连线，也可以从节点库拖入 Agent、条件、并行、工具和输出节点，完成配置、运行与导出。": "Describe a goal to generate editable nodes and connections, or add agent, condition, parallel, tool, and output nodes manually before configuring, running, and exporting the workflow.",
    "根据自然语言描述生成初始工作流结构": "Generate an initial workflow structure from a natural-language description.",
    "从节点库拖入画布并持续调整位置与连接": "Add nodes from the library and refine positions and connections.",
    "支持 Agent、条件分支、并行执行、工具与输出节点": "Support agent, conditional, parallel, tool, and output nodes.",
    "在属性面板编辑节点配置并查看 JSON 结构": "Edit node configuration and inspect the JSON structure in the property panel.",
    "运行流程、查看执行输出并导出工作流定义": "Run the flow, inspect outputs, and export the workflow definition.",
    "DeepSeek 识别业务意图并返回节点、连接和基础配置。": "DeepSeek identifies business intent and returns nodes, connections, and initial configuration.",
    "前端工作流引擎处理拖拽、连线、选择与属性编辑。": "The front-end workflow engine handles placement, connections, selection, and property editing.",
    "Flask 提供生成、运行、模板和导出相关接口。": "Flask provides generation, execution, template, and export APIs.",
    "自然语言生成可以降低工作流搭建门槛，但生成结果必须可见、可编辑、可测试。真正可用的平台需要同时照顾首次生成效率和后续精细调整能力。": "Natural-language generation lowers the barrier to workflow creation, but outputs must remain visible, editable, and testable. A usable platform balances first-pass speed with precise refinement.",
    "本 Demo 使用模拟业务流程展示 Agent 编排能力，生产使用前需补充权限、审计与失败恢复机制。": "This demo uses simulated business flows. Production use requires permissions, auditability, and failure recovery.",

    "Demo 已部署在腾讯云服务器。为避免 GitHub Pages 的 HTTPS 页面拦截 HTTP 嵌入，请在新窗口打开体验。": "This demo is hosted on Tencent Cloud. Open it in a new window because GitHub Pages cannot embed an HTTP service inside an HTTPS page.",
    "打开在线 Demo": "Open live demo",
    "返回项目详情": "Back to project details",
    "在线 Demo": "Live demo"
    ,"✅ 特征": "✅ Feature"
    ,"🎭 情感": "🎭 Emotion"
    ,"👤 转": "👤 Human"
    ,"🔍 原文": "🔍 Source"
    ,"💬 弹幕": "💬 Comments"
    ,"✍️ 话术": "✍️ Script"
    ,"🛡️ 事实": "🛡️ Facts"
    ,"🔄 状态": "🔄 State"
    ,"🔗 设备": "🔗 Device"
    ,"🎛️ 参数": "🎛️ Parameter"
    ,"🕸️ 实体": "🕸️ Entity"
    ,"🔗 路径": "🔗 Path"
    ,"📝 文本": "📝 Text"
    ,"🧱 节点": "🧱 Node"
    ,"🧩 可视化": "🧩 Visual"
    ,"编排": " orchestration"
    ,"🛍️ 跨境电商 AI 商品图生成器 · 李林豪": "🛍️ AI Product Image Generator · Linhao Li"
    ,"🧠 AI 知识库问答助手 · 李林豪": "🧠 AI Knowledge Base Q&A · Linhao Li"
    ,"🎮 游戏 NPC 智能对话系统 · 李林豪": "🎮 AI NPC Dialogue System · Linhao Li"
    ,"📊 AI 自动巡检报告系统 · 李林豪": "📊 AI Inspection Report System · Linhao Li"
    ,"💬 智能客服 Agent · 李林豪": "💬 Customer Service Agent · Linhao Li"
    ,"🛡️ 金融风控 AI 助手 · 李林豪": "🛡️ Financial Risk AI Assistant · Linhao Li"
    ,"🎬 直播 AI 助手 · 李林豪": "🎬 Live-commerce AI Assistant · Linhao Li"
    ,"🏠 AIoT 智能家居控制台 · 李林豪": "🏠 AIoT Smart Home Console · Linhao Li"
    ,"🧠 知识图谱可视化平台 · 李林豪": "🧠 Knowledge Graph Platform · Linhao Li"
    ,"🤖 GenAI Agent 工作流平台 · 李林豪": "🤖 GenAI Agent Workflow Platform · Linhao Li"
    ,"AI 知识库问答助手": "AI Knowledge Base Q&A"
    ,"游戏 NPC 智能对话系统": "AI NPC Dialogue System"
    ,"AI 自动巡检报告系统": "AI Inspection Report System"
    ,"768 维": "768D"
    ,"本地化": "Local"
    ,"3 种": "3"
    ,"3 类": "3"
    ,"5 类": "5"
    ,"2 模式": "2 modes"
    ,"可检索": "Searchable"
    ,"5 维": "5 dimensions"
    ,"3 场景": "3 scenarios"
    ,"规则 + AI": "Rules + AI"
    ,"风控规则": "Risk rules"
    ,"信贷审批": "Credit review"
    ,"商品事实": "Product facts"
    ,"话术生成": "Script generation"
    ,"9 台": "9"
    ,"4 场景": "4"
    ,"3 入口": "3"
    ,"抽取层": "Extraction layer"
    ,"实体抽取": "Entity extraction"
    ,"跨境电商 AI 商品图生成器 · 在线 Demo": "AI Product Image Generator · Live Demo"
    ,"AI 知识库问答助手 · 在线 Demo": "AI Knowledge Base Q&A · Live Demo"
    ,"游戏 NPC 智能对话系统 · 在线 Demo": "AI NPC Dialogue System · Live Demo"
    ,"AI 自动巡检报告系统 · 在线 Demo": "AI Inspection Report System · Live Demo"
    ,"智能客服 Agent · 在线 Demo": "Customer Service Agent · Live Demo"
    ,"金融风控 AI 助手 · 在线 Demo": "Financial Risk AI Assistant · Live Demo"
    ,"直播 AI 助手 · 在线 Demo": "Live-commerce AI Assistant · Live Demo"
    ,"AIoT 智能家居控制台 · 在线 Demo": "AIoT Smart Home Console · Live Demo"
    ,"知识图谱可视化平台 · 在线 Demo": "Knowledge Graph Platform · Live Demo"
    ,"GenAI Agent 工作流平台 · 在线 Demo": "GenAI Agent Workflow Platform · Live Demo"
    ,"AI 前台增长与机会追回系统 · 在线 Demo": "AI Receptionist Growth & Recovery System · Live Demo"
    ,"已接入 DeepSeek 后端代理": "DeepSeek backend proxy connected"
    ,"Demo 已部署在腾讯云服务器，包含通话分析、机会追回、能力路线图和真实大模型增强模块。为避免 GitHub Pages 的 HTTPS 页面拦截 HTTP 接口，请在新窗口打开体验。": "The demo is deployed on a Tencent Cloud server and includes call analysis, opportunity recovery, a capability roadmap, and a live LLM enhancement module. To avoid GitHub Pages mixed-content blocking, open it in a new window."
    ,"新增大模型增强模块：通过腾讯云后端代理调用 DeepSeek，将通话转写转成结构化追回建议": "Adds an LLM enhancement module: a Tencent Cloud backend proxy calls DeepSeek to convert call transcripts into structured recovery recommendations."
    ,"核心指标": "Key metrics"
    ,"项目能力与架构": "Product capabilities and architecture"
    ,"项目切换": "Project navigation"
    ,"项目浏览控制": "Project carousel controls"
    ,"上一个项目": "Previous project"
    ,"下一个项目": "Next project"
    ,"跨境电商 AI 商品图生成器 Demo 操作界面": "AI product image generator demo interface"
    ,"AI 知识库问答助手界面": "AI knowledge-base Q&A interface"
    ,"游戏 NPC 智能对话界面": "AI NPC dialogue interface"
    ,"AI 自动巡检报告界面": "AI inspection-report interface"
    ,"智能客服 Agent 界面": "Customer-service agent interface"
    ,"金融风控 AI 助手界面": "Financial risk AI assistant interface"
    ,"直播 AI 助手界面": "Live-commerce AI assistant interface"
    ,"AIoT 智能家居控制台界面": "AIoT smart-home console interface"
    ,"知识图谱可视化平台界面": "Knowledge-graph platform interface"
    ,"GenAI Agent 工作流平台界面": "GenAI agent workflow interface"
    ,"跨境电商 AI 商品图生成器在线 Demo 界面": "AI product image generator live demo interface"
    ,"AI 知识库问答助手在线 Demo 界面": "AI knowledge-base Q&A live demo interface"
    ,"游戏 NPC 智能对话系统在线 Demo 界面": "AI NPC dialogue live demo interface"
    ,"AI 自动巡检报告系统在线 Demo 界面": "AI inspection-report live demo interface"
    ,"智能客服 Agent在线 Demo 界面": "Customer-service agent live demo interface"
    ,"金融风控 AI 助手在线 Demo 界面": "Financial risk AI assistant live demo interface"
    ,"直播 AI 助手在线 Demo 界面": "Live-commerce AI assistant live demo interface"
    ,"AIoT 智能家居控制台在线 Demo 界面": "AIoT smart-home console live demo interface"
    ,"知识图谱可视化平台在线 Demo 界面": "Knowledge-graph platform live demo interface"
    ,"GenAI Agent 工作流平台在线 Demo 界面": "GenAI agent workflow live demo interface"
    ,"黑色保温杯户外露营场景生成图": "Generated image of a black insulated bottle in an outdoor camping scene"
    ,"黑色保温杯杯口与杯盖材质细节生成图": "Generated material-detail image of a black insulated bottle and lid"
    ,"黑色保温杯办公桌场景生成图": "Generated image of a black insulated bottle in an office setting"
  };

  const reverseTranslations = Object.fromEntries(
    Object.entries(translations).map(([zh, en]) => [en, zh])
  );
  const textNodes = [];
  const attributeNodes = [];
  const previewImages = [];
  let originalTitle = document.title;

  function rememberContent() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        if (parent.closest(".language-toggle")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    while (walker.nextNode()) {
      textNodes.push({ node: walker.currentNode, zh: walker.currentNode.nodeValue });
    }
    document.querySelectorAll("[aria-label],[title],[alt],[placeholder]").forEach((element) => {
      ["aria-label", "title", "alt", "placeholder"].forEach((name) => {
        if (element.hasAttribute(name)) {
          attributeNodes.push({ element, name, zh: element.getAttribute(name) });
        }
      });
    });
    document.querySelectorAll("img[src]").forEach((image) => {
      const src = image.getAttribute("src");
      if (/assets\/generated\/project-(01|02|03|04|05|07|08|10|11|12|13)-demo\.png(?:\?|$)/.test(src)) {
        previewImages.push({ image, zh: src, en: src.replace("-demo.png", "-demo-en.png") });
      }
    });
  }

  function translatedValue(value, lang) {
    const trimmed = value.trim();
    const table = lang === "en" ? translations : reverseTranslations;
    const translated = table[trimmed];
    if (!translated) return value;
    return value.replace(trimmed, translated);
  }

  function updateInternalLinks(lang) {
    document.querySelectorAll("a[href]").forEach((anchor) => {
      const raw = anchor.getAttribute("href");
      if (!raw || /^(mailto:|tel:|javascript:)/.test(raw)) return;
      try {
        const url = new URL(raw, window.location.href);
        const isLiveDemo = url.hostname === "159.75.118.205";
        if (isLiveDemo) {
          if (lang === "en") url.searchParams.set("lang", "en");
          else url.searchParams.delete("lang");
          anchor.setAttribute("href", url.toString());
          return;
        }
        if (!url.pathname.endsWith(".html") && !raw.startsWith("#")) return;
        if (lang === "en") url.searchParams.set("lang", "en");
        else url.searchParams.delete("lang");
        anchor.setAttribute("href", raw.startsWith("#") ? `${url.search}${url.hash}` : `${url.pathname.split("/").pop()}${url.search}${url.hash}`);
      } catch (_) {}
    });
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
    textNodes.forEach(({ node, zh }) => {
      node.nodeValue = lang === "en" ? translatedValue(zh, "en") : zh;
    });
    attributeNodes.forEach(({ element, name, zh }) => {
      element.setAttribute(name, lang === "en" ? translatedValue(zh, "en") : zh);
    });
    previewImages.forEach(({ image, zh, en }) => {
      image.setAttribute("src", lang === "en" ? en : zh);
    });
    document.title = lang === "en" ? translatedValue(originalTitle, "en") : originalTitle;
    const heroName = document.querySelector("h1 .gradient");
    if (heroName) heroName.textContent = lang === "en" ? "Linhao\u00a0Li" : "李林豪";
    document.querySelectorAll(".language-toggle button").forEach((button) => {
      const active = button.dataset.lang === lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    updateInternalLinks(lang);
  }

  function setLanguage(lang) {
    const next = lang === "en" ? "en" : "zh";
    try { localStorage.setItem("portfolio-language", next); } catch (_) {}
    const url = new URL(window.location.href);
    if (next === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    applyLanguage(next);
  }

  function createToggle() {
    const wrapper = document.createElement("div");
    wrapper.className = "language-toggle";
    wrapper.setAttribute("role", "group");
    wrapper.setAttribute("aria-label", "语言 / Language");
    [["zh", "中"], ["en", "EN"]].forEach(([lang, label]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.lang = lang;
      button.textContent = label;
      button.addEventListener("click", () => setLanguage(lang));
      wrapper.appendChild(button);
    });
    const navLinks = document.querySelector(".nav-links,.site-nav-links");
    if (navLinks) navLinks.appendChild(wrapper);
    else {
      wrapper.classList.add("is-floating");
      document.body.appendChild(wrapper);
    }
  }

  function addStyles() {
    const style = document.createElement("style");
    style.textContent = `
      .language-toggle{display:inline-flex;align-items:center;flex:0 0 auto;padding:2px;border:1px solid rgba(0,0,0,.10);border-radius:999px;background:rgba(118,118,128,.08);gap:0}
      .language-toggle button{width:34px;height:28px;padding:0;border:0;border-radius:999px;background:transparent;color:#6e6e73;font:600 12px/1 -apple-system,BlinkMacSystemFont,"SF Pro Text","Segoe UI",sans-serif;letter-spacing:0;cursor:pointer;transition:background .2s,color .2s,box-shadow .2s}
      .language-toggle button:hover{color:#1d1d1f}.language-toggle button.is-active{background:#fff;color:#1d1d1f;box-shadow:0 1px 5px rgba(0,0,0,.12)}
      .language-toggle button:focus-visible{outline:2px solid #0071e3;outline-offset:2px}
      .language-toggle.is-floating{position:fixed;z-index:9999;top:16px;right:16px;background:rgba(245,245,247,.88);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px)}
      @media(max-width:700px){
        .nav-inner,.site-nav-inner{position:relative}
        .nav-links,.site-nav-links{padding-right:70px}
        .nav-links>.language-toggle,.site-nav-links>.language-toggle{position:absolute;right:0;top:50%;z-index:4;transform:translateY(-50%);padding:1px;background:rgba(245,245,247,.96);box-shadow:-8px 0 14px rgba(245,245,247,.96)}
        .language-toggle button{width:30px;height:26px;font-size:11px}
      }
    `;
    document.head.appendChild(style);
  }

  addStyles();
  rememberContent();
  createToggle();
  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  let savedLanguage = "zh";
  try { savedLanguage = localStorage.getItem("portfolio-language") || "zh"; } catch (_) {}
  applyLanguage(queryLanguage === "en" ? "en" : savedLanguage === "en" ? "en" : "zh");
})();
