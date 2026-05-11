import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuestionAccordion = ({ questions }) => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  if (!questions || questions.length === 0) return null;

  return (
    <div className="mt-5 pt-4">
      <div className="d-flex align-items-center gap-3 mb-4">
        <span className="badge rounded-pill bg-accent-light text-accent border border-accent-soft px-3 py-2 text-uppercase letter-spacing-1 shadow-sm" style={{ fontSize: '0.7rem' }}>
          Interview Prep
        </span>
        <div className="d-flex align-items-center gap-2">
          <span className="text-accent fs-4">⬥</span>
          <h3 className="brand-font m-0 fw-bold">Interview Questions</h3>
        </div>
      </div>
      <div className="accordion-custom">
        {questions.map((q, index) => (
          <div key={index} className="mb-3">
            <button
              className={`w-100 text-start d-flex justify-content-between align-items-center p-4 rounded-4 accordion-item-premium ${activeIndex === index ? 'active shadow-sm' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <span className={`fw-bold pe-3 ${activeIndex === index ? 'text-accent' : 'text-dark'}`}>
                🔹 {index + 1}. {q.question}
              </span>
              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                className={`fs-5 ${activeIndex === index ? 'text-accent' : 'text-muted'}`}
              >
                {activeIndex === index ? '↑' : '↓'}
              </motion.span>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 text-muted accordion-answer mx-3 mt-1 rounded-bottom-4 shadow-sm">
                    {q.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionAccordion;
