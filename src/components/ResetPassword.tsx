"use client";
import { resetPassword } from "@/lib/auth-client";
import { useSearchParams } from "next/navigation";

const PasswordResetPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") as string
  const handelPasswordReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    const data = Object.fromEntries(fromData.entries()) as {
      newPassword: string;
      conformPassword: string;
    };
    if (data.newPassword === data.conformPassword) {
      await resetPassword({
        newPassword: data.newPassword,
        token: token,
      });
    } else {
      alert("Password is not matched");
    }
  };
  return (
    <div className="flex justify-center mt-6">
      <form className="w-100 max-w-150" onSubmit={handelPasswordReset}>
        <fieldset className="fieldset rounded-box  flex flex-col">
          <label className="label">New Password</label>
          <input
            name="newPassword"
            type="password"
            className="input  outline-0 w-full focus:border-red-600"
          />
          <label className="label">Conform Password</label>
          <input
            name="conformPassword"
            type="password"
            className="input  outline-0 w-full focus:border-red-600"
          />
          <button type="submit" className="btn bg-[#C72D31] text-white mt-4">
            Reset
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default PasswordResetPage;
