"use client";

import { doCredentialLogin } from "@/app/actions";
import SocialLogin from "@/components/SocialLogin";
import { useRouter } from "next/navigation";
import { useState } from "react";

function LoginForm() {
  const [error, setError] = useState("");

  const router = useRouter();

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const response = await doCredentialLogin(formData);

      if (!!response.error) {
        setError(response.error.message);
      } else {
        router.push("/home");
      }
    } catch (error) {
      setError("Check your credentials");
    }
  }
  return (
    <>
    <div className="text-xl text-red-500">{error}</div>
      <form
        onSubmit={handleFormSubmit}
        className="my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md"
      >
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
          Credential Login
        </button>
      </form>
      <SocialLogin />
    </>
  );
}

export default LoginForm;