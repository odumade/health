import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: 'What services does Akroo Health offer?',
      answer:
        'At Akroo Health, we provide a range of virtual mental health services including diagnosis and treatment for Depression, Anxiety, Panic Disorders, ADHD, PTSD, Bipolar Disorder, and more.',
    },
    {
      question: 'How can I book an appointment?',
      answer:
        'You can easily book an appointment by clicking on the "Book An Appointment" button on our website, or by calling our office directly.',
    },
    {
      question: 'Is Akroo Health covered by insurance?',
      answer:
        'Yes, we are partnered with major insurance carriers, including NJ Medicaid and Medicare, to offer affordable mental health services.',
    },
    {
      question: 'Who can benefit from Akroo Health services?',
      answer:
        'Our services are available to individuals of all age groups dealing with mental health challenges such as anxiety, depression, and more.',
    },
    {
      question: 'What are some common psychiatric disorders that you treat?',
      answer:
        'Depression, Generalized Anxiety Disorder, Social Anxiety, Obsessive Compulsive Disorder, Bipolar Disorder, Insomnia, ADHD, Oppositional Defiant Disorder, Borderline Personality Disorder, PTSD, Psychosis and more.',
    },
    {
      question: 'What age patients do you see?',
      answer:
        'We see patients 16 and up.',
    },
    {
      question: 'How do I get medication?',
      answer:
        'We send prescriptions to pharmacies electronically—just let us know your preferred pharmacy.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'If you are unable to attend a session, please give us at least 24-48 hours notice. Otherwise, you may be charged for the full rate of the session.',
    },
  ];

  return (
    <section id="faq" className="bg-gradient-to-b from-white to-[#D2DCFF] py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <button
                className="flex justify-between items-center w-full text-left font-medium text-lg text-gray-900"
                onClick={() => toggleAnswer(index)}
              >
                {faq.question}
                <span>{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
