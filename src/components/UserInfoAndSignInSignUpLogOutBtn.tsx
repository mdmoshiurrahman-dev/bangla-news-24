"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaRegUser } from "react-icons/fa";

const UserInfoAndSignInSignUpLogOutBtn = () => {
  const route = useRouter();
  const { data: session, isPending } = useSession();
  const userImage = session?.user.image;
  const userName = session?.user.name;
  const handelSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          route.push("/sign-in");
        },
      },
    });
  };

  return (
    <>
      {session ? (
        <>
          <Link href={'/profile'}>
          <div className="cursor-pointer px-1 flex gap-2  items-center  transition duration-200 hover:bg-gray-200 rounded-lg">
            <div className="border-2 border-gray-500 rounded-full flex items-center gap-2 p-0.5">
              {userImage ? (
                <Image
                  src={userImage}
                  height="35"
                  width="35"
                  alt="user-profile"
                  className="rounded-full"
                />
              ) : (
                <FaRegUser className="text-[23px]" />
              )}
            </div>
            <div>
              <p className="font-bold text-[16px]">{userName}</p>
            </div>
          </div>
          </Link>
          <button className="btn border-2 border-gray-500" onClick={handelSignOut}>সাইন আউট</button>
        </>
      ) : (
        <>
          <Link href={"/sign-in"}>
            <button className="btn bg-transparent border-0">সাইন ইন</button>
          </Link>
          <Link href={"/sign-up"}>
            <button className="btn bg-[#C72D31] text-white">সাইন আপ</button>
          </Link>
        </>
      )}
    </>
  );
};

export default UserInfoAndSignInSignUpLogOutBtn;
