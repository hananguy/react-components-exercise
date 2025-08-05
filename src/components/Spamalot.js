import Spam from "./Spam";
import React, { Component } from 'react';


const Spamalot =()=>{
    const result = []
    for(let i = 0; i < 500; i++)
    {
        result.push(<Spam/>)
    }
    
    return result;
}

export default Spamalot

