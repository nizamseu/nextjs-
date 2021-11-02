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


const handledelete= async (id)=>{
  console.log("clicked",id);
       await axios.delete(`/api/delete/?id=${id}`)
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

        {
          user&& user.map(item=><div>
              <h1>{item.name}</h1>
              <h3>{item.email}</h3>
              <button onClick={()=>handledelete(item._id)}> Delete</button>
          </div>)
        }
       
      </main>

      <footer>
       
      </footer>

    </div>
  )
}


