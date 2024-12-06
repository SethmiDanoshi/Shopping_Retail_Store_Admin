import React, { useState } from "react";

const ViewOrders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderId: "#012345/10",
      createdAt: "Apr 23, 2023",
      customer: "Dunder Muffin LTD.",
      priority: "Normal",
      total: "$2,960.00",
      paymentStatus: "Unpaid",
      items: "3 items",
      deliveryNumber: "-",
      orderStatus: "In progress",
    },
    {
      id: 2,
      orderId: "#012345/11",
      createdAt: "Apr 23, 2023",
      customer: "Acme Inc.",
      priority: "High",
      total: "$2,960.00",
      paymentStatus: "Paid",
      items: "2 items",
      deliveryNumber: "-",
      orderStatus: "Packed",
    },
    {
      id: 3,
      orderId: "#012345/12",
      createdAt: "Apr 23, 2023",
      customer: "Dunder Muffin LTD.",
      priority: "Low",
      total: "$2,960.00",
      paymentStatus: "Refund",
      items: "1 item",
      deliveryNumber: "DV/012345/101/RF",
      orderStatus: "Cancelled",
    },
  ]);

  const priorities = ["High", "Normal", "Low"];
  const paymentStatuses = ["Paid", "Unpaid", "Refund"];
  const orderStatuses = ["In progress", "Packed", "Delivered", "Cancelled"];

  // Remove an order
  const removeOrder = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this order?");
    if (confirmed) {
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
    }
  };

  const handleChange = (id, field, value) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, [field]: value } : order
      )
    );
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "High":
      case "Cancelled":
      case "Refund":
        return "text-red-700 font-bold";
      case "Paid":
      case "Delivered":
        return "text-green-800 font-bold";
      case "Packed":
        case "Normal": 
        return "text-blue-700 font-bold";
        case "Low": 
        return "text-yellow-500 font-bold";
      default:
        return "text-indigo-500 font-bold";
    }
  };

  return (
    <div className="p-6 bg-gay-100 text-black min-h-screen">
        <div className="bg-black text-white pl-10 py-4">
  <h1 className="text-lg font-bold">Orders</h1>
</div>
      {/* <h1 className="text-2xl font-bold mb-6">Orders</h1> */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-black ">Order ID</th>
              <th className="px-6 py-3 text-left text-black ">Created At</th>
              <th className="px-6 py-3 text-left text-black ">Customer</th>
              <th className="px-6 py-3 text-left text-black ">Priority</th>
              <th className="px-6 py-3 text-left text-black ">Total</th>
              <th className="px-6 py-3 text-left text-black ">Payment Status</th>
              <th className="px-6 py-3 text-left text-black ">Items</th>
              <th className="px-6 py-3 text-left text-black ">Delivery Number</th>
              <th className="px-6 py-3 text-left text-black ">Order Status</th>
              <th className="px-6 py-3 text-left text-black ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b"
              >
                <td className="px-6 py-4">{order.orderId}</td>
                <td className="px-6 py-4">{order.createdAt}</td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4">
                  <select
                    value={order.priority}
                    onChange={(e) =>
                      handleChange(order.id, "priority", e.target.value)
                    }
                    className={`bg-white text-white rounded px-2 py-1 ${getStatusClass(
                      order.priority
                    )}`}
                  >
                    {priorities.map((priority) => (
                      <option key={priority} value={priority}>
                        {priority}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4">{order.total}</td>
                <td className="px-6 py-4">
                  <select
                    value={order.paymentStatus}
                    onChange={(e) =>
                      handleChange(order.id, "paymentStatus", e.target.value)
                    }
                    className={`bg-white text-white rounded px-2 py-1 ${getStatusClass(
                      order.paymentStatus
                    )}`}
                  >
                    {paymentStatuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4">{order.items}</td>
                <td className="px-6 py-4">{order.deliveryNumber}</td>
                <td className="px-6 py-4">
                  <select
                    value={order.orderStatus}
                    onChange={(e) =>
                      handleChange(order.id, "orderStatus", e.target.value)
                    }
                    className={`bg-white text-white rounded px-2 py-1 ${getStatusClass(
                      order.orderStatus
                    )}`}
                  >
                    {orderStatuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4">
                  {["Delivered", "Cancelled"].includes(order.orderStatus) && (
                    <button
                      onClick={() => removeOrder(order.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                    >
                      Remove
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewOrders;
