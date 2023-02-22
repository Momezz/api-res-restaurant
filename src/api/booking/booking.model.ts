import { Schema, model, Document, ObjectId } from 'mongoose';

export interface BookingDocument extends Document {
  id: String,
  name: String,
  reservationDate: Date,
  reservationTime: String,
  numberPeople: Number,
}

const BookingSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  reservationDate: {
    type: Date,
    required: true,
  },
  reservationTime: {
    type: String,
    required: true,
  },
  numberPeople: {
    type: Number,
    required: true,
  },
},{
  timestamps: true,
  versionKey: false,
});

const Booking = model<BookingDocument>('Booking', BookingSchema);

export default Booking;
