import React, { FC } from "react";
import Link from "next/link"; // or your routing library
import { Button } from "@/components/ui/button"; // adjust path as needed

interface MegaMenuProps {
  activeMegaMenu: "women" | "men" | "kids" | "accessories" | null;
}

const MegaMenu: FC<MegaMenuProps> = ({ activeMegaMenu }) => {
  return (
    <>
      {activeMegaMenu === "women" && (
        <div className="mega-menu absolute top-full left-0 mt-2 w-screen max-w-4xl bg-background p-6 grid grid-cols-4 gap-6 rounded-md border">
          <div>
            <h3 className="font-bold mb-3">Clothing</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/women/dresses"
                  className="text-muted-foreground hover:text-primary"
                >
                  Dresses
                </Link>
              </li>
              <li>
                <Link
                  href="/women/tops"
                  className="text-muted-foreground hover:text-primary"
                >
                  Tops
                </Link>
              </li>
              <li>
                <Link
                  href="/women/pants"
                  className="text-muted-foreground hover:text-primary"
                >
                  Pants & Jeans
                </Link>
              </li>
              <li>
                <Link
                  href="/women/skirts"
                  className="text-muted-foreground hover:text-primary"
                >
                  Skirts
                </Link>
              </li>
              <li>
                <Link
                  href="/women/activewear"
                  className="text-muted-foreground hover:text-primary"
                >
                  Activewear
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Accessories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/women/jewelry"
                  className="text-muted-foreground hover:text-primary"
                >
                  Jewelry
                </Link>
              </li>
              <li>
                <Link
                  href="/women/bags"
                  className="text-muted-foreground hover:text-primary"
                >
                  Bags
                </Link>
              </li>
              <li>
                <Link
                  href="/women/shoes"
                  className="text-muted-foreground hover:text-primary"
                >
                  Shoes
                </Link>
              </li>
              <li>
                <Link
                  href="/women/hats"
                  className="text-muted-foreground hover:text-primary"
                >
                  Hats & Scarves
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Collections</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/women/new"
                  className="text-muted-foreground hover:text-primary"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/women/bestsellers"
                  className="text-muted-foreground hover:text-primary"
                >
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link
                  href="/women/sale"
                  className="text-muted-foreground hover:text-primary"
                >
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-muted rounded-md p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-bold mb-2">Summer Collection</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Discover our new summer styles
              </p>
            </div>
            <Button variant="default" size="sm" asChild>
              <Link href="/women/summer">Shop Now</Link>
            </Button>
          </div>
        </div>
      )}

      {activeMegaMenu === "men" && (
        <div className="mega-menu absolute top-full left-0 mt-2 w-screen max-w-4xl bg-background p-6 grid grid-cols-4 gap-6 rounded-md border">
          <div>
            <h3 className="font-bold mb-3">Clothing</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/men/shirts"
                  className="text-muted-foreground hover:text-primary"
                >
                  Shirts
                </Link>
              </li>
              <li>
                <Link
                  href="/men/tshirts"
                  className="text-muted-foreground hover:text-primary"
                >
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link
                  href="/men/pants"
                  className="text-muted-foreground hover:text-primary"
                >
                  Pants & Jeans
                </Link>
              </li>
              <li>
                <Link
                  href="/men/suits"
                  className="text-muted-foreground hover:text-primary"
                >
                  Suits
                </Link>
              </li>
              <li>
                <Link
                  href="/men/activewear"
                  className="text-muted-foreground hover:text-primary"
                >
                  Activewear
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Accessories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/men/watches"
                  className="text-muted-foreground hover:text-primary"
                >
                  Watches
                </Link>
              </li>
              <li>
                <Link
                  href="/men/bags"
                  className="text-muted-foreground hover:text-primary"
                >
                  Bags
                </Link>
              </li>
              <li>
                <Link
                  href="/men/shoes"
                  className="text-muted-foreground hover:text-primary"
                >
                  Shoes
                </Link>
              </li>
              <li>
                <Link
                  href="/men/ties"
                  className="text-muted-foreground hover:text-primary"
                >
                  Ties & Belts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Collections</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/men/new"
                  className="text-muted-foreground hover:text-primary"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/men/bestsellers"
                  className="text-muted-foreground hover:text-primary"
                >
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link
                  href="/men/sale"
                  className="text-muted-foreground hover:text-primary"
                >
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-muted rounded-md p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-bold mb-2">Business Casual</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Elevate your office style
              </p>
            </div>
            <Button variant="default" size="sm" asChild>
              <Link href="/men/business">Shop Now</Link>
            </Button>
          </div>
        </div>
      )}

      {activeMegaMenu === "kids" && (
        <div className="mega-menu absolute top-full left-0 mt-2 w-screen max-w-4xl bg-background p-6 grid grid-cols-4 gap-6 rounded-md border">
          <div>
            <h3 className="font-bold mb-3">Girls</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/kids/girls/dresses"
                  className="text-muted-foreground hover:text-primary"
                >
                  Dresses
                </Link>
              </li>
              <li>
                <Link
                  href="/kids/girls/tops"
                  className="text-muted-foreground hover:text-primary"
                >
                  Tops
                </Link>
              </li>
              <li>
                <Link
                  href="/kids/girls/bottoms"
                  className="text-muted-foreground hover:text-primary"
                >
                  Bottoms
                </Link>
              </li>
              <li>
                <Link
                  href="/kids/girls/sets"
                  className="text-muted-foreground hover:text-primary"
                >
                  Sets & Outfits
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Boys</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/kids/boys/shirts"
                  className="text-muted-foreground hover:text-primary"
                >
                  Shirts
                </Link>
              </li>
              <li>
                <Link
                  href="/kids/boys/tshirts"
                  className="text-muted-foreground hover:text-primary"
                >
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link
                  href="/kids/boys/pants"
                  className="text-muted-foreground hover:text-primary"
                >
                  Pants & Shorts
                </Link>
              </li>
              <li>
                <Link
                  href="/kids/boys/sets"
                  className="text-muted-foreground hover:text-primary"
                >
                  Sets & Outfits
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Baby</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/kids/baby/bodysuits"
                  className="text-muted-foreground hover:text-primary"
                >
                  Bodysuits
                </Link>
              </li>
              <li>
                <Link
                  href="/kids/baby/sets"
                  className="text-muted-foreground hover:text-primary"
                >
                  Sets & Outfits
                </Link>
              </li>
              <li>
                <Link
                  href="/kids/baby/accessories"
                  className="text-muted-foreground hover:text-primary"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-muted rounded-md p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-bold mb-2">Back to School</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get ready for the new school year
              </p>
            </div>
            <Button variant="default" size="sm" asChild>
              <Link href="/kids/school">Shop Now</Link>
            </Button>
          </div>
        </div>
      )}

      {activeMegaMenu === "accessories" && (
        <div className="mega-menu absolute top-full left-0 mt-2 w-screen max-w-4xl bg-background p-6 grid grid-cols-4 gap-6 rounded-md border">
          <div>
            <h3 className="font-bold mb-3">Jewelry</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/accessories/necklaces"
                  className="text-muted-foreground hover:text-primary"
                >
                  Necklaces
                </Link>
              </li>
              <li>
                <Link
                  href="/accessories/earrings"
                  className="text-muted-foreground hover:text-primary"
                >
                  Earrings
                </Link>
              </li>
              <li>
                <Link
                  href="/accessories/bracelets"
                  className="text-muted-foreground hover:text-primary"
                >
                  Bracelets
                </Link>
              </li>
              <li>
                <Link
                  href="/accessories/rings"
                  className="text-muted-foreground hover:text-primary"
                >
                  Rings
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Bags & Wallets</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/accessories/handbags"
                  className="text-muted-foreground hover:text-primary"
                >
                  Handbags
                </Link>
              </li>
              <li>
                <Link
                  href="/accessories/backpacks"
                  className="text-muted-foreground hover:text-primary"
                >
                  Backpacks
                </Link>
              </li>
              <li>
                <Link
                  href="/accessories/wallets"
                  className="text-muted-foreground hover:text-primary"
                >
                  Wallets
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Other</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/accessories/hats"
                  className="text-muted-foreground hover:text-primary"
                >
                  Hats & Caps
                </Link>
              </li>
              <li>
                <Link
                  href="/accessories/scarves"
                  className="text-muted-foreground hover:text-primary"
                >
                  Scarves
                </Link>
              </li>
              <li>
                <Link
                  href="/accessories/belts"
                  className="text-muted-foreground hover:text-primary"
                >
                  Belts
                </Link>
              </li>
              <li>
                <Link
                  href="/accessories/sunglasses"
                  className="text-muted-foreground hover:text-primary"
                >
                  Sunglasses
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-muted rounded-md p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-bold mb-2">Gift Ideas</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Perfect accessories for any occasion
              </p>
            </div>
            <Button variant="default" size="sm" asChild>
              <Link href="/accessories/gifts">Shop Now</Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default MegaMenu;
