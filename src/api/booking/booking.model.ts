import { Schema, model, Document } from 'mongoose';

export interface BookingDocument extends Document {
  reservationDate: Date,
  reservationTime: Date,
  numberPeople: Number,
}

const BookingSchema = new Schema({
  idUser: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  reservationDate: {
    type: Date,
    required: true,
  },
  reservationTime: {
    type: Date,
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
