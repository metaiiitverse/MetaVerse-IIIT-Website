const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    bname: String,
    email: { type: String, unique: true },
    password: String,
  },
  {
    collection: "MetaDay2",
  }
);

mongoose.model("MetaDay2", UserDetailsScehma);
