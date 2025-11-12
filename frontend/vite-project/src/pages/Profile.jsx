import MyOrderPage from "./MyOrderPage";

function Profile() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {/* Profile Information Section */}
          <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Hridik Suresh
            </h1>
            <p className="text-gray-600 mb-2">hridik@example.com</p>
            <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
              Logout
            </button>
          </div>
          {/* Orders Section */}
          <div className="w-full md:w-2/3 lg:w-3/4 shadow-md rounded-lg p-6">
            <MyOrderPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
