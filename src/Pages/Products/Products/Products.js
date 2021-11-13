import React, { useEffect, useState } from 'react';
import DisplayUserProduct from '../DisplayUserProduct/DisplayUserProduct';


const Products = () => {
    const [values, setValues] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setValues(data));
    }, []);


    return (

        <div className="container pt-5">
            <h3 className="text-dark text-center"> Products </h3>
            <div className="row">


                {
                    values?.map(product => (<DisplayUserProduct
                        key={product._id}
                        product={product}

                    ></DisplayUserProduct>))

                }
            </div>
        </div>
    );


};

export default Products;