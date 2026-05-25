import { useState } from 'react'
import { Plus, Star, Upload } from 'lucide-react'

export default function RestaurantFoodUploadUI() {
  const [foods, setFoods] = useState([
    {
      id: 1,
      restaurant: 'Spice Garden',
      food: 'Chicken Biryani',
      image:
        'https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?q=80&w=1200&auto=format&fit=crop',
      rating: 4.8,
    },
    {
      id: 2,
      restaurant: 'Ocean Grill',
      food: 'Grilled Fish',
      image:
        'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=1200&auto=format&fit=crop',
      rating: 4.5,
    },
  ])

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white px-6 py-5 flex items-center justify-between shadow-lg">
        <div>
          <h1 className="text-2xl font-bold">Food Gallery Admin</h1>
          <p className="text-sm text-gray-300">
            Shareable restaurant food showcase
          </p>
        </div>

        <button className="bg-white text-black px-5 py-2 rounded-2xl font-semibold hover:opacity-90">
          Admin Login
        </button>
      </header>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 p-6">
        <div className="bg-white rounded-3xl shadow-xl p-6 h-fit sticky top-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-black text-white p-3 rounded-2xl">
              <Plus size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Admin Upload Panel</h2>
              <p className="text-gray-500 text-sm">
                Only admin can upload food images
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Restaurant Name
              </label>
              <input
                type="text"
                placeholder="Enter restaurant name"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Food Name
              </label>
              <input
                type="text"
                placeholder="Enter food name"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Food Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-3xl p-8 text-center bg-gray-50">
                <Upload className="mx-auto mb-3 text-gray-400" size={32} />
                <p className="text-gray-500 text-sm mb-3">
                  Click to upload food image
                </p>
                <input type="file" accept="image/*" />
              </div>
            </div>

            <button className="w-full bg-green-600 text-white py-4 rounded-2xl font-semibold hover:bg-green-700 transition text-lg">
              Upload Food Post
            </button>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Public Food Gallery
              </h2>
              <p className="text-gray-500 mt-1">
                Share this page link with everyone
              </p>
            </div>

            <button className="bg-black text-white px-5 py-3 rounded-2xl font-semibold">
              Share Link
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {foods.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition"
              >
                <img
                  src={item.image}
                  alt={item.food}
                  className="w-full h-64 object-cover"
                />

                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {item.food}
                      </h3>
                      <p className="text-gray-500">{item.restaurant}</p>
                    </div>

                    <div className="flex items-center gap-1 bg-yellow-100 px-3 py-2 rounded-2xl">
                      <Star className="fill-yellow-500 text-yellow-500" size={18} />
                      <span className="font-semibold">{item.rating}</span>
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-sm text-gray-600 mb-3">
                      Rate this food:
                    </p>

                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          className="bg-gray-100 hover:bg-yellow-100 p-3 rounded-2xl transition"
                        >
                          <Star size={20} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
