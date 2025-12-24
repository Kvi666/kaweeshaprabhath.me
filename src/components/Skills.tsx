"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Skills() {
  const skills = [
    { name: "Wordpress", logo: "/skills/wordpress.png" },
    { name: "Shopify", logo: "/skills/shopify.png" },
    { name: "React", logo: "/skills/react.webp" },
    { name: "JavaScript", logo: "/skills/js.webp" },
    { name: "TypeScript", logo: "/skills/typescript.webp" },
    { name: "Python", logo: "/skills/python.webp" },
    { name: "Laravel", logo: "/skills/laravel.webp" },
    { name: "MySQL", logo: "/skills/mysql.webp" },
    { name: "PHP", logo: "/skills/php.webp" },
    { name: "HTML", logo: "/skills/html.webp" },
    { name: "CSS", logo: "/skills/css.webp" },
    { name: "Tailwind", logo: "/skills/tailwind.webp" },
    { name: "Bootstrap", logo: "/skills/bootstrap.webp" },
    { name: "Figma", logo: "/skills/figma.webp" },
    { name: "Git", logo: "/skills/git.webp" },
    { name: "GitHub", logo: "/skills/github.webp" },
    { name: "Photoshop", logo: "/skills/photoshop.webp" },
    { name: "PremierePro", logo: "/skills/premiere-pro.webp" },
    { name: "Illustrator", logo: "/skills/illustrator.webp" },
  ];

  return (
    <div className="relative bg-gray-900 py-6 text-white">
      <div className="container mx-auto relative max-w-[1250px]">
        {/* Left and Right Fade Effect */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-40"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-40"></div>

        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
        >
          <CarouselContent className="flex items-center text-lg font-semibold">
            {skills.map((skill, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/6 text-center"
              >
                <div className="flex items-center justify-center gap-2 p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition">
                  <Image
                    src={skill.logo}
                    width={30}
                    height={30}
                    alt={skill.name}
                  />
                  <span>{skill.name}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
