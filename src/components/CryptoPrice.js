import {Amplify, API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'

const myAPI = "getlive"
const path = '/live'
const CryptoPrice = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async() => {
        try {
            API.get(myAPI, path)
            .then(response => {
                console.log(response)
            
                setData(response.map((response) =>
                    <li>
                        <h1 className="text-gray-600 font-semibold">
                        {response ? (response.code + ": $" + response.rate.toFixed(2)) : <div>Unavailable</div>}
                        </h1>
                    </li>
                    )
                );
            })
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

