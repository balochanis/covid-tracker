
import React from 'react'
import { useSelector } from 'react-redux';
import {useState, useEffect} from "react";
import axios from 'axios';

export default function Home() {
    const [mydata, setmydata] = useState([])
    let state = useSelector(state => state);
     useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    axios.get('https://api.covidtracking.com/v1/states/current.json')
    .then(function (response) {
        
      setmydata(response)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    })
  },[]);

    return (
        <div>
         {
         mydata ? mydata.data.map((e,i)=>{
           return (
             <h1 key={i}>
               {e.date}

             </h1>
           )
         })

        :""}
        </div>
    )
}
