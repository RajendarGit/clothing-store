import { Orders } from "@/types/orders";

export const mockOrders: Orders[] = [
  {
    id: "ORD-001",
    date: "2024-05-15",
    status: "Delivered",
    total: 129.99,
    items: 3,
    trackingNumber: "TRK123456789",
  },
  {
    id: "ORD-002",
    date: "2024-05-10",
    status: "Shipped",
    total: 89.5,
    items: 2,
    trackingNumber: "TRK987654321",
  },
  {
    id: "ORD-003",
    date: "2024-05-05",
    status: "Processing",
    total: 199.99,
    items: 4,
    trackingNumber: null,
  },
];