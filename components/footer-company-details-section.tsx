import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const FooterCompanyDetailsSection = () => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">ELEGANCE</h3>
      <p className="text-muted-foreground mb-4">
        Premium clothing and accessories for men, women, and kids.
      </p>
      <div className="flex space-x-4">
        <Link href="#" className="text-muted-foreground hover:text-primary">
          <Facebook className="h-5 w-5" />
          <span className="sr-only">Facebook</span>
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-primary">
          <Instagram className="h-5 w-5" />
          <span className="sr-only">Instagram</span>
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-primary">
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-primary">
          <Youtube className="h-5 w-5" />
          <span className="sr-only">YouTube</span>
        </Link>
      </div>
    </div>
  );
};

export default FooterCompanyDetailsSection;
