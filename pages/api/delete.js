import {connectToDatabase} from "../../lib/mongodb"
import {ObjectId} from 'mongodb'

export default async function handler(req,res){
    const id = req.query
    const {db} = await connectToDatabase();
    const collection = await db.collection("users")
console.log(id);
   const result= await collection.deleteOne({_id:ObjectId(id.id)})
   console.log(result);
    res.json(result)
}
