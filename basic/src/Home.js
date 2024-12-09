import React, { useEffect, useState } from "react";
import axios from "axios"
export default function Home()
{
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const name = document.getElementById('name').value
        const email = document.getElementById('mail').value
        const data={name,email}
 const post = await axios.post('http://localhost:8000/addUser',data,{
    headers:{
        "Content-Type":"application/json"
    }
 })
    }
 const [user,setUser] = useState()
    useEffect(()=>{
        const getData= async()=>{
            const response = await axios.get('http://localhost:8000/getUser')
            setUser(response.data.create)
        }
        getData()
    },[user])
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter name" id="name"></input>
                <input type="text" placeholder="Enter Email" id="mail"></input>
                <button type="submit" value="Submit">Submit</button>
            </form>

            { user && user.map((users)=>(
                <p>{users.name}</p>
            ))

            }
        </div>
    )
}