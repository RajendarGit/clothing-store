"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingBag, User, Search, Menu, X, Heart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSelector } from "react-redux"
import type { RootState } from "@/redux/store"
import { ModeToggle } from "./mode-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function MainNav() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const { items } = useSelector((state: RootState) => state.cart)
  const { user } = useSelector((state: RootState) => state.auth)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleMegaMenu = (category: string) => {
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
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">ELEGANCE</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <div className="relative">
            <button
              className={`flex items-center space-x-1 ${activeMegaMenu === "women" ? "text-primary" : "text-foreground"}`}
              onClick={() => toggleMegaMenu("women")}
            >
              <span>Women</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {activeMegaMenu === "women" && (
              <div className="mega-menu absolute top-full left-0 mt-2 w-screen max-w-4xl bg-background p-6 grid grid-cols-4 gap-6 rounded-md border">
                <div>
                  <h3 className="font-bold mb-3">Clothing</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/women/dresses" className="text-muted-foreground hover:text-primary">
                        Dresses
                      </Link>
                    </li>
                    <li>
                      <Link href="/women/tops" className="text-muted-foreground hover:text-primary">
                        Tops
                      </Link>
                    </li>
                    <li>
                      <Link href="/women/pants" className="text-muted-foreground hover:text-primary">
                        Pants & Jeans
                      </Link>
                    </li>
                    <li>
                      <Link href="/women/skirts" className="text-muted-foreground hover:text-primary">
                        Skirts
                      </Link>
                    </li>
                    <li>
                      <Link href="/women/activewear" className="text-muted-foreground hover:text-primary">
                        Activewear
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3">Accessories</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/women/jewelry" className="text-muted-foreground hover:text-primary">
                        Jewelry
                      </Link>
                    </li>
                    <li>
                      <Link href="/women/bags" className="text-muted-foreground hover:text-primary">
                        Bags
                      </Link>
                    </li>
                    <li>
                      <Link href="/women/shoes" className="text-muted-foreground hover:text-primary">
                        Shoes
                      </Link>
                    </li>
                    <li>
                      <Link href="/women/hats" className="text-muted-foreground hover:text-primary">
                        Hats & Scarves
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3">Collections</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/women/new" className="text-muted-foreground hover:text-primary">
                        New Arrivals
                      </Link>
                    </li>
                    <li>
                      <Link href="/women/bestsellers" className="text-muted-foreground hover:text-primary">
                        Bestsellers
                      </Link>
                    </li>
                    <li>
                      <Link href="/women/sale" className="text-muted-foreground hover:text-primary">
                        Sale
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted rounded-md p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold mb-2">Summer Collection</h3>
                    <p className="text-sm text-muted-foreground mb-4">Discover our new summer styles</p>
                  </div>
                  <Button variant="default" size="sm" asChild>
                    <Link href="/women/summer">Shop Now</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className={`flex items-center space-x-1 ${activeMegaMenu === "men" ? "text-primary" : "text-foreground"}`}
              onClick={() => toggleMegaMenu("men")}
            >
              <span>Men</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {activeMegaMenu === "men" && (
              <div className="mega-menu absolute top-full left-0 mt-2 w-screen max-w-4xl bg-background p-6 grid grid-cols-4 gap-6 rounded-md border">
                <div>
                  <h3 className="font-bold mb-3">Clothing</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/men/shirts" className="text-muted-foreground hover:text-primary">
                        Shirts
                      </Link>
                    </li>
                    <li>
                      <Link href="/men/tshirts" className="text-muted-foreground hover:text-primary">
                        T-Shirts
                      </Link>
                    </li>
                    <li>
                      <Link href="/men/pants" className="text-muted-foreground hover:text-primary">
                        Pants & Jeans
                      </Link>
                    </li>
                    <li>
                      <Link href="/men/suits" className="text-muted-foreground hover:text-primary">
                        Suits
                      </Link>
                    </li>
                    <li>
                      <Link href="/men/activewear" className="text-muted-foreground hover:text-primary">
                        Activewear
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3">Accessories</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/men/watches" className="text-muted-foreground hover:text-primary">
                        Watches
                      </Link>
                    </li>
                    <li>
                      <Link href="/men/bags" className="text-muted-foreground hover:text-primary">
                        Bags
                      </Link>
                    </li>
                    <li>
                      <Link href="/men/shoes" className="text-muted-foreground hover:text-primary">
                        Shoes
                      </Link>
                    </li>
                    <li>
                      <Link href="/men/ties" className="text-muted-foreground hover:text-primary">
                        Ties & Belts
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3">Collections</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/men/new" className="text-muted-foreground hover:text-primary">
                        New Arrivals
                      </Link>
                    </li>
                    <li>
                      <Link href="/men/bestsellers" className="text-muted-foreground hover:text-primary">
                        Bestsellers
                      </Link>
                    </li>
                    <li>
                      <Link href="/men/sale" className="text-muted-foreground hover:text-primary">
                        Sale
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted rounded-md p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold mb-2">Business Casual</h3>
                    <p className="text-sm text-muted-foreground mb-4">Elevate your office style</p>
                  </div>
                  <Button variant="default" size="sm" asChild>
                    <Link href="/men/business">Shop Now</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className={`flex items-center space-x-1 ${activeMegaMenu === "kids" ? "text-primary" : "text-foreground"}`}
              onClick={() => toggleMegaMenu("kids")}
            >
              <span>Kids</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {activeMegaMenu === "kids" && (
              <div className="mega-menu absolute top-full left-0 mt-2 w-screen max-w-4xl bg-background p-6 grid grid-cols-4 gap-6 rounded-md border">
                <div>
                  <h3 className="font-bold mb-3">Girls</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/kids/girls/dresses" className="text-muted-foreground hover:text-primary">
                        Dresses
                      </Link>
                    </li>
                    <li>
                      <Link href="/kids/girls/tops" className="text-muted-foreground hover:text-primary">
                        Tops
                      </Link>
                    </li>
                    <li>
                      <Link href="/kids/girls/bottoms" className="text-muted-foreground hover:text-primary">
                        Bottoms
                      </Link>
                    </li>
                    <li>
                      <Link href="/kids/girls/sets" className="text-muted-foreground hover:text-primary">
                        Sets & Outfits
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3">Boys</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/kids/boys/shirts" className="text-muted-foreground hover:text-primary">
                        Shirts
                      </Link>
                    </li>
                    <li>
                      <Link href="/kids/boys/tshirts" className="text-muted-foreground hover:text-primary">
                        T-Shirts
                      </Link>
                    </li>
                    <li>
                      <Link href="/kids/boys/pants" className="text-muted-foreground hover:text-primary">
                        Pants & Shorts
                      </Link>
                    </li>
                    <li>
                      <Link href="/kids/boys/sets" className="text-muted-foreground hover:text-primary">
                        Sets & Outfits
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3">Baby</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/kids/baby/bodysuits" className="text-muted-foreground hover:text-primary">
                        Bodysuits
                      </Link>
                    </li>
                    <li>
                      <Link href="/kids/baby/sets" className="text-muted-foreground hover:text-primary">
                        Sets & Outfits
                      </Link>
                    </li>
                    <li>
                      <Link href="/kids/baby/accessories" className="text-muted-foreground hover:text-primary">
                        Accessories
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted rounded-md p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold mb-2">Back to School</h3>
                    <p className="text-sm text-muted-foreground mb-4">Get ready for the new school year</p>
                  </div>
                  <Button variant="default" size="sm" asChild>
                    <Link href="/kids/school">Shop Now</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className={`flex items-center space-x-1 ${activeMegaMenu === "accessories" ? "text-primary" : "text-foreground"}`}
              onClick={() => toggleMegaMenu("accessories")}
            >
              <span>Accessories</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {activeMegaMenu === "accessories" && (
              <div className="mega-menu absolute top-full left-0 mt-2 w-screen max-w-4xl bg-background p-6 grid grid-cols-4 gap-6 rounded-md border">
                <div>
                  <h3 className="font-bold mb-3">Jewelry</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/accessories/necklaces" className="text-muted-foreground hover:text-primary">
                        Necklaces
                      </Link>
                    </li>
                    <li>
                      <Link href="/accessories/earrings" className="text-muted-foreground hover:text-primary">
                        Earrings
                      </Link>
                    </li>
                    <li>
                      <Link href="/accessories/bracelets" className="text-muted-foreground hover:text-primary">
                        Bracelets
                      </Link>
                    </li>
                    <li>
                      <Link href="/accessories/rings" className="text-muted-foreground hover:text-primary">
                        Rings
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3">Bags & Wallets</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/accessories/handbags" className="text-muted-foreground hover:text-primary">
                        Handbags
                      </Link>
                    </li>
                    <li>
                      <Link href="/accessories/backpacks" className="text-muted-foreground hover:text-primary">
                        Backpacks
                      </Link>
                    </li>
                    <li>
                      <Link href="/accessories/wallets" className="text-muted-foreground hover:text-primary">
                        Wallets
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3">Other</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/accessories/hats" className="text-muted-foreground hover:text-primary">
                        Hats & Caps
                      </Link>
                    </li>
                    <li>
                      <Link href="/accessories/scarves" className="text-muted-foreground hover:text-primary">
                        Scarves
                      </Link>
                    </li>
                    <li>
                      <Link href="/accessories/belts" className="text-muted-foreground hover:text-primary">
                        Belts
                      </Link>
                    </li>
                    <li>
                      <Link href="/accessories/sunglasses" className="text-muted-foreground hover:text-primary">
                        Sunglasses
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted rounded-md p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold mb-2">Gift Ideas</h3>
                    <p className="text-sm text-muted-foreground mb-4">Perfect accessories for any occasion</p>
                  </div>
                  <Button variant="default" size="sm" asChild>
                    <Link href="/accessories/gifts">Shop Now</Link>
                  </Button>
                </div>
              </div>
            )}
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

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {user ? (
                <>
                  <DropdownMenuItem asChild>
                    <Link href="/account">My Account</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/orders">My Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/wishlist">Wishlist</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/logout">Logout</Link>
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem asChild>
                    <Link href="/login">Login</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/register">Register</Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

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
