import React, { useState } from "react";
import Axios from "axios";

function PostForm(){
    const url ="http://localhost:3030/api/v1/users"
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        location: ""
    })
    function submitInsert(e){
        e.preventDefault();
        Axios.post(url, {
            firstname: data.firstname,
            lastname: data.lastname,
            location: data.location
        }).then(res => {
            console.log("FE Successfully Inserted")
            console.log(res.data)
        })
    }
    function submitGet(e){
        e.preventDefault();
        Axios.get(url).then(res => {
            console.log("Here is the Data")
            console.log(res.data)
        })
    }
    function handleSubmit(e){
        const newData={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }
    return (
        <div>
            <div>
                <form onSubmit={(e)=>submitInsert(e)}>
                    <input onChange={(e)=>handleSubmit(e)} id="firstname" value={data.firstname} placeholder="firstname" type="text"></input>
                    <input onChange={(e)=>handleSubmit(e)} id="lastname" value={data.lastname} placeholder="lastname" type="text"></input>
                    <input onChange={(e)=>handleSubmit(e)} id="location" value={data.location} placeholder="location" type="text"></input>
                    <button>Submit</button>
                </form>
            </div>
            <div>
                <form onSubmit={(e)=>submitGet(e)}>
                    <button>Get Data in Console</button>
                </form>
            </div>
        </div>
    );
}

export default PostForm;