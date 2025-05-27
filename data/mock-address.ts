import { Address } from "@/types/address";

export const mockAddresses: Address[] = [
  {
    id: "1",
    type: "Home",
    name: "John Doe",
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States",
    isDefault: true,
  },
  {
    id: "2",
    type: "Work",
    name: "John Doe",
    street: "456 Business Ave",
    city: "New York",
    state: "NY",
    zipCode: "10002",
    country: "United States",
    isDefault: false,
  },
];