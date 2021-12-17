import React, { useEffect, useState } from 'react'
import axios from 'axios';


const AboutComponent = () => {

    const intialState = {
        id: '',
        userId: '',
        title: '',
        completed: true,
    }

    const [about, setAbout] = useState(intialState);
    console.log(about);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((res) => {
                setAbout(res.data[0]);
            }).catch(error => {
                console.log(error); 
            })
    }, []);

    return (
        <>
            <h1>About</h1>
            <p>{about.title}</p>
            <p>{about.userId}</p>
        </>
    )
}

export default AboutComponent;