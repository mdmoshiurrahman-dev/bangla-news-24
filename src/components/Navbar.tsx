import Image from "next/image";
import UserInfoAndSignInSignUpLogOutBtn from "./UserInfoAndSignInSignUpLogOutBtn";
import NavigationItems from "./NavigationItems";

const navCategoryRes = async() => {
  const categoryApi = process.env.CATEGORY_API;
  if (!categoryApi) {
    throw new Error("category api is not found");
  }
  const res = await fetch(categoryApi);
  const data = await res.json();
  return data;
};

const Navbar = () => {
 
  const fullDateBangla = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <div className="flex justify-center items-center container mx-auto  p-2 flex-col">
      <div></div>
      <div className="w-full grid grid-cols-3">
        <div></div>
        <div className="flex justify-center">
          <div className="flex gap-2">
            <Image
              src="/logo.webp"
              height="50"
              width="50"
              alt="logo"
              className="p-2"
            />
            <div>
              <p className="text-[#C72D31] text-xl font-semibold">
                Bangla News 24
              </p>
              <p className="text-gray-600 text-[12px]">{fullDateBangla}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 mr-2">
          <UserInfoAndSignInSignUpLogOutBtn />
        </div>
      </div>
      <div className="my-2">
        <NavigationItems prop = {navCategoryRes()} />
      </div>
    </div>
  );
};

export default Navbar;
