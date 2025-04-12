'use client';

import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function ContactInfo() {
  return (
    <div className="flex flex-col items-end space-y-2 font-serif">
      <div className="flex items-center space-x-2">
        <FaEnvelope className="text-primary w-5 h-5" />
        <a href="mailto:dennyscalizaya.drcq@gmail.com" className="text-gray-700 hover:text-primary">
          dennyscalizaya.drcq@gmail.com
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <FaWhatsapp className="text-primary w-5 h-5" />
        <a href="https://wa.me/+34622859524" className="text-gray-700 hover:text-primary">
          +34 622 85 95 24
        </a>
      </div>
    </div>
  );
} 