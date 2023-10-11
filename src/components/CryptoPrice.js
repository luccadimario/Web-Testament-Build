import {Amplify, API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'


const CryptoPrice = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async() => {
        try {
            setData(data.map((data) =>
                <li>
                    <h1 className="text-gray-600 font-semibold">
                    {data ? (data.code + ": $" + data.rate.toFixed(2)) : <div>Unavailable</div>}
                    </h1>
                </li>
                )
            );
            setLoading(false);
        }
        catch(error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        fetchData();
    }, []);
    if(loading) {
        return(
            <div>
                Loading...
            </div>
        )
    }
    return(
        <div>
            <ul>
                {data}
            </ul>
            
        </div>
    )
}
export default CryptoPrice

