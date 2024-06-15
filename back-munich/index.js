const express=require ("express");
const morgan= require ("morgan");
const database=require("./database");



const app=express();
app.set("port",4000);
app.listen(app.get("port"));
console.log("conexion establecida al puerto "+app.get("port"));


app.set(morgan("dev"));
app.use(express.json());


app.get("/productos",async(req,res)=>{ 
        const connection = await database.getConnection();
        const result = await connection.query("SELECT * FROM tbgaleria");
        res.json(result);
});