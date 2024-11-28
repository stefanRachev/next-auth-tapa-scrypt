"use client";

import { useRouter } from "next/navigation";
import SocialLogin from "./SocialLogin";


const RegistrationForm = () => {

  const router = useRouter();

  async function handlerSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");

      const response = await fetch("/api/register", {
        method:"POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      response.status === 201 && router.push("/")


    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <form
        onSubmit={handlerSubmit}
        className="my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md"
      >
        <div className="my-2 w-full flex flex-col items-start">
          <label htmlFor="name" className="mb-1 text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border p-2 w-full border-gray-500 rounded"
          />
        </div>
        <div className="my-2 w-full flex flex-col items-start">
          <label htmlFor="email" className="mb-1 text-sm font-medium">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border p-2 w-full border-gray-500 rounded"
          />
        </div>
        <div className="my-2 w-full flex flex-col items-start">
          <label htmlFor="password" className="mb-1 text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border p-2 w-full border-gray-500 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-300 mt-4 rounded flex justify-center items-center w-36"
        >
          Register
        </button>
      </form>
      <SocialLogin />
    </>
  );
};

export default RegistrationForm;
