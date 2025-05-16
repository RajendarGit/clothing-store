import React from 'react'

interface PageHeroProps {
  title: string;
  description?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, description }) => {
  return (
    <div className="relative bg-muted py-16 md:py-24">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}

export default PageHero
