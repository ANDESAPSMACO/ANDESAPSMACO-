const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ======================
// HOME ROUTE
// ======================
app.get("/", (req, res) => {
    res.send("ANDESAPS-MAC SERVER IS RUNNING 🚀");
});

// ======================
// WHATSAPP WEBHOOK (READY FOR TWILIO LATER)
// ======================
app.post("/whatsapp", (req, res) => {

    let message = req.body.Body || "empty";

    console.log("Incoming WhatsApp message:", message);

    let reply = "";

    if (message.toLowerCase().includes("donate")) {
        reply = "🙏 Thank you for your interest. Send donation via Airtel Money +243 975 143 108";
    } 
    else if (message.toLowerCase().includes("join")) {
        reply = "👥 Welcome to ANDESAPS-MAC. Send your name to join the association.";
    } 
    else {
        reply = "🏛 ANDESAPS-MAC NGO: Type 'donate' or 'join' for info.";
    }

    res.json({
        reply: reply
    });
});

// ======================
// TRACKING ROUTE (FOR WEBSITE PAGES)
// ======================
app.post("/track", (req, res) => {

    console.log("Page visited:", req.body);

    res.json({ status: "tracked" });
});

// ======================
// START SERVER
// ======================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
});