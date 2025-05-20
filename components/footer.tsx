import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">ELEGANCE</h3>
            <p className="text-muted-foreground mb-4">Premium clothing and accessories for men, women, and kids.</p>
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

          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/women" className="text-muted-foreground hover:text-primary">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/men" className="text-muted-foreground hover:text-primary">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/kids" className="text-muted-foreground hover:text-primary">
                  Kids
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="text-muted-foreground hover:text-primary">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-muted-foreground hover:text-primary">
                  Sale
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-muted-foreground hover:text-primary">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/customer-service" className="text-muted-foreground hover:text-primary">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link href="/my-account" className="text-muted-foreground hover:text-primary">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/store-locator" className="text-muted-foreground hover:text-primary">
                  Store Locator
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-primary">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span className="text-muted-foreground">123 Fashion Street, New York, NY 10001, USA</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">support@elegance.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 lg:mb-0">
            &copy; {new Date().getFullYear()} Elegance. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mb-4 lg:mb-0">
            Designed and developed by Rajendar
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center md:space-x-4">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary mb-4 lg:mb-0">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary mb-4 lg:mb-0">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-sm text-muted-foreground hover:text-primary mb-4 lg:mb-0">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
