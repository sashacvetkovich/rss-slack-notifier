import mongoose, { Document, Schema } from "mongoose";

export interface IItem extends Document {
  title: string;
  link: string;
  date: string;
}

const RssSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    rssId: { type: String, required: true },
    date: { type: String, required: true },
  },
  { collection: "rssitems" }
);

const RssItem = mongoose.model<IItem>("RssItem", RssSchema);

export default RssItem;
