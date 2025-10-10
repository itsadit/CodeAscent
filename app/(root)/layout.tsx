import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default RootLayout;

// This layout applies only to routes inside the (root) group (like /dashboard). It would contain the Sidebar, Header, and Footer specific to your main application UI.