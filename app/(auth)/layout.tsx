import { ReactNode } from "react";
import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (isUserAuthenticated) redirect("/");
  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;

// This layout applies only to routes inside the (auth) group (like /login or /signup). It would typically contain a minimal UI, like a centered card or form, and no main navigation/sidebar.
