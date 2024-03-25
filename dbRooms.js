import mongoose from "mongoose";
// database schema
// outline the structure of the Rooms inside the db

// this is how our db fields are gonna be built
const roomSchema = mongoose.Schema({
  name: String,
  roomType: String,
  price: Number,
});

// export the whole schema, define collection name, and pass in the RoomSchema
// in nosql Database: collection > [documents] > collection > [documents] > ....
export default mongoose.model("rooms", roomSchema);
