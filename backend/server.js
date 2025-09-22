import express from "express";

const app = express();
app.use(express.json())

app.get("/api/user", (req, res)=>{
    try{
        const data = req.body;
        res.send(data);
        console.log(data);
        res.status(200).json({"The request reaached successfully":data})
    }catch(err){
        console.log("message: "+err.message);
    }
    
})

app.listen(5000, ()=>{
    console.log("The server is listening to port http://localhost:5000")
})
