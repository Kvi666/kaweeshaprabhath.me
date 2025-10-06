import React from "react";
import Image from "next/image";
import { FaPython, FaWordpress } from "react-icons/fa";
import Head from "next/head";

const Portfolio = () => {
  const projects = [
    {
          imgSrc: "/projects/keyword.png",
          title: "Keyword Finder in Web Pages",
          tech: "Python",
          description:
            "A Python script that automates the process of scanning multiple web pages for a specific keyword. It extracts the content of each URL, analyzes it, and reports whether the keyword is present, making it a useful tool for SEO research and content analysis.",
          link: "https://github.com/Kvi666/Keyword-Finder-in-Web-Pages",
          icon: FaPython,
        }, 
        {
          imgSrc: "/projects/lootyco.png",
          title: "Looty Co.",
          tech: "WordPress",
          description:
            "Looty Co. is an online skincare & beauty retailer that curates a selection of dermatologist-tested and effective products—ranging from cleansers, serums, moisturizers, sunscreens to hair care items.They also offer personalized skin consultations to help customers identify the right skincare routine.",
          link: "https://lootyco.com/",
          icon: FaWordpress,
        },
     {
      imgSrc: "/projects/tea.webp",
      title: "Three Flavours",
      tech: "WordPress",
      description:
        "Three Flavours offers premium tea blends that deliver rich, authentic flavors in every cup. With a selection of finely crafted teas, they provide a luxurious tea-drinking experience that delights the senses.",
      link: "https://3flavoursauthentic.com/",
      icon: FaWordpress,
    },
    {
      imgSrc: "/projects/chamee.webp",
      title: "chameeth.com",
      tech: "WordPress",
      description:
        "Chameeth.com is an interactive platform for book lovers. It offers a wide variety of genres, personalized recommendations, and a user-friendly design, making it an ideal space for readers to discover new books. The website is built on WordPress, ensuring easy content updates and management.",
      link: "https://chameeth.com/",
      icon: FaWordpress,
    },
   {
      imgSrc: "/projects/gallage.webp",
      title: "Gallage Construction",
      tech: "WordPress",
      description:
        "Gallage Construction specializes in high-quality bathroom renovations, floor tiling, and plumbing services. They combine technical expertise with a commitment to craftsmanship, delivering top-tier results on every project.",
      link: "https://gallageconstruction.lk/",
      icon: FaWordpress,
    },
   {
      imgSrc: "/projects/natural_lanka.webp",
      title: "Natural Lanka",
      tech: "WordPress",
      description:
        "Natural Lanka offers a wide range of organic and natural beauty products designed to promote a healthier and more sustainable lifestyle. Their products are carefully crafted to provide a luxurious experience with the benefit of natural ingredients.",
      link: "https://natural-lanka.com/",
      icon: FaWordpress,
    },
    {
      imgSrc: "/projects/amj.webp",
      title: "AMJ Trading",
      tech: "WordPress",
      description:
        "AMJ Trading specializes in providing high-quality equipment and comprehensive services tailored to fuel stations and service centers. Their offerings are designed to meet the specific needs of professionals in the industry.",
      link: "https://amjtradingsolutions.com/",
      icon: FaWordpress,
    },
    // {
    //   imgSrc: "/projects/api_flora.webp",
    //   title: "Api Flora",
    //   tech: "WordPress",
    //   description:
    //     "Api Flora offers premium, hand-picked floral arrangements that cater to all occasions. Their flower shop is dedicated to delivering fresh, vibrant blooms that express emotions and beauty in the most elegant way possible.",
    //   link: "https://apiflora.lk/",
    //   icon: FaWordpress,
    // },
    {
      imgSrc: "/projects/aura_sushi.webp",
      title: "Aura Sushi",
      tech: "WordPress",
      description:
        "Aura Sushi delivers an exquisite dining experience combining traditional sushi with modern culinary techniques. Whether you're craving sushi or grilled delicacies, Aura Sushi promises a delightful fusion of flavors.",
      link: "https://aurasushibarandgrill.co.uk/",
      icon: FaWordpress,
    },
    // {
    //   imgSrc: "/projects/design_link.webp",
    //   title: "Design Link",
    //   tech: "WordPress",
    //   description:
    //     "Design Link offers innovative interior design solutions that combine style, functionality, and modern aesthetics. Their approach transforms spaces into beautifully designed environments that enhance both living and working experiences.",
    //   link: "https://designlink.lk/",
    //   icon: FaWordpress,
    // },
    
    {
      imgSrc: "/projects/kv_line.webp",
      title: "KV Line",
      tech: "WordPress",
      description:
        "KV Line produces professional-grade drumsticks crafted with precision and care for musicians who demand quality. Their drumsticks are designed to enhance performance, offering the perfect balance of durability and playability.",
      link: "https://kvline.lk/",
      icon: FaWordpress,
    },
     {
      imgSrc: "/projects/sindys.webp",
      title: "Sindy's Clothing",
      tech: "WordPress",
      description:
        "Sindy's Clothing offers a diverse collection of trendy, bold styles designed for the fashion-forward. The brand effortlessly blends quality fabrics with unique, statement-making designs that cater to those who want to stand out.",
      link: "https://sindyss.com/",
      icon: FaWordpress,
    },
    {
      imgSrc: "/projects/afron.webp",
      title: "Afron Success",
      tech: "WordPress",
      description:
        "Afron Success Academy empowers individuals with expertly crafted courses aimed at boosting personal and professional growth. With an emphasis on skill development, the academy provides learners with the tools they need to succeed.",
      link: "https://www.afronsuccessacademy.com/",
      icon: FaWordpress,
    },
    // {
    //   imgSrc: "/projects/musket.webp",
    //   title: "Musket Movers",
    //   tech: "WordPress",
    //   description:
    //     "Musket Movers provides professional moving services designed to make relocations smooth and stress-free. Their team handles every aspect of the moving process with care, ensuring items are transported safely and efficiently.",
    //   link: "https://muscathousemovers.org/",
    //   icon: FaWordpress,
    // },
    
    // {
    //   imgSrc: "/projects/reliable.webp",
    //   title: "Reliable GCC",
    //   tech: "WordPress",
    //   description:
    //     "Reliable GCC is a leading construction and development firm that delivers comprehensive services to clients worldwide. With expertise in a wide range of industries, they provide high-quality solutions with global standards.",
    //   link: "https://reliablegcc.com/",
    //   icon: FaWordpress,
    // },
    {
      imgSrc: "/projects/seafood.webp",
      title: "Sea Food",
      tech: "WordPress",
      description:
        "Sea Food specializes in offering fresh, flavorful seafood dishes that draw inspiration from global culinary traditions. Each meal is crafted to bring the best of the ocean to the table with a focus on taste and quality.",
      link: "https://3flavoursseafood.com/",
      icon: FaWordpress,
    },
    {
      imgSrc: "/projects/sviss.webp",
      title: "Sviss",
      tech: "WordPress",
      description:
        "Sviss delivers premium personal care and beauty products designed for a luxurious lifestyle. With an emphasis on quality, their products offer the perfect balance of indulgence and practicality, elevating daily self-care routines.",
      link: "https://sviss.lk/",
      icon: FaWordpress,
    },
   
  ];

  return (
    <> 
    <Head>
        <title>Kaweesha Prabhath | Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Kaweesha Prabhath – a Full Stack Developer proficient in WordPress, React, and Python. Explore my projects and professional resume."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
       
        <meta property="og:title" content="Kaweesha Prabhath | Portfolio" />
        <meta
          property="og:description"
          content="Discover projects and professional achievements of Kaweesha Prabhath, a skilled Full Stack Developer."
        />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:url" content="https://kaweeshaprabhath.me/" />
        <meta property="og:type" content="website" />
       
        <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <div
      id="Portfolio"
      className="relative isolate overflow-hidden bg-gray-900"
    >
      <div className="p-8 min-h-screen">
        <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
        </div>
        <div className="max-w-7xl mx-auto md:px-12 xl:px-8">
          <div className="md:w-2/3 lg:w-1/2 my-12 md:mt-24 text-gray-100">
            <p className="text-3xl font-bold text-white md:text-4xl mb-4">
              Projects
            </p>
            <p className="text-gray-300">
              We have built many products, and some of them are showcased below.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 overflow-hidden"
              >
                <a href={project.link} target="_blank">
                  <Image
                    className="w-full object-cover"
                    src={project.imgSrc}
                    alt={project.title}
                    width={500}
                    height={500}
                  />
                </a>
                <div className="p-4 sm:p-6">
                  <a href={project.link} target="_blank">
                    <div className="flex justify-between">
                      <p className="text-lg font-semibold text-gray-900 dark:text-white transition-colors group-hover:text-secondary flex gap-2">
                        {project.title}
                      </p>
                      <p className="text-white bg-gray-600 w-fit rounded-full px-2 my-auto flex gap-2">
                        {/* Dynamically render the icon */}
                        <project.icon className="my-auto" />
                        {project.tech}
                      </p>
                    </div>
                  </a>
                  <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm md:text-base text-justify">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Portfolio;
