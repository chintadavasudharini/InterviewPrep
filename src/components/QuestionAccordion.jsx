import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuestionAccordion = ({ questions }) => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  if (!questions || questions.length === 0) return null;

  return (
    <div className="mt-5 pt-4">
      <h3 className="mb-4 brand-font">Interview Questions</h3>
      <div className="accordion-custom">
        {questions.map((q, index) => (
          <div key={index} className="mb-3">
            <button
              className={`w-100 text-start d-flex justify-content-between align-items-center p-4 border-0 rounded-4 shadow-sm ${activeIndex === index ? 'bg-white' : 'bg-light'}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              style={{ transition: 'all 0.3s ease' }}
            >
              <span className="fw-bold text-dark pe-3">🔹 Q{index + 1}: {q.question}</span>
              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                className="fs-5 text-muted"
              >
                ↓
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
                  <div className="p-4 text-muted bg-white border-top mx-2 rounded-bottom-4 shadow-sm">
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
