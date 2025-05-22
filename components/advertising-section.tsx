import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PromotionalCountdown from "@/components/promotional-countdown";
import Container from "./ui/container";
import AdvertCard from "./advert-card";
import FlashSaleBanner from "./flash-sale-banner";
import MembershipBanner from "./membership-banner";
import PromotionalBrandBanner from "./promotional-brand-banner";

export default function AdvertisingSection() {
  // Set the countdown target date to 7 days from now
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Promotional Banner */}
          <AdvertCard />

          {/* Secondary Promotional Content */}
          <div className="grid grid-rows-2 gap-8 h-[500px]">
            {/* Flash Sale Banner */}
            <FlashSaleBanner />

            {/* Membership Banner */}
            <MembershipBanner />
          </div>
        </div>

        {/* Promotional Brands Banner */}
        <PromotionalBrandBanner />
      </Container>
    </section>
  );
}
