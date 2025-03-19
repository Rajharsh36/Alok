const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files (CSS, images, etc.) from the current directory
app.use(express.static(__dirname));

// Serve the portfolio HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/img", (req, res) => {
    res.sendFile(path.join(__dirname, "img.jpg"));
});
app.get("/icon", (req, res) => {
    res.sendFile(path.join(__dirname, "ic.png"));
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
