import React, { useState } from 'react';

const About = () => {
  const accordionItems = [
    {
      id: 'mission',
      title: 'Our Mission',
      content: [
        'Empowering communities through holistic healthcare, Pratkritik Arogya Ashram is dedicated to fostering well-being, providing compassionate care, and promoting a healthier, harmonious life',
      ],
    },
    {
      id: 'vision',
      title: 'Our Vision',
      content: [
        'Guided by a vision of a vibrant and resilient society, Pratkritik Arogya Ashram envisions a future where every individual thrives in optimal health, embracing a balanced and fulfilling life',
      ],
    },
    {
      id: 'chooseUs',
      title: 'Why Choose Us',
      content: [
        'Choose Pratkritik Arogya Ashram for unparalleled healthcare excellence. We prioritize your well-being through personalized care, cutting-edge treatments, and a commitment to your holistic health journey',
      ],
    },
  ];

  const [activeAccordion, setActiveAccordion] = useState(null);

  const accordionHandler = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };

  return (
    <div className='sm:flex mt-16  md:mx-10 mx-2 my-5'>
      <div className='sm:w-8/12'>
        <h1 className='font-bold my-5 text-2xl'>About Healthcare</h1>
        <p className='my-2 text-justify'>
        At Pratkritik Arogya Ashram, we are dedicated to compassionate healthcare. Our expert team integrates Naturopathy, Ayurveda, Yoga, and more for personalized well-being. With a commitment to holistic solutions, we empower individuals on their health journey, fostering vitality and resilience. Join us in shaping a transformative healthcare experience for a healthier future.
        </p>
        <div className='mt-5'>
          {accordionItems.map((item) => (
            <div className='my-2 p-2' key={item.id}>
              <div
                className={`font-bold bg-green-700 text-white shadow-lg p-4 cursor-pointer ${activeAccordion === item.id ? 'active' : ''}`}
                onClick={() => accordionHandler(item.id)}
              >
                <span>{activeAccordion === item.id ? '⬆️' : '⬇️'}</span> {item.title}
              </div>
              {activeAccordion === item.id && (
                <>
                  {item.content.map((content, index) => (
                    <div key={index} className='p-4 bg-green-600 text-white'>{content}</div>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='4/12'>
        <img
          src='https://preview.colorlib.com/theme/healthcare/images/about.png.webp'
          width={100}
          height={100}
          alt='bgimage'
          className='w-96'
        />
      </div>
    </div>
  );
};

export default About;
