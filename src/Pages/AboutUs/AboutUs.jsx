import React from "react";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import CompanyHistory from "./CompanyHistory/CompanyHistory";
import Team from "./Team/Team";

const AboutUs = () => {
  return (
    <>
      <Wrapper text="О нас" />
      <CompanyHistory/>
      <Team />
    </>
  );
};

export default AboutUs;
