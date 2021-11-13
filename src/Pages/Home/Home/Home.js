import React from 'react';
import Advertise from '../../Advertise/Advertise';
import UserReview from '../../Dashboard/UserReview/UserReview';
import Products from '../../Products/Products/Products';
import HomeBanner from '../HomeBanner/HomeBanner';
import LatestNews from '../LatestNews/LatestNews';

const Home = () => {
    return (
        <div>

            <HomeBanner></HomeBanner>

            <div className="container">
                <h1 className="text-center">Our Service</h1>
                <div className="d-flex m-3 g-3">
                    <div class="card text-center">
                        <div class="card-header">
                            Featured
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>

                    </div>
                    <div class="card text-center">
                        <div class="card-header">
                            Featured
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>

                    </div>
                </div>

            </div>
            <Products></Products>

            <LatestNews></LatestNews>
            <div>
                <h1>Ours Costomer Feedback</h1>
                <UserReview></UserReview>
            </div>
        </div>
    );
};

export default Home;