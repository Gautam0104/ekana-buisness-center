import React from "react";

const EldecoCityFeatures = () => {
  const features = [
    {
      title: "JOGGING TRACKS ",
      description:
        "Traditional jogging paths still cherished by fitness lovers.",
      img: "/Picture1.webp",
    },
    {
      title: "KIDS PLAY AREA",
      description:
        "Children flourish in secure, thoughtfully crafted play areas built for community fun.",
      img: "/Picture2.webp",
    },
    {
      title: "PARKS",
      description:
        "Enjoy peaceful strolls or quiet reflection across 23 vibrant, community-friendly parks.",
      img: "/Picture3.webp",
    },
    {
      title: "MIYAWAKI FOREST",
      description:
        "Enjoy constant connection to nature with an 800 sq. mt. forested retreat.",
      img: "/Picture4.webp",
    },
    {
      title: "SCHOOL",
      description:
        "Indus Valley School’s close location adds everyday convenience and a warm neighborhood vibe.",
      img: "/Picture5.png",
    },
    {
      title: " SECURITY",
      description:
        "Offering superior protection with an integrated security setup.",
      img: "/Picture6.webp",
    },
    {
      title: "CONVENIENT \n SHOPPING  ",
      description:
        " Easily access your daily essentials with well-placed convenience stores and complexes.",
      img: "/Picture7.webp",
    },
    {
      title: "CENTRAL PARK ",
      description:
        "A well-balanced 3-acre park designed for peaceful moments and active play.",
      img: "/Picture8.webp",
    },
  ];

  return (
    <section className="bg-white py-10  ">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
            Eldeco City Features
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mb-8 md:mb-12 rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white relative  cursor-pointer rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl mb-4 absolute -top-4 right-2">
                <img
                  src={feature.img}
                  alt={feature.title}
                  loading="lazy"
                  className="size-16 rounded-full"
                />
              </div>
              <h3 className="text-md font-semibold text-gray-800 mb-4">
                {feature.title.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h3>
              <p className="text-xs font-medium text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EldecoCityFeatures;
