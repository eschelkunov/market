import React from "react";
import { Header } from "../AppBar/Header";
import { Footer } from "../Footer/Footer";
import { SCAdminWrapper } from "./Admin.style";

export const Admin = () => {
  return (
    <>
      <Header />
      <SCAdminWrapper className="content">
        <div>Admin</div>
      </SCAdminWrapper>
      <Footer />
    </>
  );
};
