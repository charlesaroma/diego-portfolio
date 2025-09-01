import React from 'react';
import { Icon } from '@iconify/react';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900/80 via-black/80 to-gray-900/80 backdrop-blur-md p-8 mt-8 shadow-2xl border-t border-indigo-500/20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a 
              href="https://www.imdb.com/name/nm16775523/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
              aria-label="IMDb Profile"
            >
              <Icon icon="mdi:movie" className="w-6 h-6" />
            </a>
            <a 
              href="https://www.instagram.com/diego_thedarkknight/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
              aria-label="Instagram Profile"
            >
              <Icon icon="mdi:instagram" className="w-6 h-6" />
            </a>
            <a 
              href="https://twitter.com/DiegoMwesigwa" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="X (Twitter) Profile"
            >
              <Icon icon="mdi:twitter" className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/diego-mwesigwa-8a4bb6108/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Icon icon="mdi:linkedin" className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Diego The Dark Knight. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Entertainment Lawyer | Actor | Poet
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
