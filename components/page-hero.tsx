import React from 'react'
import { Badge } from './ui/badge';
import { Clock } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

interface PageHeroProps {
  title: string;
  description?: string;
  saleBanner?: boolean;
  days?: number;
}

const PageHero: React.FC<PageHeroProps> = ({ title, description, saleBanner = false, days }) => {
  return (
    <div
      className={`${
        saleBanner ? "bg-primary text-primary-foreground" : "bg-muted"
      } relative py-16 md:py-24`}
    >
      <div className="container text-center">
        {saleBanner &&<Badge variant="secondary" className="mb-4 text-primary">
          <Clock className="h-3 w-3 mr-1" /> {days} days left
        </Badge>}
        <h1
          className={`text-4xl font-bold mb-4 ${
            saleBanner ? "md:text-6xl" : "md:text-5xl"
          }`}
        >
          {title}
        </h1>
        <p
          className={`mx-auto ${
            saleBanner
              ? "text-xl md:text-2xl mb-8 max-w-2xl"
              : "text-muted-foreground max-w-2xl"
          }`}
        >
          {description}
        </p>
        {saleBanner && (
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#sale-products">Shop Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
            >
              Learn More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PageHero
