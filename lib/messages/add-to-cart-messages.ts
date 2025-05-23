export const addToCartMessages = {
  loginRequiredTitle: "Please login",
  loginRequiredDescription: "You need to login to add items to your cart",
  addedToCartTitle: "Added to cart",
  addedToCartDescription: (productName: string) =>
    `${productName} has been added to your cart`,
  itemRemovedTitle: "Item removed",
  itemRemovedDescription: "The item has been removed from your cart",
  inValidPromoCodeTitle: "Invalid promo code",
  invalidPromoCodeDescription:
    "The promo code you entered is invalid or expired",
  emptyCartTitle: "Your cart is empty",
  emptyCartDescription:
    "Your cart is empty, add some items to your cart before checking out",
};

