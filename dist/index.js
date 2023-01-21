"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//configurando the .env file
dotenv_1.default.config();
//Create app
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
//routes
app.get('/', (req, res) => {
    const data = {
        data: {
            message: "Goodbye, world"
        }
    };
    res.status(200).send(data);
});
app.get('/hello', (req, res) => {
    let name = req.query;
    if (name.nombre == undefined) {
        name.nombre = 'anónimo';
    }
    const data = {
        data: {
            message: `Hola, ${name.nombre}`
        }
    };
    res.status(200).send(data);
});
//runing app
app.listen(port, () => console.log("running on http://localhost:" + port));
//# sourceMappingURL=index.js.map