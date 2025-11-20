import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function OderDetailsPage() {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "PayPal",
      shippingMethod: "Standard",
      shippingAddress: { city: "New York", country: "USA" },
      orderItems: [
        {
          productId: "1",
          name: "Jacket",
          price: 120,
          quantity: 1,
          image: "https://picsum.photos/150?random=4",
        },
        {
          productId: "3",
          name: "Shirt",
          price: 50,
          quantity: 1,
          image: "https://picsum.photos/150?random=345",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
      {!orderDetails ? (
        <p>No Ordeer details found</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border">
          {/* Order Info */}
          <div className="flex  flex-col sm:flex-row justify-between mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Order ID: #{orderDetails._id}
              </h3>
              <p className="text-gray-600">
                {new Date(orderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={` ${
                  orderDetails.isPaid
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                } px-3 py-1 rounded-full text-sm font-medium mb-2 `}
              >
                {orderDetails.isPaid ? "Approved" : "Pending"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OderDetailsPage;
