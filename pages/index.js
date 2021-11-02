import Head from 'next/head'
import { useState,useEffect } from 'react'
import axios from 'axios';
export default function Home() {
  const [user,setUser]=useState();

  useEffect(()=>{
    fetch('/api/userapi')
    .then(res=>res.json())
    .then(data=>{
     setUser(data);
    })
  },[])
  const data ={
    name:'Aman Ullad',
    email:'aman@gmail.com'
}
const handlePost= async ()=>{
  console.log("clicked");
       await axios.post('/api/adduser', data)
        .then(res => {
          console.log(res);
        })
}

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
        <div>Main Section {user?.length}</div>
        <button onClick={handlePost}> Add</button>
      </main>

      <footer>
       
      </footer>

    </div>
  )
}


