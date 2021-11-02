import {connectToDatabase} from "../../lib/mongodb"

export default async function handler(req,res){
   const data =req.body;
    const {db} = await connectToDatabase();
    const collection = await db.collection("users")
    const result = await collection.insertOne(data)
    res.json(data)
}

// app.post('/addUser',async(req,res)=>{
//     const data =req.body;
//     const result = await collection.insertOne(data)
//    res.json(result)
// })