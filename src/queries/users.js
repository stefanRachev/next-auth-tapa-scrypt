import { User } from "@/model/User";

export async function createUser(user) {
  try{
    await User.create(user);
  } catch(e){
    throw new Error(e)
  }
}