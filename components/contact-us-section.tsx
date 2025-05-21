import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react'

const ContactUsSection = () => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Contact Us</h3>
      <ul className="space-y-4">
        <li className="flex items-start">
          <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary" />
          <span className="text-muted-foreground">
            123 Fashion Street, New York, NY 10001, USA
          </span>
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
  );
}

export default ContactUsSection