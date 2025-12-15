const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const dbUrl = "mongodb+srv://tavish:VpeW1FrUNF1ci1pF@cluster0.t7mza.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main()
  .then(() => console.log("connected to DB"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});

  const ownerId = new mongoose.Types.ObjectId("652d0081ae547c5d37e56b5f");

  initData.data = initData.data.map(obj => ({
    ...obj,
    owner: ownerId
  }));

  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();