import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="signup-wrapper">
        <SignUp />
    </div>
  );
}
