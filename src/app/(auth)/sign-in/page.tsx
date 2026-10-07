"use client";

import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SignInPagePage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    const data = Object.fromEntries(fromData.entries()) as {
      email: string;
      password: string;
    };
    await signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/bengali",
    });
  };
  const handelSignInWithGoogle = async () => {
    await signIn.social({
      provider: "google",
    });
  };
  const handelSignInWithGithub = async () => {
    await signIn.social({
      provider: "github",
    });
  };
  return (
    <div className="flex items-center my-5 flex-col">
      <form className="w-100 max-w-150" onSubmit={onSubmit}>
        <fieldset className="fieldset rounded-box  p-4 flex flex-col">
          <legend className="text-2xl font-semibold text-[#C72D31] text-center my-2">
            সাইন আপ
          </legend>
          <label className="label">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input  outline-0 w-full focus:border-red-600"
          />
          <label className="label">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input outline-0 w-full focus:border-red-600"
          />
          <button type="submit" className="btn bg-[#C72D31] text-white mt-4">
            সাইন আপ করুন
          </button>
          <div className="border-t-2 border-gray-300 flex flex-col pt-4 mt-3 gap-2">
            <button
              className="btn bg-[#4285F4] text-white"
              onClick={handelSignInWithGoogle}
            >
              {" "}
              <FaGoogle className="text-[20px]" /> Google
            </button>
            <button
              className="btn bg-[#24292E] text-white"
              onClick={handelSignInWithGithub}
            >
              {" "}
              <FaGithub className="text-[20px]" /> Github
            </button>
          </div>
        </fieldset>
      </form>
      <p className="text-sm">
        {" "}
        অ্যাকাউন্ট নেই?
        <Link href={"/sign-up"} className="text-[#C72D31] font-semibold">
          সাইন আপ করুন
        </Link>
      </p>
    </div>
  );
};

export default SignInPagePage;
