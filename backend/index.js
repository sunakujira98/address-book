import express from "express";
import Address from "./models/address.js";
import connectDB from "./config/db.js";

connectDB();

const app = express();
app.use(express.json());

app.get("/api/address", async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.page) || 1;

  const count = await Address.countDocuments();
  const address = await Address.find()
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ data: address, page, pages: Math.ceil(count / pageSize) });
});

app.post("/api/address", async (req, res) => {
  console.log("req body", req.body);
  const { name, street, unitNumber, phone } = req.body;

  const address = await Address.create({
    name,
    street,
    unitNumber,
    phone,
  });

  if (address) {
    res.status(201).json({
      _id: address.id,
      name: address.name,
      street: address.street,
      unitNumber: address.unitNumber,
      phone: address.phone,
    });
  } else {
    res.status(400);
    throw new Error("Invalid address");
  }
});

app.listen(5000, console.log("Server running on port 5000"));
