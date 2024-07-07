import AuthForm from "@/components/AuthForm";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/action/user.action";

const SignUp = async () => {
  const currentUser = await getCurrentUser();
  return (
    <section className="flex-center size-full max-sm:px-6">
      {currentUser ? redirect("/") : <AuthForm type="sign-up" />}
    </section>
  );
};

export default SignUp;
