import mongoose, { Document, Schema } from "mongoose";

export interface DbRssItem extends Document {
  title: string;
  rssId: string;
  createdAt: Date;
}

const RssSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    rssId: { type: String, required: true, unique: true },
    createdAt: { type: Date, required: true },
  },
  { collection: "rssitems" }
);

const RssItem = mongoose.model<DbRssItem>("RssItem", RssSchema);

export default RssItem;
