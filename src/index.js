const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/status", (req, res) => {
  res.status(200).json({
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.post("/process", (req, res) => {
  const payload = req.body;

  if (!payload || Object.keys(payload).length === 0) {
    return res.status(400).json({ error: "Invalid payload" });
  }

  // Simulated processing
  res.status(200).json({
    received: payload,
    processedAt: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});
