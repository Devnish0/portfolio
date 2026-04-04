import mongoose from "mongoose";

const statsSchema = new mongoose.Schema({
  totalVisits: {
    type: Number,
    default: 0,
  },
  uniqueVisitors: {
    type: Number,
    default: 0,
  },
});

export default mongoose.models.Stats || mongoose.model("Stats", statsSchema);
