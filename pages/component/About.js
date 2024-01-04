import React, { useState } from 'react';

const About = () => {
  const accordionItems = [
    {
      id: 'mission',
      title: 'Our Mission',
      content: [
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...',
        'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      ],
    },
    {
      id: 'vision',
      title: 'Our Vision',
      content: [
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
        'Separated they live in Bookmarksgrove right',
        'Separated they live in Bookmarksgrove left',
      ],
    },
    {
      id: 'chooseUs',
      title: 'Why Choose Us',
      content: [
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore asperiores cupiditate harum odit dolor nemo ipsa mollitia debitis, unde corrupti iusto nulla, voluptates beatae quibusdam rerum. Quas odit temporibus facere.',
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
        <p className='my-2'>
          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day
          however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
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
