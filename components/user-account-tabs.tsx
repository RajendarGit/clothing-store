import React from 'react'
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { User, Package, MapPin, CreditCard, Settings } from "lucide-react";
import UserProfileSection from './user-profile-section';
import UserOrderSection from './user-order-section';
import UserAddressSection from './user-address-section';
import UserPaymentSection from './user-payment-section';
import UserSettingSection from './user-setting-section';

const tabs = [
  {
    value: "profile",
    label: "Profile",
    icon: <User className="h-4 w-4" />,
    content: <UserProfileSection />,
  },
  {
    value: "orders",
    label: "Orders",
    icon: <Package className="h-4 w-4" />,
    content: <UserOrderSection />,
  },
  {
    value: "addresses",
    label: "Addresses",
    icon: <MapPin className="h-4 w-4" />,
    content: <UserAddressSection />,
  },
  {
    value: "payments",
    label: "Payments",
    icon: <CreditCard className="h-4 w-4" />,
    content: <UserPaymentSection />,
  },
  {
    value: "settings",
    label: "Settings",
    icon: <Settings className="h-4 w-4" />,
    content: <UserSettingSection />,
  },
];

const UserAccountTabs = () => {
  return (
    <Tabs defaultValue="profile" className="space-y-6">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
        {tabs.map(({ value, label, icon }) => (
          <TabsTrigger
            key={value}
            value={value}
            className="flex items-center gap-2"
          >
            {icon}
            <span className="hidden sm:inline">{label}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map(({ value, content }) => (
        <TabsContent key={value} value={value}>
          {content}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default UserAccountTabs