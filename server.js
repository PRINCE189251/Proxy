const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;


// Home route
app.get("/", (req, res) => {
    res.json({
        message: "AI Hub Backend is running 🚀"
    });
});


// Browser page API example
app.get("/api/browser", (req, res) => {

    res.json({
        title: "AI Hub Browser",
        message: "Browser backend connected successfully"
    });

});


// AI Chat API placeholder
app.post("/api/chat", (req,res)=>{

    const userMessage = req.body.message;

    res.json({
        reply: `You said: ${userMessage}`
    });

});


// Start server
app.listen(PORT, ()=>{

    console.log(
        `Server running on port ${PORT}`
    );

});
