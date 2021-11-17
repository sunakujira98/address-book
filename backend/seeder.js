import mongoose from "mongoose";
import connectDB from "./config/db.js";
import Address from "./models/address.js";
import addressSeeder from "./seed/addressSeeder.js";

connectDB();

const importData = async () => {
  try {
    await Address.deleteMany();

    await Address.insertMany(addressSeeder);

    console.log("Data imported!");
  } catch (error) {
    console.error(`Error when importing data ${error}`);
    process.exit(1);
  }
};

importData();
