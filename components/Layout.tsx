import React, { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutPops = {
    children: ReactNode;
};

const Layout: FC<LayoutPops> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
