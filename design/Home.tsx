import React from "react";
import { CategoriesSection } from "./sections/CategoriesSection";
import { ContactSection } from "./sections/ContactSection";
import { DiscountFormSection } from "./sections/DiscountFormSection";
import { HeaderSection } from "./sections/HeaderSection";
import { SaleSection } from "./sections/SaleSection";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative">
        <HeaderSection />
        <CategoriesSection />
        <DiscountFormSection />
        <SaleSection />
        <ContactSection />
      </div>
    </div>
  );
};
