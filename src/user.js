

import React, { useEffect, useState } from 'react';

export default function User (props) {

    const [user, setUser] = useState(null); //create a state with two properties, variable and method to udpate the state


    async function fetchUserData(id) {
        const response = await fetch('http://localhost:8080/' + id); //making a call to http://localhost:3000/id
        console.log(response);
        setUser(await response.json());
    }

    useEffect(() => {
        fetchUserData(props.id); //calling fetchuserData to fetch API call -> http://localhost:3000/id
    }, [props.id]); 

    if(!user) {
        return "...loading data";
    }

    return (
        <details>
            <summary>{ user.name }</summary>
            <strong>{ user.age }</strong>
            <br/>
            lives in { user.address }

        </details>
    );
} 