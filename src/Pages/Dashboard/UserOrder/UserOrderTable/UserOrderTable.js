import React, { useEffect, useState } from 'react';

const UserOrderTable = ({ iteam }) => {
    const { _id, title, status, payment } = iteam;
    console.log('user data', iteam);
    const [order, setOrder] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);

    const handleDelete = id => {
        console.log(id);
        const url = `http://localhost:5000/orders/${id}`;
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

    const getStatus = (status) => {

        return (status == 1) ? "pendding" : "Shipping"

    }
    return (
        < tr >
            <td></td>
            <td>{title}</td>
            <td>{payment}</td>
            <td>{getStatus(status)}</td>
            <td><button onClick={() => handleDelete(_id)}  >Delete</button></td>
        </tr>
    );
};

export default UserOrderTable;