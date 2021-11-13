import React, { useEffect, useState } from 'react';

const OrderDisplay = (props) => {
    const [order, setOrder] = useState();
    const { _id, title, name, email, phone, address, status } = props.iteam

    // console.log(props.sl);
    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);
    // console.log(order);

    const getStatus = (status) => {

        return (status == 1) ? "Pendding" : "Shipping"

    }
    // console.log(status);
    const handleDelete = id => {
        // console.log(id);
        const confirmation = window.confirm('Are you sure to Delete!!')
        if (confirmation) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount == 1) {
                        const remaining = order.filter(iteam => iteam._id !== id);
                        setOrder(remaining);
                    }
                    else {
                        alert('Something is wrong');
                    }
                });
        }

    }
    return (
        <tr>
            <td></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{title}</td>
            <td>{address}</td>
            <td>{getStatus(status)}</td>
            <td>
                <button   >Shipping</button>
                <button onClick={() => handleDelete(_id)}  >Delete</button>

            </td>
        </tr>
    );
};

export default OrderDisplay;