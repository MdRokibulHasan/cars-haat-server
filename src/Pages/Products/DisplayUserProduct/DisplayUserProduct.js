import React from 'react';
import { useHistory } from 'react-router-dom';

const DisplayUserProduct = ({ product }) => {
    const history = useHistory();
    const { _id, title, payment, thabnil, discription } = product;
    const handleDetails = (_id) => {
        const uri = `/buyproducts/${_id}`


        history.push(uri);
    }
    return (

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
                        onClick={() => handleDetails(_id)}
                        data-aos-delay="250"
                    > BUY CAR </button>
                </div>
            </div>
        </div>

    );
};

export default DisplayUserProduct;