import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User, Flame } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartItemsCount } = useCart();
  const navigate = useNavigate();

  const cartItemsCount = getCartItemsCount();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Flame className="w-8 h-8" />
            <span className="text-2xl font-bold">ArangKu</span>
          </Link>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full relative">
              <input
                type="text"
                placeholder="Cari produk arang..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <button type="submit" className="absolute right-3 top-2.5 text-gray-600 hover:text-orange-600">
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/products" className="hover:text-orange-200 transition">
              Produk
            </Link>
            <Link to="/profile" className="hover:text-orange-200 transition">
              <User className="w-6 h-6" />
            </Link>
            <Link to="/cart" className="relative hover:text-orange-200 transition">
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-orange-600 border-t border-orange-500">
          <div className="px-4 py-4 space-y-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Cari produk arang..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <button type="submit" className="absolute right-3 top-2.5 text-gray-600">
                <Search className="w-5 h-5" />
              </button>
            </form>
            <Link
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 hover:text-orange-200"
            >
              Produk
            </Link>
            <Link
              to="/profile"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 hover:text-orange-200"
            >
              Profil
            </Link>
            <Link
              to="/cart"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 hover:text-orange-200 flex items-center justify-between"
            >
              <span>Keranjang</span>
              {cartItemsCount > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 font-bold">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
