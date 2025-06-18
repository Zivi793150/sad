import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const CategoriesSection = (): JSX.Element => {
  // Data for category cards
  const categories = [
    {
      id: 1,
      title: "Fertilizer",
      image: "/figmaAssets/img-4.png",
    },
    {
      id: 2,
      title: "Protective products and septic tanks",
      image: "/figmaAssets/img-5.png",
    },
    {
      id: 3,
      title: "Planting material",
      image: "/figmaAssets/img-6.png",
    },
    {
      id: 4,
      title: "Tools and equipment",
      image: "/figmaAssets/img-7.png",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-10 w-full py-8">
      <div className="flex w-full items-center gap-8">
        <h2 className="font-['Montserrat',Helvetica] font-bold text-txtblack text-[64px] leading-[70.4px] whitespace-nowrap">
          Categories
        </h2>

        <div className="pt-2.5 pb-0 px-0 flex-1 flex items-center">
          <Separator className="flex-1 h-px" />

          <Button
            variant="outline"
            className="ml-4 rounded-md border border-solid border-[#dddddd] bg-transparent"
          >
            <span className="font-['Montserrat',Helvetica] font-medium text-txtgrey text-base text-center leading-[20.2px]">
              All categories
            </span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {categories.map((category) => (
          <Card key={category.id} className="border-none shadow-none">
            <CardContent className="flex flex-col items-center gap-4 p-0">
              <img
                className="h-[350px] w-full object-cover"
                alt={category.title}
                src={category.image}
              />
              <h3 className="font-['Montserrat',Helvetica] font-medium text-txtblack text-xl text-center leading-[26px] w-full">
                {category.title}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
