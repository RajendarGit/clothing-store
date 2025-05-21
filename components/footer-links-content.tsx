import Link from "next/link";
import React, { FC } from "react";

interface FooterLinksContentProps {
  title: string;
  links: {
    href: string;
    label: string;
  }[];
}

const FooterLinksContent: FC<FooterLinksContentProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-muted-foreground hover:text-primary"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinksContent;

