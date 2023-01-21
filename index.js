//require lib
const express = require('express');
const dotenv = require('dotenv');

//read form file .dotenv
dotenv.config();
const PORT = process.env.PORT || 8000;
//iniciando la instancia de express
const app = express();


app.get('/', (req,res) =>{
	res.send('PRactica echa por joan');
})


//start app
app.listen(PORT, ()=>{
	console.log(`app running on http://localhost:${PORT}`);
})
