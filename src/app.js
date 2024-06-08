import * as myModule from "./index.js";
import express from "express"
import path from "path"
import { fileURLToPath } from 'url';

const app = express();

// Because i wanted to set this file as a module the variable __dirname doesnt exist so a had to create one
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Set the files that the user will have access wich are the ones in the public folder
app.use(express.static(path.join(__dirname, "../public")));

const port = 3000;

// Initiates the server at the port defined
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

// The initial page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
})

// The request made with app.get that returns the data from the server
app.get("/AmazonResult/:keyword", async (req, res) => {
    // Gets the data from axios amazon page
    const data = await myModule.getAmazonResultsWithKeyword(req.params.keyword);
    // Turns into a JSON with the data that i will use
    const response = myModule.getElementsWithJSDOM(data);
    // Sends back to the request
    res.send(response);
})