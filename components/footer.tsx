import FooterLinksContent from "./footer-links-content";
import ContactUsSection from "./contact-us-section";
import CopyRightsSection from "./copy-rights-section";
import FooterCompanyDetailsSection from "./footer-company-details-section";
import Container from "./ui/container";

const shopLinks = [
  { href: "/women", label: "Women" },
  { href: "/men", label: "Men" },
  { href: "/kids", label: "Kids" },
  { href: "/accessories", label: "Accessories" },
  { href: "/sale", label: "Sale" },
  { href: "/new-arrivals", label: "New Arrivals" },
];

const helpLinks = [
  { href: "/contact", label: "Contact Us" },
  { href: "/my-account", label: "My Account" },
  { href: "/store-locator", label: "Store Locator" },
  { href: "/shipping", label: "Shipping & Returns" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="bg-muted">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterCompanyDetailsSection />
          <FooterLinksContent title="Shop" links={shopLinks} />
          <FooterLinksContent title="Help" links={helpLinks} />
          <ContactUsSection />
        </div>
        <CopyRightsSection />
      </Container>
    </footer>
  );
}
