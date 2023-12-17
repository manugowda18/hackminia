// FAQ.js
import React, { useState } from 'react';

const guidelines = "https://drive.google.com/file/d/1bZ2aZpRARhrG-Qk45rNLfqXmm1Df7qAm/view?usp=sharing";

const questions = [
  {
    question: 'Who can participate?',
    answer: 'Only those who are currently studying Engineering are eligible to participate',
  },
  {
    question: 'When will the applications close?',
    answer: '24th December\'23',
  },
  {
    question: 'How does the application process work?',
    answer: <a href={guidelines} className='text-blue-600'>View Guidelines Here</a>,
  },
  {
    question: 'How much does it cost?',
    answer: 'Rs 500/Team.',
  },
  {
    question: 'Can we apply as a team?',
    answer: 'Yea!.Minimum 2 & Maximum 4.All team members have to be from the same institution.',
  },
  {
    question: 'What if I don\'t have a team or an idea?',
    answer: <a href={guidelines} className='text-blue-600'>View Guidelines Here</a>,
  },
  {
    question: 'Once I am accepted, what do I need to bring?',
    answer: <a href={guidelines} className='text-blue-600'>View Guidelines Here</a>,
  },
  {
    question: 'Do you provide Accommodation to hackers?',
    answer: 'Yea!.Accommodation including food, snacks, tea/coffee, and nap area will be provided.',
  },
  {
    question: 'What shouldn\'t I bring?',
    answer: <a href={guidelines} className='text-blue-600'>View Guidelines Here</a>
  },
  {
    question: 'How does judging work?',
    answer: <a href={guidelines} className='text-blue-600'>View Guidelines Here</a>
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
