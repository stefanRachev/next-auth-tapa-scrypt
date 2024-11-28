import { NextResponse } from "next/server";
import { createUser } from "@/queries/users";
import { dbConnect } from "@/lib/mongo";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  console.log(name, email, password);

  await dbConnect();

  const newUser = {
    name,
    password,
    email,
  };

  try {
    await createUser(newUser);
    return new NextResponse("User has been created", { status: 201 });
  } catch (err) {
    console.error("Error creating user:", err.message);

    
    if (err.message === "User with this email already exists") {
      return new NextResponse(
        JSON.stringify({ message: err.message }),
        { status: 400 }
      );
    }

   
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }

};
