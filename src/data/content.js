export const hero = {
  name: 'Thanapoom Taengwong',
  role: 'AI / Data Engineer | Fullstack Developer',
  summary:
    'Fourth-year Computer Engineering student interested in Applied AI, Data Engineering, and Data Analytics, with hands-on experience in fullstack development and building end-to-end projects.',
  location: 'Thailand, Bangkok 10900',
  availability: 'Open to opportunities',
  image: '/12.jpg',  ctaPrimary: {
    label: 'View Projects',
    href: '#projects'
  },
  ctaSecondary: {
    label: 'Contact',
    href: '#contact'
  },
  stats: [
    { value: '2022', label: 'B.Eng Started' },
    { value: '4', label: 'Projects' },
    { value: '1', label: 'Internship' }
  ],
 highlights: [
  'Design and development of LLM and RAG-based systems',
  'Building scalable data pipelines and vector embeddings workflows',
  'Applied data analytics, modeling, and performance evaluation'
]
}

export const about = {
  eyebrow: 'About',
  title: 'Bachelor of Engineering in Computer Engineering',
  subtitle: 'Kasetsart University',
  paragraphs: [
    'GPAX: 3.13',
    'Relevant coursework: Data Mining, Database System, Problem Solving, Innovative Thinking.Software Development, Data Structures and Algorithms, Computer Systems, and more.',

  ],
  highlights: [
    'Strong collaboration',
    'Clear documentation',
    'Practical engineering mindset'
  ]
}

export const skills = {
  eyebrow: 'Skills',
  title: 'Relevant skills',
  subtitle: '',
  groups: [
    {
      name: 'AI / LLM',
      items: ['LangChain', 'Hugging Face', 'OpenAI SDK', 'Transformers']
    },
    {
      name: 'Data Engineering',
      items: ['Python', 'Pandas', 'SQL (PostgreSQL, MySQL)', 'ETL / ELT', 'Airflow']
    },
    {
      name: 'Big Data',
      items: ['Spark', 'Hadoop', 'Hive', 'Pig', 'Kafka']
    },
    {
      name: 'Fullstack',
      items: ['JavaScript', 'Node.js', 'REST APIs', 'Vue 3', 'Vite']
    },
    {
      name: 'Data Science Tools',
      items: ['Jupyter', 'NumPy', 'Matplotlib', 'Seaborn', 'scikit-learn']
    },
    {
      name: 'Systems & Workflow',
      items: ['Embeddings / Vector Search', 'Semantic Search', 'Git', 'Docker', 'Linux']
    }
  ]
}

export const projects = {
  eyebrow: 'Projects',
  title: 'My Projects',
  subtitle: 'Projects, research work, and study plans.',
  items: [
    {
      name: 'AI News Analytics Senior Project',
      description:
        'Built a Chrome extension for real-time news scraping and processing, plus an end-to-end pipeline combining news and stock data for predictive analysis.',
      tags: ['Chrome Extension', 'Data Pipeline', 'Analytics'],
      links: []
    },
    {
      name: 'Startdii Project',
      description:
        'Mobile app concept for student learning and knowledge sharing with interactive quizzes. Responsible for front-end development.',
      tags: ['Mobile App', 'Frontend', 'Education'],
      links: []
    },
    {
      name: 'Football Player Market Value Prediction',
      description:
        'Prepared high-quality datasets from Football Manager 23 and applied XGBoost-based modeling for market value prediction.',
      tags: ['Python', 'Pandas', 'XGBoost'],
      links: []
    },
    {
      name: 'Adaptive Synthetic Sampling (ADASYN) PROJECT',
      description:
        'Prepared a dataset for model training by handling imbalanced data using the ADASYN method and compared with other sampling methods. Used an Artificial Neural Network model for Diabetes classification.',
      tags: ['Python', 'imbalanced-learn', 'Neural Network'],
      links: []
    },
    {
      name: 'Data Pipeline & ETL Engine',
      description:
        'Built an end-to-end data pipeline: ingest raw CSV/JSON, validate with data quality checks, transform with orchestration, and serve visualizations.',
      tags: ['Airflow', 'PostgreSQL', 'Data Validation', 'Storage'],
      links: []
    },
    {
      name: 'AI Chatbot with RAG',
      description:
        'Intelligent chatbot powered by Retrieval-Augmented Generation (RAG), semantic search, and embeddings for contextual responses with custom knowledge base.',
      tags: ['RAG', 'LLMs', 'Embeddings', 'Semantic Search'],
      links: []
    },
    {
      name: 'Real-time Analytics Dashboard',
      description:
        'Real-time data ingestion and processing pipeline with live metrics dashboard, streaming data handling, and performance monitoring.',
      tags: ['Stream Processing', 'Analytics', 'Dashboard'],
      links: []
    }
  ]
}

export const experience = {
  eyebrow: 'Experience',
  title: 'Experience & Internship',
  subtitle: 'Applied AI and product work.',
  items: [
    {
      role: 'Bachelor of Engineering in Computer Engineering',
      company: 'Kasetsart University',
      period: '2022 - Present',
      details: [
        'GPA: 3.13',
        'Coursework: Data Mining, Database System, Problem Solving, Software Engineering.'
      ]
    },
    {
      role: 'UniHR (SCGC) Co-op Internship - Fullstack Developer',
      company: 'SCG Chemicals',
      period: '2025',
      details: [
        'Integrated AI automation features to reduce manual processes.',
        'Developed an HR RAG chatbot with document retrieval and semantic search.',
        'Built data pipelines for embedding unstructured HR documents into a vector database.'
      ]
    }
  ]
}

export const contact = {
  eyebrow: 'Contact',
  title: "Get in Touch",
  subtitle: 'Reach out for collaboration or new opportunities.',
  email: 'thanapoommod@gmail.com',
  location: 'Thailand, Bangkok 10900',
  availability: 'Available for internships and collaborations'
}

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thanapoom-tw/' },
  { label: 'GitHub', href: 'https://github.com/meebunn' },
  // { label: 'Email', href: 'mailto:thanapoommod@gmail.com' },
  // { label: 'Phone', href: 'tel:+66809453597' }
]
