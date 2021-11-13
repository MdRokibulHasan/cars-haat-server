import React, { useEffect, useState } from 'react';

const ShowFeedback = () => {
    const [values, setValues] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setValues(data));
    }, []);


    return (
        <div>

        </div>
    );
};

export default ShowFeedback;