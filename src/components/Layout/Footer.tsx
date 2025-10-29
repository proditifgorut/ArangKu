import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Flame className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold text-white">ArangKu</span>
            </div>
            <p className="text-sm mb-4">
              Platform e-commerce terpercaya untuk membeli arang tempurung berkualitas tinggi.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Produk</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products?category=Arang BBQ" className="hover:text-orange-500">Arang BBQ</Link></li>
              <li><Link to="/products?category=Arang Shisha" className="hover:text-orange-500">Arang Shisha</Link></li>
              <li><Link to="/products?category=Arang Industri" className="hover:text-orange-500">Arang Industri</Link></li>
              <li><Link to="/products?category=Arang Premium" className="hover:text-orange-500">Arang Premium</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Informasi</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-500">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-orange-500">Cara Pemesanan</a></li>
              <li><a href="#" className="hover:text-orange-500">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-orange-500">Syarat & Ketentuan</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>Jl. Industri No. 123, Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-orange-500" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-orange-500" />
                <span>info@arangku.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 ArangKu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
