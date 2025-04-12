'use client';

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
      <a 
        href="mailto:dennyscalizaya.drcq@gmail.com" 
        className="flex items-center text-gray-700 hover:text-primary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>dennyscalizaya.drcq@gmail.com</span>
      </a>
      
      <a 
        href="https://wa.me/34622859524" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center text-gray-700 hover:text-primary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span>+34 622 85 95 24</span>
      </a>
    </div>
  );
};

export default ContactInfo; 