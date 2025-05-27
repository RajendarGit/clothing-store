export type Orders = {
  id: string;
  date: string;
  status: string;
  total: number;
  items: number;
  trackingNumber: string | null;
};