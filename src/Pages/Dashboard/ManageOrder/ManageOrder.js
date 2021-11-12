import React from 'react';

const ManageOrder = () => {
    return (
        <div>
            <h1>Manage Order</h1>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Package</th>
                        <th scope="col">Address</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {/*  {
                        order?.map((iteam, index) => (<Order
                            key={iteam._id}
                            sl={index}
                            iteam={iteam}
                        > </Order>))
                    } */}

                </tbody>
            </table>
        </div>
    );
};

export default ManageOrder;