import React, { useEffect, useState } from 'react';

const UserShowReview = () => {
    const [order, setOrder] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-12">
                    <div class="card text-center">
                        <div class="card-body">
                            <h4>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </h4>

                            <p class="card-text text-center">Customer Support</p>

                            <div>
                                <p className="text-center"> Customar says About your services </p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserShowReview;