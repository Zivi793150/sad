import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Product data for mapping
const saleProducts = [
  {
    id: 1,
    name: "Decorative forged bridge",
    currentPrice: 500,
    originalPrice: 1000,
    discount: 50,
    image: "/figmaAssets/img.png",
  },
  {
    id: 2,
    name: "Flower basket",
    currentPrice: 100,
    originalPrice: 150,
    discount: 34,
    image: "/figmaAssets/img-1.png",
  },
  {
    id: 3,
    name: "Aquarium lock",
    currentPrice: 150,
    originalPrice: 200,
    discount: 25,
    image: "/figmaAssets/img-2.png",
  },
  {
    id: 4,
    name: "Secateurs",
    currentPrice: 199,
    originalPrice: 240,
    discount: 17,
    image: "/figmaAssets/img-3.png",
  },
];

export const SaleSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-10 w-full">
      <div className="flex w-full items-center gap-8">
        <h2 className="font-['Montserrat',Helvetica] font-bold text-txtblack text-[64px] leading-[70.4px]">
          Sale
        </h2>

        <div className="pt-2.5 pb-0 px-0 flex-1 flex items-center">
          <Separator className="flex-1 h-px" />

          <Button
            variant="outline"
            className="ml-4 rounded-md border border-solid border-[#dddddd] font-['Montserrat',Helvetica] font-medium text-txtgrey"
          >
            All sales
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap w-full items-start gap-8">
        {saleProducts.map((product) => (
          <Card
            key={product.id}
            className="flex flex-col items-start gap-5 rounded-xl overflow-hidden border border-solid border-[#dddddd] p-0"
          >
            <div className="relative">
              <img
                className="h-[284px] w-[316px] object-cover"
                alt={product.name}
                src={product.image}
              />
              <Badge className="absolute top-4 right-4 bg-green text-txtwhite font-['Montserrat',Helvetica] font-semibold text-xl tracking-[0.60px] leading-[26px] px-2 py-1">
                -{product.discount}%
              </Badge>
            </div>

            <CardContent className="flex flex-col w-[316px] items-start gap-4 pt-0 pb-8 px-8">
              <h3 className="self-stretch font-['Montserrat',Helvetica] font-medium text-txtblack text-xl leading-[26px]">
                {product.name}
              </h3>

              <div className="flex items-baseline gap-4 self-stretch w-full">
                <span className="font-['Montserrat',Helvetica] font-semibold text-txtblack text-[40px] leading-[44px]">
                  ${product.currentPrice}
                </span>

                <span className="font-['Montserrat',Helvetica] font-medium text-txtgrey text-xl leading-[26px] line-through">
                  ${product.originalPrice}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
