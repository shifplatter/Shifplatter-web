// Next.js Ready Admin Portal UI
// Place inside: app/page.tsx
// Deploy on Vercel for a live shareable URL

export default function FoodAdminPortal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Restaurant Food
              <span className="text-orange-500 block">Admin Portal</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              A clean and user-friendly dashboard for admins to upload delicious
              food photos, restaurant information, and menu details.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl shadow-lg p-5 border border-orange-100">
              <div className="text-3xl mb-3">🍔</div>
              <h3 className="font-semibold text-gray-800">Easy Uploads</h3>
              <p className="text-sm text-gray-500 mt-2">
                Upload food photos instantly with drag & drop support.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-5 border border-orange-100">
              <div className="text-3xl mb-3">🏪</div>
              <h3 className="font-semibold text-gray-800">Restaurant Details</h3>
              <p className="text-sm text-gray-500 mt-2">
                Add restaurant names, food categories, pricing, and more.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white rounded-[32px] shadow-2xl p-8 border border-orange-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Admin Login</h2>
              <p className="text-gray-500 mt-1">
                Secure access for restaurant administrators.
              </p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">
              🔐
            </div>
          </div>

          {/* Login Form */}
          <div className="space-y-5">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="admin@example.com"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 transition-all text-white font-semibold py-3 rounded-2xl shadow-lg">
              Login to Dashboard
            </button>
          </div>

          {/* Upload Section */}
          <div className="mt-10 border-t pt-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Upload Food Details
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Add restaurant menu items and photos.
                </p>
              </div>
              <div className="text-3xl">📸</div>
            </div>

            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  placeholder="Enter restaurant name"
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">
                  Food Name
                </label>
                <input
                  type="text"
                  placeholder="Enter food item"
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">
                  Food Description
                </label>
                <textarea
                  rows="4"
                  placeholder="Write a short description..."
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                ></textarea>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">
                  Upload Food Photo
                </label>

                <div className="border-2 border-dashed border-orange-300 rounded-3xl p-10 text-center bg-orange-50 hover:bg-orange-100 transition-all cursor-pointer">
                  <div className="text-5xl mb-3">⬆️</div>
                  <p className="text-gray-700 font-medium">
                    Drag & Drop or Click to Upload
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    PNG, JPG, JPEG supported
                  </p>
                </div>
              </div>

              <button className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-2xl transition-all shadow-lg">
                Save Food Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
