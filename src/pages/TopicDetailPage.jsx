import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { interviewData } from '../data/interviewData';
import Sidebar from '../components/Sidebar';
import QuestionAccordion from '../components/QuestionAccordion';
import CodeBlock from '../components/CodeBlock';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const TopicDetailPage = () => {
  const { techId, topicId } = useParams();
  const topics = interviewData[techId] || [];
  const topicIndex = topics.findIndex(t => t.id === topicId);
  const topic = topics[topicIndex];

  if (!topic) {
    return (
      <div className="container py-5 text-center">
        <h2>Topic Not Found</h2>
        <Link to={`/${techId}`} className="btn btn-premium mt-3">Back to Topics</Link>
      </div>
    );
  }

  const prevTopic = topics[topicIndex - 1];
  const nextTopic = topics[topicIndex + 1];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 d-none d-lg-block p-0 border-end" style={{ minHeight: 'calc(100vh - 70px)', background: 'var(--card-bg)' }}>
          <Sidebar currentTechId={techId} currentTopicId={topicId} />
        </div>
        <div className="col-lg-9 py-5 px-lg-5">
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav aria-label="breadcrumb" className="mb-4">
              <Link to={`/${techId}`} className="text-decoration-none text-muted small d-flex align-items-center">
                <BsArrowLeft className="me-2" /> Back to {techId.toUpperCase()} Curriculum
              </Link>
            </nav>

            <header className="mb-5">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge rounded-pill bg-accent-light text-accent border border-accent-soft px-3 py-2 text-uppercase letter-spacing-1">
                  {topic.category}
                </span>
              </div>
              <h1 className="display-4 brand-font mb-4 fw-bold">{topic.title}</h1>
              <div className="premium-quote-box">
                <h5 className="text-accent mb-2 small text-uppercase letter-spacing-2 fw-bold">Core Concept:</h5>
                <p className="lead text-muted mb-0">{topic.definition}</p>
              </div>
            </header>

            {topic.sections && topic.sections.map((section, index) => (
              <section key={index} className="mb-4">
                {section.type === 'text' && (
                  <div className="explanation-text">
                    <p className="text-muted" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>{section.value}</p>
                  </div>
                )}
                {section.type === 'table' && (
                  <div className="premium-table-container">
                    <table className="premium-table">
                      <thead>
                        <tr>
                          {section.headers.map((header, i) => (
                            <th key={i}>{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.rows.map((row, i) => (
                          <tr key={i}>
                            {row.map((cell, j) => (
                              <td key={j}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.type === 'code' && (
                  <div className="mb-2">
                    <CodeBlock code={section.value} />
                  </div>
                )}
                {section.type === 'output' && (
                  <div className="output-console shadow-lg">
                    <pre className="m-0">{section.value}</pre>
                  </div>
                )}
              </section>
            ))}

            {!topic.sections && (
              <>
                <section className="mb-5">
                  <div className="explanation-text">
                    <p className="text-muted" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>{topic.explanation}</p>
                  </div>
                </section>

                <section className="mb-5">
                  {topic.syntax && (
                    <div className="mb-4">
                      <CodeBlock code={topic.syntax} />
                    </div>
                  )}
                  {topic.example && (
                    <div>
                      <CodeBlock code={topic.example} />
                    </div>
                  )}
                </section>

                {topic.output && (
                  <section className="mb-5">
                    <div className="output-console shadow-lg">
                      <pre className="m-0">{topic.output}</pre>
                    </div>
                  </section>
                )}

                {topic.postContent && (
                  <section className="mb-5">
                    <div className="explanation-text">
                      <p className="text-muted" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>{topic.postContent}</p>
                    </div>
                  </section>
                )}
              </>
            )}

            {topic.questions && topic.questions.length > 0 && (
              <section className="mb-5">
                <QuestionAccordion questions={topic.questions} />
              </section>
            )}

            <footer className="mt-5 pt-5 border-top d-flex justify-content-between">
              {prevTopic ? (
                <Link to={`/${techId}/${prevTopic.id}`} className="text-decoration-none pagination-link">
                  <div className="text-muted small mb-1 text-uppercase fw-bold">Previous</div>
                  <div className="fw-bold text-dark d-flex align-items-center"><BsArrowLeft className="me-2" /> {prevTopic.title}</div>
                </Link>
              ) : <div></div>}
              {nextTopic && (
                <Link to={`/${techId}/${nextTopic.id}`} className="text-decoration-none pagination-link text-end">
                  <div className="text-muted small mb-1 text-uppercase fw-bold">Next</div>
                  <div className="fw-bold text-dark d-flex align-items-center justify-content-end">{nextTopic.title} <BsArrowRight className="ms-2" /></div>
                </Link>
              )}
            </footer>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TopicDetailPage;

