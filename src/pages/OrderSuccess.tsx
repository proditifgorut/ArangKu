import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const OrderSuccess: React.FC = () => {
  const orderId = `ORD-${Date.now()}`;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6"
        >
          <CheckCircle className="w-16 h-16 text-green-600" />
        </motion.div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Pesanan Berhasil!
        </h1>

        <p className="text-gray-600 mb-6">
          Terima kasih telah berbelanja di ArangKu. Pesanan Anda sedang diproses.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">Nomor Pesanan</span>
            <span className="font-mono font-semibold">{orderId}</span>
          </div>
          <div className="flex items-center justify-center space-x-2 mt-4 text-sm text-gray-600">
            <Package className="w-4 h-4" />
            <span>Estimasi pengiriman: 3-5 hari kerja</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          Kami telah mengirimkan email konfirmasi pesanan. Silakan cek email Anda untuk detail lebih lanjut.
        </p>

        <div className="space-y-3">
          <Link
            to="/profile"
            className="block w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Lihat Status Pesanan
          </Link>

          <Link
            to="/"
            className="flex items-center justify-center space-x-2 text-orange-600 hover:text-orange-700 font-medium"
          >
            <Home className="w-5 h-5" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderSuccess;
