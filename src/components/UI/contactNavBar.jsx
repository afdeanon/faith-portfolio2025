import React from 'react';
import { Github, Linkedin, Phone, Mail, Sun } from 'lucide-react';
import { navBarData } from '../../data/navBarData';
const Navbar = () => {
    const {  contact } = navBarData;
    
  return (
    <div className="flex items-center">
      <div className="relative">
        {/* Main navbar container */}
        <div className="flex items-center bg-white rounded-full shadow-lg border border-gray-200 px-2 py-1 space-x-2">
          {/* GitHub */}
          <div className="relative group">
            <a 
              href={contact.github}
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-gray-100 transition-colors duration-200 block"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              GitHub
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="relative group">
            <a 
              href={contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 block"
            >
              <Linkedin className="w-6 h-6 text-gray-700" />
            </a>
            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              LinkedIn
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>

          {/* Phone */}
          <div className="relative group">
            <a 
              href={contact.phone}
              className="p-3 rounded-full hover:bg-green-50 hover:text-green-600 transition-colors duration-200 block"
            >
              <Phone className="w-6 h-6 text-gray-700" />
            </a>
            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              Phone
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>

          {/* Email */}
          <div className="relative group">
            <a 
              href={contact.email}
              className="p-3 rounded-full hover:bg-red-50 hover:text-red-600 transition-colors duration-200 block"
            >
              <Mail className="w-6 h-6 text-gray-700" />
            </a>
            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              Email
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;