import Link from 'next/link';
import React from 'react'

const CopyRightsSection = () => {
  return (
    <div className="border-t mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center">
      <p className="text-muted-foreground text-sm mb-4 lg:mb-0">
        &copy; {new Date().getFullYear()} Elegance. All rights reserved.
      </p>
      <p className="text-muted-foreground text-sm mb-4 lg:mb-0">
        Designed and developed by Rajendar
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center md:space-x-4">
        <Link
          href="/privacy-policy"
          className="text-sm text-muted-foreground hover:text-primary mb-4 lg:mb-0"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms-of-service"
          className="text-sm text-muted-foreground hover:text-primary mb-4 lg:mb-0"
        >
          Terms of Service
        </Link>
        <Link
          href="/accessibility"
          className="text-sm text-muted-foreground hover:text-primary mb-4 lg:mb-0"
        >
          Accessibility
        </Link>
      </div>
    </div>
  );
}

export default CopyRightsSection