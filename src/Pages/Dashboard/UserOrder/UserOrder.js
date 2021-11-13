import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import UserOrderTable from './UserOrderTable/UserOrderTable';


const UserOrder = () => {
    const [order, setOrder] = useState([]);
    const [data, setData] = useState([]);
    const { user } = useAuth();
    // console.log(data);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);

    useEffect(() => {
        if (order.length > 0) {

            const matchedData = order?.filter(detail => detail?.email == user?.email)
            setData(matchedData);
        }

    }, [order]);

    return (
        <div>
            <div className="text-center m-5">
                <h1>This is My Order Page</h1>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Title</th>
                        <th scope="col">Product Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((iteam) => (<UserOrderTable
                            key={iteam._id}
                            iteam={iteam}
                        > </UserOrderTable>))
                    }
                </tbody>
            </table>

        </div >
    );
};

export default UserOrder;