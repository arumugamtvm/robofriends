import React from "react";
import { useParams } from 'react-router';

const Welcome = () => {
    const { name } = useParams()
    return (<h1>Welcome {name}</h1>)
}

export default Welcome