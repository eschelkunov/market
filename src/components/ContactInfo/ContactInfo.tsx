import React from "react";
import { Header } from "../AppBar/Header";
import { Footer } from "../Footer/Footer";
import { SCContactInfo, SCContactInfoWrapper } from "./ContactInfo.style";

export const ContactInfo = () => {
  return (
    <>
      <Header />
      <SCContactInfoWrapper>
        <SCContactInfo>
          <p>Telephone: +380731234567</p>
          <p>Email: eschelkunov@gmail.com</p>
          <p>Address: pl. Nezalezhnosti, 1, Odessa, Odessa region, 65000</p>
        </SCContactInfo>
      </SCContactInfoWrapper>
      <Footer />
    </>
  );
};
