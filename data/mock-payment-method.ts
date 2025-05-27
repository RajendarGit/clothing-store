import { PaymentMethod } from "@/types/payment-method";

export const mockPaymentMethods: PaymentMethod[] = [
  {
    id: "1",
    type: "Visa",
    last4: "4242",
    expiryMonth: "12",
    expiryYear: "2025",
    isDefault: true,
    icon: "fa-brands fa-cc-visa",
  },
  {
    id: "2",
    type: "Mastercard",
    last4: "8888",
    expiryMonth: "06",
    expiryYear: "2026",
    isDefault: false,
    icon: "fa-brands fa-cc-mastercard",
  },
];