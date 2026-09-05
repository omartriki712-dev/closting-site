import { toast } from "sonner"
import type { Product } from "./catalog"

export function addProductToCart(product: Pick<Product, "name" | "price" | "image">) {
  const match = document.cookie.match(/(?:^|; )shop_cart=([^;]*)/)
  const cart = match ? JSON.parse(decodeURIComponent(match[1])) : []
  const next = [...cart, { id: Date.now(), name: product.name, price: product.price, image: product.image, quantity: 1 }]
  document.cookie = `shop_cart=${encodeURIComponent(JSON.stringify(next))}; path=/; max-age=2592000`
  toast.success(`${product.name} added to your cart`, {
    description: "You can review your items from the cart.",
    action: { label: "View cart", onClick: () => { window.location.href = "/cart" } },
  })
}
