import React, { useEffect, useState } from 'react';

const Order = (props) => {
    const [order, setOrder] = useState();
    const { _id, title, name, email, phone, address, status } = props.iteam

    // console.log(props.sl);

    useEffect(() => {
        fetch('https://frozen-fjord-73803.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);
    // console.log(order);

    const getStatus = (status) => {

        return (status == 1) ? "pendding" : "Active"

    }
    // console.log(status);
    const handleDelete = id => {
        console.log(id);
        const url = `https://frozen-fjord-73803.herokuapp.com/order/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    alert('Delete Successfully')
                    const remaining = order.filter(iteam => iteam._id !== id);
                    setOrder(remaining);
                }
            })
    }

    return (
        <>
            <tr>
                <td></td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{title}</td>
                <td>{address}</td>
                <td>{getStatus(status)}</td>
                <td><button onClick={() => handleDelete(_id)}  >Delete</button></td>
            </tr>

        </>
    );
};

export default Order;