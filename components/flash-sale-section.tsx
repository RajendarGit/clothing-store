import React from "react";
import Container from "./ui/container";
import { Badge } from "./ui/badge";

const FlashSaleSection = () => {
  const saleEndDate = new Date();
  saleEndDate.setDate(saleEndDate.getDate() + 7); // Sale ends in 7 days
  const today = new Date();
  const daysRemaining = Math.ceil(
    (saleEndDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <section className="py-12 bg-gradient-to-r from-primary/90 to-primary text-primary-foreground">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <Badge variant="secondary" className="mb-2">
              Limited Time
            </Badge>
            <h2 className="text-3xl font-bold mb-2">Flash Sale</h2>
            <p className="text-primary-foreground/80 max-w-md">
              Extra 10% off on all sale items. Use code{" "}
              <span className="font-bold">EXTRA10</span> at checkout.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="text-center px-6 py-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <span className="block text-3xl font-bold">{daysRemaining}</span>
              <span className="text-sm text-primary-foreground/80">Days</span>
            </div>
            <div className="text-center px-6 py-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <span className="block text-3xl font-bold">24</span>
              <span className="text-sm text-primary-foreground/80">Hours</span>
            </div>
            <div className="text-center px-6 py-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <span className="block text-3xl font-bold">60</span>
              <span className="text-sm text-primary-foreground/80">
                Minutes
              </span>
            </div>
            <div className="text-center px-6 py-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <span className="block text-3xl font-bold">60</span>
              <span className="text-sm text-primary-foreground/80">
                Seconds
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FlashSaleSection;
