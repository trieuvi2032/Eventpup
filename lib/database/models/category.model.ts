import { Document, Schema, model, models } from "mongoose";

export interface ICategory extends Document {
  map(
    arg0: (category: any) => import("react").JSX.Element
  ): import("react").ReactNode;
  length: number;
  _id: string;
  name: string;
}
const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
});

const Category = models.Category || model("Category", CategorySchema);
