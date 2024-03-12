import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    publicationYear: { type: Date, required: true },
    gender: { type: String, required: true },
    isFavorite: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Book", BookSchema);
