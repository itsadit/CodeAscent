import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;

// This layout applies only to routes inside the (auth) group (like /login or /signup). It would typically contain a minimal UI, like a centered card or form, and no main navigation/sidebar.
