import React, { useState } from 'react';
import { User, Package, MapPin, Settings, LogOut } from 'lucide-react';
import { faker } from '@faker-js/faker';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('orders');

  const mockUser = {
    name: 'Budi Santoso',
    email: 'budi.santoso@email.com',
    phone: '+62 812-3456-7890',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Budi'
  };

  const mockOrders = Array.from({ length: 5 }, (_, i) => ({
    id: `ORD-${Date.now() - i * 86400000}`,
    date: faker.date.recent({ days: 30 }).toLocaleDateString('id-ID'),
    total: Number(faker.commerce.price({ min: 100000, max: 1000000 })),
    status: ['delivered', 'shipped', 'processing', 'pending'][i % 4] as 'delivered' | 'shipped' | 'processing' | 'pending',
    items: Number(faker.number.int({ min: 1, max: 5 }))
  }));

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'Terkirim';
      case 'shipped':
        return 'Dikirim';
      case 'processing':
        return 'Diproses';
      default:
        return 'Pending';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Profil Saya</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-6">
                <img
                  src={mockUser.avatar}
                  alt={mockUser.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-orange-100"
                />
                <h2 className="font-bold text-xl">{mockUser.name}</h2>
                <p className="text-gray-600 text-sm">{mockUser.email}</p>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'orders'
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Package className="w-5 h-5" />
                  <span>Pesanan Saya</span>
                </button>

                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <User className="w-5 h-5" />
                  <span>Info Pribadi</span>
                </button>

                <button
                  onClick={() => setActiveTab('address')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'address'
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                  <span>Alamat</span>
                </button>

                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Settings className="w-5 h-5" />
                  <span>Pengaturan</span>
                </button>

                <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors">
                  <LogOut className="w-5 h-5" />
                  <span>Keluar</span>
                </button>
              </nav>
            </div>
          </aside>

          <main className="lg:col-span-3">
            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Riwayat Pesanan</h2>

                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div
                      key={order.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <div>
                          <p className="font-mono font-semibold">{order.id}</p>
                          <p className="text-sm text-gray-600">{order.date}</p>
                        </div>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 sm:mt-0 ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {getStatusText(order.status)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                        <div>
                          <p className="text-sm text-gray-600">{order.items} produk</p>
                          <p className="font-bold text-orange-600">
                            Rp {order.total.toLocaleString('id-ID')}
                          </p>
                        </div>
                        <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                          Lihat Detail
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Informasi Pribadi</h2>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      defaultValue={mockUser.name}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue={mockUser.email}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      defaultValue={mockUser.phone}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Simpan Perubahan
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'address' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Alamat Tersimpan</h2>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200">
                    Tambah Alamat
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded font-medium">
                        Utama
                      </span>
                      <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                        Edit
                      </button>
                    </div>
                    <h3 className="font-semibold mb-1">Rumah</h3>
                    <p className="text-gray-600 text-sm">
                      Jl. Merdeka No. 123, Kelurahan Sudirman<br />
                      Jakarta Pusat, DKI Jakarta 10110<br />
                      Indonesia
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Pengaturan Akun</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Notifikasi</h3>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="mr-3 text-orange-600 focus:ring-orange-500" />
                        <span className="text-sm">Email tentang pesanan</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="mr-3 text-orange-600 focus:ring-orange-500" />
                        <span className="text-sm">Email promosi dan penawaran</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-3 text-orange-600 focus:ring-orange-500" />
                        <span className="text-sm">SMS notifikasi pengiriman</span>
                      </label>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-3">Keamanan</h3>
                    <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                      Ubah Password
                    </button>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
