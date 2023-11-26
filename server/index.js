import express from "express";
import mongoose from "mongoose";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
