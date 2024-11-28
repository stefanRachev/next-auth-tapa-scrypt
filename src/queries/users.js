import { User } from "@/model/User";
import bcrypt from "bcryptjs";

export async function createUser(user) {
  try {
    if (!user.email || !user.password) {
      throw new Error("Email and password are required");
    }

    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      
      throw new Error("User with this email already exists");
    }
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const newUser = new User({
      ...user,
      password: hashedPassword,
    });
    await newUser.save();
  } catch (e) {
    console.error("Error creating user:", e);
    throw new Error(e.message);
  }
}
