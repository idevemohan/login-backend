const express= require("express")
const cors = require("cors")

const app=express()

// const allowedOrigins = [ 'https://your-frontend-domain.onrender.com' ];

// app.use(cors({
//   origin: (origin, callback) => {
//     if (!origin || allowedOrigins.includes(origin)) {
//       return callback(null, true);
//     }
//     callback(new Error('Not allowed by CORS'));
//   },
//   methods: ['GET','POST','PUT','DELETE','OPTIONS'],
//   allowedHeaders: ['Content-Type','Authorization'],
//   credentials: true
// }))

app.use(cors())


app.use(express.json())

let users = []


app.post("/signup",function(req,res){
     
    const {email,password} = req.body

    const existingUser = users.find( u => u.email === email)
    if(existingUser)
    {
        return res.status(400).json({message: "User Already Exists"})
    }

    users.push({email,password})
    
    console.log("users:",users)

    res.status(201).json({message:"You are Registered Successfully..."})

})




app.post("/signin",function(req,res){

    const {email,password} = req.body
 
    console.log("Received data:",email,password)

    const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(400).json({ message: "User not found. Please register first." });
  }

  if (user.password !== password) {
    return res.status(401).json({ message: "Invalid password." });
  }

    if( email && password)
    {
        res.status(200).json({message: "You are Signed in Successfully..."})
    }
    else
    {
        res.status(400).json({message:"Sign in Failed !!"})
    }

})

app.listen(3000,function(){
    console.log("Server Started...")
})
