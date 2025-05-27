export type PaymentMethod = {
  id: string;
  type: string;
  last4: string;
  expiryMonth: string;
  expiryYear: string;
  isDefault: boolean;
  icon: string;
};
