import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const DiscountFormSection = (): JSX.Element => {
  return (
    <Card className="w-full flex flex-col items-center gap-6 pt-8 pb-0 px-8 rounded-xl bg-[linear-gradient(220deg,rgba(11,113,11,1)_0%,rgba(51,153,51,1)_100%)] border-none">
      <CardContent className="w-full p-0">
        <h2 className="w-full mb-6 font-['Montserrat',Helvetica] font-bold text-txtwhite text-[64px] text-center tracking-[0] leading-[70.4px]">
          5% off on the first order
        </h2>

        <div className="flex flex-row items-center gap-8">
          <div className="flex-1">
            <img
              className="w-full h-[360px] object-cover"
              alt="Gardening tools and plants"
              src="/figmaAssets/image.png"
            />
          </div>

          <div className="flex flex-col w-[516px] items-start gap-8">
            <form className="flex flex-col items-start gap-4 w-full">
              <div className="w-full">
                <Input
                  className="px-8 py-4 h-auto rounded-md border border-solid border-[#ffffff] bg-transparent text-txtwhite text-xl font-['Montserrat',Helvetica] font-medium placeholder:text-txtwhite"
                  placeholder="Name"
                />
              </div>

              <div className="w-full">
                <Input
                  className="px-8 py-4 h-auto rounded-md border border-solid border-[#ffffff] bg-transparent text-txtwhite text-xl font-['Montserrat',Helvetica] font-medium placeholder:text-txtwhite"
                  placeholder="Phone number"
                />
              </div>

              <div className="w-full">
                <Input
                  className="px-8 py-4 h-auto rounded-md border border-solid border-[#ffffff] bg-transparent text-txtwhite text-xl font-['Montserrat',Helvetica] font-medium placeholder:text-txtwhite"
                  placeholder="Email"
                />
              </div>
            </form>

            <Button className="w-full px-8 py-4 h-auto bg-white text-txtblack rounded-md font-['Montserrat',Helvetica] font-semibold text-xl text-center">
              Get a discount
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
