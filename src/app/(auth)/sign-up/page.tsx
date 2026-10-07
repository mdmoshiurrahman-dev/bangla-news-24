"use client";
import { signUp } from "@/lib/auth-client";
import Link from "next/link";
import { toast } from "@heroui/react";

const SignUpPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    const data = Object.fromEntries(fromData.entries()) as {
      name: string;
      image: string;
      email: string;
      password: string;
    };

    const { data: resData, error } = await signUp.email({
      name: data.name,
      image: data.image,
      email: data.email,
      password: data.password,
      callbackURL: "/bengali",
    });
    if (resData) {
      toast.success("You have upgraded your plan");
    }
  };

  return (
    <div className="flex items-center my-5 flex-col">
      <form className="w-100 max-w-150" onSubmit={onSubmit}>
        <fieldset className="fieldset rounded-box  p-4 flex flex-col">
          <legend className="text-2xl font-semibold text-[#C72D31] text-center my-2">
            সাইন আপ
          </legend>
          <label className="label">নাম</label>
          <input
            name="name"
            type="text"
            className="input outline-0 w-full focus:border-red-600"
          />
          <label className="label">
            Image<span className="text-gray-400">{`(optional)`}</span>
          </label>
          <input
            name="image"
            type="url"
            className="input  outline-0 w-full focus:border-red-600"
          />
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
        </fieldset>
      </form>
      <p className="text-sm">
        অ্যাকাউন্ট আছে?{" "}
        <Link href={"/sign-in"} className="text-[#C72D31] font-semibold">
          সাইন ইন করুন
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;
