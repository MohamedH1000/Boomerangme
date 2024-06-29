import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
  id: string;
  firstname: string;
  lastname: string;
  companyName: string;
  phoneNumber?: number;
  Email?: string;
  password: string;
  joinedAt: Date;
}

const UserSchema = new Schema({
  id: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true, unique: true },
  companyName: { type: String, required: true },
  phoneNumber: { type: String, unique: true },
  Email: { type: String, required: true },
  password: { type: String, required: true },
  joinedAt: { type: Date, default: Date.now },
});

const User = models.User || model("User", UserSchema);

export default User;
