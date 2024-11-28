import { createUser } from "@/queries/users";
import { NextResponse } from "next/server";



export const POST = async (request) => {
  const { name, email, password } = await request.json();

  console.log(name, email, password);

  return new NextResponse("User has been created", {
    status: 201,
  });
};
