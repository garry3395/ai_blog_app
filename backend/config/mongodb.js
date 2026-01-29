import mongoose from 'mongoose' 
const connectDB=async ()=>{
  try {
    await  mongoose.connect(process.env.MONGO_URL)
     console.log("mongodb connection successfully integrated")

  } catch (error) {
    console.log(`the error is ${error}`)
    
  }
}
export default connectDB