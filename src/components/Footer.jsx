import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4 pt-24 pb-12">
      <div className="mb-12 flex md:justify-center">
        <img 
          src="/Najville.svg" 
          alt="Knight Frank"
          className="h-8"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-52 mb-12 ">
        <div>
          <h3 className="font-semibold text-lg mb-4">Residential</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Residential property</a></li>
            <li><a href="#" className="hover:underline">Property management</a></li>
            <li><a href="#" className="hover:underline">Estate agency</a></li>
            <li><a href="#" className="hover:underline">Valuations</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Commercial</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Commercial property</a></li>
            <li><a href="#" className="hover:underline">Property management</a></li>
            <li><a href="#" className="hover:underline">Estate agency</a></li>
            <li><a href="#" className="hover:underline">Valuations</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">About Najville</h3>
          <ul className="space-y-2 mb-8 text-sm">
            <li><a href="#" className="hover:underline">Our App</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-8 md:justify-center">
        <a href="#" className="text-gray-400 hover:text-gray-600">
          <Facebook size={24} />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-600">
          <Twitter size={24} />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-600">
          <Linkedin size={24} />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-600">
          <Instagram size={24} />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-600">
          <Youtube size={24} />
        </a>
      </div>

      <div className="flex flex-wrap gap-4 text-sm mb-8 md:justify-center">
        <a href="#" className="hover:underline">Terms and Conditions</a>
        <a href="#" className="hover:underline">Group Privacy Statement</a>
        <a href="#" className="hover:underline">Fair Processing Notice</a>
      </div>

      <div className="text-sm text-gray-600 flex justify-center">
        Copyright © 2025 Najville Realties
      </div>
    </footer>
  );
};

export default Footer;