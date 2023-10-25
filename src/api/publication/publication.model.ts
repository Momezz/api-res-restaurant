import { Schema, model } from "mongoose";

export interface PublicationDocument extends Document {
  publicationTitle: String;
  image: String;
  description: string;
}

const publicationSchema = new Schema({
  publicationTitle: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
  versionKey: false,
});

const Publication = model<PublicationDocument>('Publication', publicationSchema);

export default Publication;
