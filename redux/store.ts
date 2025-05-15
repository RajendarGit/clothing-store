import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./features/cart-slice"
import authReducer from "./features/auth-slice"
import wishlistReducer from "./features/wishlist-slice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    wishlist: wishlistReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
