import { InstagramIcon, MessageCircleIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const ContactSection = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    {
      id: 1,
      title: "Phone",
      content: "+7 (499) 350-66-04",
    },
    {
      id: 2,
      title: "Socials",
      content: "social-icons",
    },
    {
      id: 3,
      title: "Address",
      content: "Dubininskaya Ulitsa, 96, Moscow, Russia, 115093",
    },
    {
      id: 4,
      title: "Working Hours",
      content: "24 hours a day",
    },
  ];

  return (
    <section className="flex flex-col w-full gap-10 py-20 px-10">
      <h2 className="font-bold text-txtblack text-[64px] leading-[70.4px] font-['Montserrat',Helvetica] tracking-[0]">
        Contact
      </h2>

      <div className="flex flex-col w-full gap-8">
        <div className="flex flex-col gap-8 w-full">
          {/* First row */}
          <div className="flex gap-8 w-full">
            <Card className="flex-1 bg-light-grey rounded-xl border-0">
              <CardContent className="flex flex-col gap-4 p-8">
                <div className="font-['Montserrat',Helvetica] font-medium text-txtgrey text-xl leading-[26px]">
                  {contactInfo[0].title}
                </div>
                <div className="font-['Montserrat',Helvetica] font-semibold text-txtblack text-[40px] leading-[44px]">
                  {contactInfo[0].content}
                </div>
              </CardContent>
            </Card>

            <Card className="w-[548px] bg-light-grey rounded-xl border-0">
              <CardContent className="flex flex-col gap-4 p-8">
                <div className="font-['Montserrat',Helvetica] font-medium text-txtgrey text-xl leading-[26px]">
                  {contactInfo[1].title}
                </div>
                <div className="flex gap-4 flex-1">
                  {/* Using Lucide icons as replacements, but keeping the original styling */}
                  <InstagramIcon className="flex-1 h-auto w-auto" />
                  <MessageCircleIcon className="w-[43px] h-[43px]" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Second row */}
          <div className="flex gap-8 w-full">
            <Card className="flex-1 bg-light-grey rounded-xl border-0">
              <CardContent className="flex flex-col gap-4 p-8">
                <div className="font-['Montserrat',Helvetica] font-medium text-txtgrey text-xl leading-[26px]">
                  {contactInfo[2].title}
                </div>
                <div className="font-['Montserrat',Helvetica] font-semibold text-txtblack text-[40px] leading-[44px]">
                  {contactInfo[2].content}
                </div>
              </CardContent>
            </Card>

            <Card className="w-[548px] bg-light-grey rounded-xl border-0">
              <CardContent className="flex flex-col gap-4 p-8">
                <div className="font-['Montserrat',Helvetica] font-medium text-txtgrey text-xl leading-[26px]">
                  {contactInfo[3].title}
                </div>
                <div className="font-['Montserrat',Helvetica] font-semibold text-txtblack text-[40px] leading-[44px]">
                  {contactInfo[3].content}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map image */}
        <img
          className="w-full h-[350px] object-cover rounded-xl"
          alt="Map"
          src="/figmaAssets/map.png"
        />
      </div>
    </section>
  );
};
