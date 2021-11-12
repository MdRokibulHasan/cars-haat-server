import React from 'react';

const DisplayUserProduct = ({ product }) => {
    const { title, payment, thabnil, discription } = product;
    return (
        <div>
            <div className="col-md-4">
                <div class="card">
                    <img src={thabnil} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-dark">{title}
                        </h5>
                        <div>
                            <span> Price </span> <span > {payment} </span>
                        </div>

                        <div>
                            <span> </span> <span > {discription} </span>
                        </div>


                    </div>
                    <div class="card-footer">

                        <button
                            className="button-read-more text-dark"
                            data-aos="fade-right"
                            data-aos-delay="250"
                        > BUY CAR </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayUserProduct;