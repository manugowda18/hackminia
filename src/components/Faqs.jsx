// FAQ.js
import React, { useState } from 'react';

const questions = [
  {
    question: 'Who can participate?',
    answer: 'Who can participate?',
  },
  {
    question: 'When will the applications close?',
    answer: 'When will the applications close?',
  },
  {
    question: 'How does the application process work?',
    answer: 'How does the application process work?',
  },
  {
    question: 'How much does it cost?',
    answer: 'How much does it cost?',
  },
  {
    question: 'Can we apply as a team?',
    answer: 'Can we apply as a team?',
  },
  {
    question: 'What if I don\'t have a team or an idea?',
    answer: 'What if I don\'t have a team or an idea?',
  },
  {
    question: 'Once I am accepted, what do I need to bring?',
    answer: 'Once I am accepted, what do I need to bring?',
  },
  {
    question: 'Do you provide travel reimbursements to hackers?',
    answer: 'Do you provide travel reimbursements to hackers?',
  },
  {
    question: 'What shouldn\'t I bring?',
    answer: 'What shouldn\'t I bring?',
  },
  {
    question: 'How does judging work?',
    answer: 'How does judging work?',
  },
];

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </svg>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id='faqs' className='bg-svg  sm:bg-[length:900px_4000px] bg-[length:1000px_1700px] bg-center p-3'>
      <div className='sm:mt-12 mt-12 justify-center items-center flex'>
        <div className="mx-auto p-8">
          <h1 className="sm:text-5xl text-2xl text-center mb-4 sm:tracking-widest tracking-normal bg-white underline decoration-wavy  decoration-purple-400 decoration-1">Frequently Asked Questions</h1>
          <div className='sm:mt-16 mt-6'>
            {questions.map((item, index) => (
              <div key={index} className="mb-4 border-b pb-8">
                <input type="checkbox" id={`faq${index + 1}`} className="hidden" />
                <label
                  htmlFor={`faq${index + 1}`}
                  className="flex items-center cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
                  <span className={`w-6 h-6 rounded-full mr-4 flex items-center justify-center ${openIndex === index ? 'rotate-45' : ''}`}>
                    <PlusIcon />
                  </span>
                  <span className="sm:text-xl text-base font-medium sm:tracking-widest tracking-normal">{item.question}</span>
                </label>
                <div className={`ml-10 transition-max-h duration-500 ${openIndex === index ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
                  <p className="text-gray-700 pt-3">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
