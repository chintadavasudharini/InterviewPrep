import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsLightningCharge, BsDatabase, BsCodeSquare, BsCloud, BsCpu, BsFileEarmarkCode, BsShare, BsTerminal } from 'react-icons/bs';

const paths = [
  {
    id: 'python',
    title: 'Python Master',
    description: 'Master OOP, decorators, generators, and advanced Python interview patterns.',
    icon: <BsCodeSquare size={30} />,
    color: '#FFD700',
    link: '/python',
    topics: ['Core OOP', 'Dunder Methods', 'Decorators', 'Concurrency']
  },
  {
    id: 'mysql',
    title: 'SQL Specialist',
    description: 'Deep dive into complex queries, normalization, indexing, and performance tuning.',
    icon: <BsDatabase size={30} />,
    color: '#00758f',
    link: '/mysql',
    topics: ['Joins & Subqueries', 'Indexing', 'Transactions', 'Normalization']
  },
  {
    id: 'dsa',
    title: 'DSA Expert',
    description: 'Structured path for data structures and algorithm problem-solving techniques.',
    icon: <BsLightningCharge size={30} />,
    color: '#FF4500',
    link: '/dsa',
    topics: ['Linked Lists', 'Trees', 'Graphs', 'Dynamic Programming']
  },
  {
    id: 'cloud',
    title: 'Cloud Architect',
    description: 'Master AWS services, serverless architecture, and cloud security patterns.',
    icon: <BsCloud size={30} />,
    color: '#232f3e',
    link: '/aws',
    topics: ['IAM & Security', 'Serverless', 'EC2/S3', 'Microservices']
  },
  {
    id: 'ml',
    title: 'ML Engineer',
    description: 'Learn supervised & unsupervised learning, model evaluation, and deployment strategies.',
    icon: <BsCpu size={30} />,
    color: '#6f42c1',
    link: '/ml',
    topics: ['Regression', 'Classification', 'NLP', 'Model Deployment']
  },
  {
    id: 'flask',
    title: 'Flask Master',
    description: 'Build scalable web applications with Python & Flask, covering routing, templates, and DB integration.',
    icon: <BsFileEarmarkCode size={30} />,
    color: '#000000',
    link: '/flask',
    topics: ['Routing', 'Jinja2', 'SQLAlchemy', 'Blueprints']
  },
  {
    id: 'api',
    title: 'API Developer',
    description: 'Master RESTful API design, authentication, documentation, and testing practices.',
    icon: <BsShare size={30} />,
    color: '#28a745',
    link: '/api',
    topics: ['REST', 'JWT Auth', 'Swagger/OpenAPI', 'Postman']
  },
  {
    id: 'coding',
    title: 'Coding Patterns',
    description: 'Crack the code with essential patterns like Sliding Window, Two Pointers, and Dynamic Programming.',
    icon: <BsTerminal size={30} />,
    color: '#dc3545',
    link: '/coding',
    topics: ['Sliding Window', 'Two Pointers', 'Backtracking', 'Heaps']
  }
];

const PreparationPathsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container py-5 mt-4"
    >
      <div className="text-center mb-5">
        <h6 className="text-uppercase tracking-widest mb-3" style={{ color: 'var(--accent-color)', letterSpacing: '3px' }}>
          Choose Your Journey
        </h6>
        <h1 className="display-4 brand-font mb-4">Preparation <span style={{ color: 'var(--accent-color)' }}>Paths</span></h1>
        <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
          Select a specialized path to focus your learning. Each path is curated with 
          interview-ready content and logical progression.
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        {paths.map((path, index) => (
          <motion.div
            key={path.id}
            className="col-lg-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="premium-card h-100 d-flex flex-column hover-lift">
              <div className="d-flex align-items-center mb-4">
                <div 
                  className="rounded-4 p-3 d-flex align-items-center justify-content-center me-3"
                  style={{ background: `${path.color}15`, color: path.color }}
                >
                  {path.icon}
                </div>
                <h3 className="brand-font mb-0">{path.title}</h3>
              </div>
              
              <p className="text-muted mb-4" style={{ flexGrow: 1 }}>
                {path.description}
              </p>

              <div className="mb-4">
                <div className="small text-uppercase fw-bold text-muted mb-2 tracking-wider">Core Focus</div>
                <div className="d-flex flex-wrap gap-2">
                  {path.topics.map(topic => (
                    <span 
                      key={topic} 
                      className="badge rounded-pill border py-2 px-3 fw-normal"
                      style={{ color: 'var(--text-color)', background: 'var(--secondary-bg)' }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <Link to={path.link} className="btn btn-premium w-100 py-3">
                Start Path
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PreparationPathsPage;
