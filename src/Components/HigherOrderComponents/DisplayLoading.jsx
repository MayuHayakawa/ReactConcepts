import React, { useState, useEffect } from 'react'
import WithLoading from './WithLoading';

const DisplayLoading = () => {
    const [ data, setData ] = useState("Hello world!")
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [])

    return (
        <>
            <WithLoading data={data} loading={loading} />
        </>
    )
}

export default DisplayLoading