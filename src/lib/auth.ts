import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { Resend } from "resend";

const dbUrl = process.env.MONGO_DB_URL;
if (!dbUrl) {
  throw new Error("database url is not define!");
}
const client = new MongoClient(dbUrl);
const db = client.db("news-bangla-24");
const resend = new Resend(process.env.RESEND_API_KEY);
export const auth = betterAuth({
  socialProviders: {
    google: {
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      clientId: process.env.GOOGLE_CLIENT_ID as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    revokeSessionsOnPasswordReset: true,
    sendResetPassword: async ({ user, url, token }, request) => {
      void resend.emails.send({
        from: "News-Bangla-24 <onboarding@resend.dev>",
        to: user.email,
        subject: "Reset your password",
        html: `
    html
<div
  style="
    background-color: #f4f4f5;
    padding: 40px 20px;
    font-family: Arial, sans-serif;
  "
>
  <div
    style="
      max-width: 500px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 32px;
      border-radius: 10px;
    "
  >
    <h1
      style="
        margin: 0 0 20px;
        font-size: 24px;
        color: #18181b;
      "
    >
      Reset your password
    </h1>

    <p
      style="
        font-size: 16px;
        line-height: 1.6;
        color: #52525b;
      "
    >
      Hello ${user.name || "there"},
    </p>

    <p
      style="
        font-size: 16px;
        line-height: 1.6;
        color: #52525b;
      "
    >
      We received a request to reset your password. Click the button below
      to create a new password.
    </p>

    <a
      href="${url}"
      style="
        display: inline-block;
        margin-top: 10px;
        padding: 12px 24px;
        background-color: #18181b;
        color: #ffffff;
        text-decoration: none;
        border-radius: 6px;
        font-weight: bold;
      "
    >
      Reset Password
    </a>

    <p
      style="
        margin-top: 24px;
        font-size: 14px;
        line-height: 1.5;
        color: #71717a;
      "
    >
      If you didn't request a password reset, you can safely ignore this
      email.
    </p>

    <p
      style="
        margin-top: 24px;
        font-size: 12px;
        color: #a1a1aa;
      "
    >
      If the button doesn't work, copy and paste this link into your
      browser:
    </p>

    <p
      style="
        font-size: 12px;
        color: #71717a;
        word-break: break-all;
      "
    >
      ${url}
    </p>
  </div>
</div>
        `,
      });
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    expiresIn: 5 * 60, // 5 min
    sendVerificationEmail: async ({
      user,
      url,
    }: {
      user: { email: string; name?: string | null };
      url: string;
    }) => {
      void resend.emails.send({
        from: "News-Bangla-24 <onboarding@resend.dev>",
        to: user.email,
        subject: "Verify your email",
        html: `
        <div
  style="
    background-color: #f4f4f5;
    padding: 40px 20px;
    font-family: Arial, sans-serif;
  "
>
  <div
    style="
      max-width: 500px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 32px;
      border-radius: 10px;
    "
  >
    <h1
      style="
        margin: 0 0 20px;
        font-size: 24px;
        color: #18181b;
      "
    >
      Verify your email
    </h1>

    <p
      style="
        font-size: 16px;
        line-height: 1.6;
        color: #52525b;
      "
    >
      Hello ${user.name || "there"},
    </p>

    <p
      style="
        font-size: 16px;
        line-height: 1.6;
        color: #52525b;
      "
    >
      Thank you for signing up for News-Bangla-24. Please click the button below
      to verify your email address and complete your registration.
    </p>

    <a
      href="${url}"
      style="
        display: inline-block;
        margin-top: 10px;
        padding: 12px 24px;
        background-color: #18181b;
        color: #ffffff;
        text-decoration: none;
        border-radius: 6px;
        font-weight: bold;
      "
    >
      Verify Email
    </a>

    <p
      style="
        margin-top: 24px;
        font-size: 14px;
        line-height: 1.5;
        color: #71717a;
      "
    >
      If you did not create an account, you can safely ignore this email.
    </p>

    <p
      style="
        margin-top: 24px;
        font-size: 12px;
        color: #a1a1aa;
      "
    >
      If the button doesn't work, copy and paste this link into your
      browser:
    </p>

    <p
      style="
        font-size: 12px;
        color: #71717a;
        word-break: break-all;
      "
    >
      ${url}
    </p>
  </div>
</div>
        `,
      });
    },
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
