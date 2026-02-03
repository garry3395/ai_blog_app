import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/mongodb.js'

import adminRouter from './routes/admin.route.js'
import blogRouter from './routes/blog.routes.js'
dotenv.config()
const app= express()
app.use(cookieParser())
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({extended:true}))
app.use(cors({
  origin: [
    process.env.FRONTEND_URL,
    "http://localhost:5173",
    "https://ai-blog-app-q77x.onrender.com"
  ],
  credentials: true
}))


connectDB()
app.get('/',(req,res)=>{
  res.send('welcome men')
})
app.use('/api/admin',adminRouter)
app.use('/api/blog',blogRouter)
const PORT=process.env.PORT||3000
app.listen(PORT,()=>{
  console.log(`our server is running on http://localhost:${PORT}`)
})
export default app;
