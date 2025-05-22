import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';

const MembershipBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-muted">
      <div className="absolute inset-0 z-0">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/banner/membership.jpg`}
          alt="Membership background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2">Join Our Membership</h3>
          <p className="text-muted-foreground mb-4">
            Get exclusive access to new arrivals, special offers, and events.
          </p>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <svg
                className="h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-sm">Early access to sales</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <svg
                className="h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-sm">Free shipping on all orders</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipBanner