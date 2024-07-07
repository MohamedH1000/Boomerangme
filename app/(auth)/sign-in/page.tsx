import AuthForm from "@/components/AuthForm";
import { getCurrentUser } from "@/lib/action/user.action";
import { redirect } from "next/navigation";

const SignIn = async () => {
  const currentUser = await getCurrentUser();
  // console.log(currentUser);
  return (
    <section className="flex-center size-full max-sm:px-6">
      {currentUser ? redirect("/") : <AuthForm type="sign-in" />}
    </section>
  );
};

export default SignIn;
