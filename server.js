const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Anti-Theft Tracker Server is running.");
});

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    service: "anti-theft-tracker"
  });
});

app.post("/api/location", (req, res) => {
  console.log("Location received:", req.body);

  res.json({
    ok: true,
    message: "Location received"
  });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
