import React from "react";

interface InnerHeroProps {
  collection: {
    title: string;
    description: string;
    image: string;
  };
}

const InnerHero: React.FC<InnerHeroProps> = ({ collection }) => {
  return (
    <section className="relative h-[300px] md:h-[400px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/banner/${collection.image})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 h-full flex flex-col justify-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {collection.title}
        </h1>
        <p className="text-lg md:text-xl max-w-xl">{collection.description}</p>
      </div>
    </section>
  );
};

export default InnerHero;

