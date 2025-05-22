import React from "react";
import { Badge } from "./ui/badge";
import PromotionalCountdown from "./promotional-countdown";
import { Button } from "./ui/button";
import Link from "next/link";

const FlashSaleBanner = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);
  return (
    <div className="relative overflow-hidden rounded-xl bg-primary text-primary-foreground">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mt-10 -mr-10" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -mb-8 -ml-8" />

      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        <div>
          <Badge variant="secondary" className="mb-2">
            Limited Time
          </Badge>
          <h3 className="text-2xl font-bold mb-2">Flash Sale</h3>
          <p className="text-primary-foreground/80 mb-4">
            Up to 40% off on selected items. Hurry while stocks last!
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <PromotionalCountdown targetDate={targetDate} />
        </div>
      </div>
    </div>
  );
};

export default FlashSaleBanner;
