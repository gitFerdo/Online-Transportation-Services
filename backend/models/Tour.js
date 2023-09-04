import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    v_name: {
      type: String,
      required: true,
      unique: true,
    },
    v_type: {
      type: String,
      required: true,
    },
    passenger: {
      type: String,
      required: true,
    },
    gear_shift: {
      type: String,
      required: true,
    },
    baggage: {
      type: Number,
      required: true,
    },
    door: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
    },
    features: {
      type: [String],
    },

    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Tour", tourSchema);
