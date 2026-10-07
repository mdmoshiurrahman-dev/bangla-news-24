import PasswordResetPage from "@/components/ResetPassword";
import { Suspense } from "react";

const Page = () => {
  return (
    <>
      <Suspense fallback = {'Loading...'}>
        <PasswordResetPage />
      </Suspense>
    </>
  );
};

export default Page;
