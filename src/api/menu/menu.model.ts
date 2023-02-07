import { Schema, model } from 'mongoose';

export interface MenuDocument extends Document{
  category: String;
  name: String;
  description: String;
  image: String;
  price: String;
  ceatedAT: Date;
  updateAT: Date;
}

const MenuSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  }
}, {
  timestamps: true,
  versionKey: false,
});

const Menu = model<MenuDocument>('Menu', MenuSchema);

export default Menu;
