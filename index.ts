import express , { Express, Request, Response } from "express";
import dotenv from 'dotenv';


//configurando the .env file
dotenv.config();

//Create app

const app: Express = express();
const port: string | number = process.env.PORT || 8000;

//routes

app.get('/',(req:Request, res:Response)=>{
	const data:object = {
		data:{
			message: "Goodbye, world"
		}
	}
	res.status(200).send(data);
})

app.get('/hello',(req:Request, res:Response)=>{
	let name = req.query;
	if(name.nombre == undefined){
		name.nombre = 'anónimo'
;	}
	const data:object = {
		data:{
			message: `Hola, ${name.nombre}`;
		}
	}
	res.status(200).send(data);

})


//runing app

app.listen(port , () => console.log("running on http://localhost:" + port))
