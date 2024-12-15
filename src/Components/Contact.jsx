import React, { useState } from 'react';
import me from '../assets/me.png';
import emailjs from '@emailjs/browser';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message || !subject) {
      alert('Please fill all fields');
      return;
    }

    setIsLoading(true);

    const templateId = 'template_vtmc3vq';
    const publicKey = '8Pk9ZBL2nw2CXU17K';
    const serviceId = 'service_ovd0unj';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'HS-Code',
      message: message,
      subject: subject,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsLoading(false);
        setName('');
        setEmail('');
        setMessage('');
        setSubject('');
      },
      (error) => {
        console.log('FAILED...', error);
        setIsLoading(false);
      }
    );
  };

  return (
    <div className='bg-red-600 overflow-hidden mb-[50px]'>
      <div className='grid md:grid-cols-2 items-center lg:px-28'>
        <div className='hidden md:grid'>
          <img src={me} alt="/" />
        </div>
        <form onSubmit={handleSubmit} className='lg:mt-[150px] mt-[30px] pb-7'>
          <input
            type="text"
            placeholder='Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full bg-transparent py-3 text-md border-b mb-5 focus:outline-none text-gray-300'
          /> <br />
          <input
            type="email"
            placeholder='Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full bg-transparent py-3 text-md border-b mb-5 focus:outline-none text-gray-300'
          /> <br />
          <input
            type="text"
            placeholder='Subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className='w-full bg-transparent py-3 text-md border-b mb-5 focus:outline-none text-gray-300'
          /> <br />
          <textarea
            placeholder='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='w-full text-gray-400 bg-transparent py-3 text-md border-b mb-5 focus:outline-none'
          ></textarea> <br />
          <button
            type='submit'
            className='bg-white text-red-600 text-center text-md py-2 px-8 border-2 border-red-300 hover:bg-black hover:text-white'
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
