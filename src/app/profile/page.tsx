"use client";

import {
  requestPasswordReset,
  updateUser,
  useSession,
} from "@/lib/auth-client";
import Image from "next/image";

const ProfilePage = () => {
  const { data, isPending } = useSession();
  const createdAt = data?.user.createdAt
    ? new Date(data.user.createdAt).toLocaleDateString()
    : "N/A";
  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    const data = Object.fromEntries(fromData.entries());
    await updateUser({
      ...data,
    });
  };
  const passwordResetFrom = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    const data = Object.fromEntries(fromData.entries()) as { email: string };
    await requestPasswordReset({
      ...data,
      redirectTo: "/password-reset",
    });
  };
  return (
    <div className="flex flex-col m-5 gap-2">
      <div className="flex gap-2">
        <div
          className={`${isPending ? "bg-gray-300" : ""} rounded-xl overflow-hidden h-50 w-50`}
        >
          <Image
            className="rounded-xl object-cover h-full w-full"
            src={data?.user.image as string}
            height={200}
            width={200}
            alt="user_logo"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl">{data?.user.name}</p>
            <p className="font-semibold text-gray-500">{data?.user.email}</p>
            <p className="text-sm">Last Update: {createdAt}</p>
          </div>
          <div>
            <form className="w-100 max-w-150" onSubmit={passwordResetFrom}>
              <fieldset className="fieldset rounded-box  flex flex-col">
                <input
                  placeholder="Enter your email"
                  name="email"
                  type="email"
                  className="input  outline-0 w-full focus:border-red-600"
                />
              </fieldset>
              <button
                type="submit"
                className="btn bg-red-500 text-white font-semibold"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t mt-5 flex justify-between gap-2">
        <div className="p-5">
          <h2 className="text-xl font-semibold pb-3">Update Profile</h2>
          <form className="w-100 max-w-150" onSubmit={formSubmit}>
            <fieldset className="fieldset rounded-box  flex flex-col">
              <label className="label">Name</label>
              <input
                placeholder="Json pangku"
                name="name"
                type="text"
                className="input  outline-0 w-full focus:border-red-600"
              />
              <label className="label">Image</label>
              <input
                placeholder="https://www.sapri-image.com"
                name="image"
                type="url"
                className="input outline-0 w-full focus:border-red-600"
              />
              <button
                type="submit"
                className="btn bg-[#C72D31] text-white mt-4"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
        {/* <div className="border-l">hello</div> */}
      </div>
    </div>
  );
};

export default ProfilePage;
