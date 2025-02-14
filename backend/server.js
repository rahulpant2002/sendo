const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
 
const app = express();
const PORT = 5000;
 
// Middleware
app.use(cors());
app.use(bodyParser.json());
 
// CSV File Path
const csvFilePath = path.join(__dirname, "contact_data.csv");
 
// Ensure CSV file exists with headers
if (!fs.existsSync(csvFilePath)) {
    fs.writeFileSync(csvFilePath, "fullName,mobileNo,company,Date\n");
}
 
// Handle form submission
app.post("/submit", (req, res) => {
    const { fullName, mobileNo, from, to, type, company, weight, email } = req.body;

    if (!fullName || !mobileNo || !company || !email || !from || !to || !type || !weight) {
        return res.status(400).json({ error: "All fields are required" });
    }
 
    const entry = `"${fullName}","${mobileNo}","${from}","${to}","${type}","${company}","${weight}","${email}","${new Date().toISOString()}"\n`;
 
    fs.appendFile(csvFilePath, entry, (err) => {
        if (err) {
            return res.status(500).json({ error: "Error saving data" });
        }
        res.json({ success: "Data saved successfully!" });
    });
});
 
// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});