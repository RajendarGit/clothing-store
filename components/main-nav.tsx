"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ShoppingBag, Search, Menu, X, Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { ModeToggle } from "./mode-toggle";
import Logo from "./logo";
import MegaMenu from "./mega-menu";
import MegaMenuActiveButton from "./mega-menu-active-button";
import MegaMenuUserMenu from "./mega-menu-user-menu";
import useClickOutside from "@/hooks/use-click-outside";
import Container from "./ui/container";
import { useAppSelector } from "@/hooks/use-app-selector";

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<
    "women" | "men" | "kids" | "accessories" | null
  >(null);
  const { items } = useSelector((state: RootState) => state.cart);
  const { user } = useSelector((state: RootState) => state.auth);

  const womenRef = useRef<HTMLDivElement>(null);
  const menRef = useRef<HTMLDivElement>(null);
  const kidsRef = useRef<HTMLDivElement>(null);
  const accessoriesRef = useRef<HTMLDivElement>(null);
  const { items: wishlistItems } = useAppSelector((state: RootState) => state.wishlist);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMegaMenu = (category: typeof activeMegaMenu) => {
    setActiveMegaMenu((prev) => (prev === category ? null : category));
  };

  useClickOutside(
    womenRef as React.RefObject<HTMLElement>,
    () => activeMegaMenu === "women" && setActiveMegaMenu(null)
  );
  useClickOutside(
    menRef as React.RefObject<HTMLElement>,
    () => activeMegaMenu === "men" && setActiveMegaMenu(null)
  );
  useClickOutside(
    kidsRef as React.RefObject<HTMLElement>,
    () => activeMegaMenu === "kids" && setActiveMegaMenu(null)
  );
  useClickOutside(
    accessoriesRef as React.RefObject<HTMLElement>,
    () => activeMegaMenu === "accessories" && setActiveMegaMenu(null)
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center py-4">
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        <div className="flex items-center">
          <Logo />
        </div>

        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          <div ref={womenRef} className="relative">
            <MegaMenuActiveButton
              menuKey="women"
              activeMegaMenu={activeMegaMenu}
              toggleMegaMenu={toggleMegaMenu}
            />
            {activeMegaMenu === "women" && <MegaMenu activeMegaMenu="women" />}
          </div>

          <div ref={menRef} className="relative">
            <MegaMenuActiveButton
              menuKey="men"
              activeMegaMenu={activeMegaMenu}
              toggleMegaMenu={toggleMegaMenu}
            />
            {activeMegaMenu === "men" && <MegaMenu activeMegaMenu="men" />}
          </div>

          <div ref={kidsRef} className="relative">
            <MegaMenuActiveButton
              menuKey="kids"
              activeMegaMenu={activeMegaMenu}
              toggleMegaMenu={toggleMegaMenu}
            />
            {activeMegaMenu === "kids" && <MegaMenu activeMegaMenu="kids" />}
          </div>

          <div ref={accessoriesRef} className="relative">
            <MegaMenuActiveButton
              menuKey="accessories"
              activeMegaMenu={activeMegaMenu}
              toggleMegaMenu={toggleMegaMenu}
            />
            {activeMegaMenu === "accessories" && (
              <MegaMenu activeMegaMenu="accessories" />
            )}
          </div>

          <Link href="/sale">Sale</Link>
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />

          <Button variant="ghost" size="icon" asChild>
            <Link href="/search">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link href="/wishlist">
              <Heart className="h-5 w-5" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-white flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
              <span className="sr-only">Wishlist</span>
            </Link>
          </Button>

          <MegaMenuUserMenu user={user} />

          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link href="/cart">
              <ShoppingBag className="h-5 w-5" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-white flex items-center justify-center">
                  {items.length}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/women"
                className="flex justify-between items-center py-2 border-b"
              >
                Women
                <ChevronDown className="h-4 w-4" />
              </Link>
              <Link
                href="/men"
                className="flex justify-between items-center py-2 border-b"
              >
                Men
                <ChevronDown className="h-4 w-4" />
              </Link>
              <Link
                href="/kids"
                className="flex justify-between items-center py-2 border-b"
              >
                Kids
                <ChevronDown className="h-4 w-4" />
              </Link>
              <Link
                href="/accessories"
                className="flex justify-between items-center py-2 border-b"
              >
                Accessories
                <ChevronDown className="h-4 w-4" />
              </Link>
              <Link
                href="/sale"
                className="flex justify-between items-center py-2 border-b"
              >
                Sale
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
