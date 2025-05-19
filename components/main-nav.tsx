"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag, Search, Menu, X, Heart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSelector } from "react-redux"
import type { RootState } from "@/redux/store"
import { ModeToggle } from "./mode-toggle"
import Logo from "./logo"
import MegaMenu from "./mega-menu"
import MegaMenuActiveButton from "./mega-menu-active-button"
import MegaMenuUserMenu from "./mega-menu-user-menu"

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<"women" | "men" | "kids" | "accessories" | null>(null)
  const { items } = useSelector((state: RootState) => state.cart)
  const { user } = useSelector((state: RootState) => state.auth)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleMegaMenu = (category: "women" | "men" | "kids" | "accessories") => {
    if (activeMegaMenu === category) {
      setActiveMegaMenu(null)
    } else {
      setActiveMegaMenu(category)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <div className="flex items-center">
          <Logo />
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <div className="relative">
            <MegaMenuActiveButton menuKey="women" activeMegaMenu={"women"} toggleMegaMenu={toggleMegaMenu} />
            {activeMegaMenu === "women" && <MegaMenu activeMegaMenu="women" />}
          </div>

          <div className="relative">
            <MegaMenuActiveButton menuKey="men" activeMegaMenu={"men"} toggleMegaMenu={toggleMegaMenu} />
            {activeMegaMenu === "men" && <MegaMenu activeMegaMenu="men" />}

          </div>

          <div className="relative">
            <MegaMenuActiveButton menuKey="kids" activeMegaMenu={"kids"} toggleMegaMenu={toggleMegaMenu} />
            {activeMegaMenu === "kids" && <MegaMenu activeMegaMenu="kids" />}
          </div>

          <div className="relative">
            <MegaMenuActiveButton menuKey="accessories" activeMegaMenu={"accessories"} toggleMegaMenu={toggleMegaMenu} />
            {activeMegaMenu === "accessories" && <MegaMenu activeMegaMenu="accessories" />}
          </div>

          <Link href="/sale" className="text-foreground hover:text-primary">
            Sale
          </Link>
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />

          <Button variant="ghost" size="icon" asChild>
            <Link href="/search">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="/wishlist">
              <Heart className="h-5 w-5" />
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/women" className="flex justify-between items-center py-2 border-b">
                Women
                <ChevronDown className="h-4 w-4" />
              </Link>
              <Link href="/men" className="flex justify-between items-center py-2 border-b">
                Men
                <ChevronDown className="h-4 w-4" />
              </Link>
              <Link href="/kids" className="flex justify-between items-center py-2 border-b">
                Kids
                <ChevronDown className="h-4 w-4" />
              </Link>
              <Link href="/accessories" className="flex justify-between items-center py-2 border-b">
                Accessories
                <ChevronDown className="h-4 w-4" />
              </Link>
              <Link href="/sale" className="flex justify-between items-center py-2 border-b">
                Sale
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
