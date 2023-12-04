import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get("http://localhost:3001/orders/", {withCredentials: true});
            console.log("a", data);
            setOrders(data);
        };
        fetchProducts();
    }, []);

    const handleSetStatus = async (order, status) => {
        try {
            await axios.put(`http://localhost:3001/orders/updateorder/${order.order_id}/${status}`, { withCredentials: true });
        } catch (error) {
            console.error("Status update failed: ", error);
        }
    };

    return (
        <div style={{display:"flex", gap:"30px"}}>
            <h1>Orders</h1>
            {orders.map((order) => (
                <div key={order._id}>
                    <p>{order.user_id}</p>
                    <p>{order.order_date}</p>
                    <p>{order.order_status}</p>
                    <div>
                        <h5>Order Items:</h5>
                        {order.order_items.map((item, index) => (
                            <p key={index}>{item.pr_name}</p>
                        ))}
                    <div>
                        <select onChange={(e) => handleSetStatus(order, e.target.value)}>
                            <option value="">Select status</option>
                            <option value="Preparing">Preparing</option>
                            <option value="On The Way">On the way</option>
                            <option value="Delivered">Delivered</option>
                        </select>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    );
    
};

export default Orders;