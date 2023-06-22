import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()
  return (
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi neque, sapiente soluta ea sequi ipsa velit deleniti temporibus iste ipsam! Corporis ipsam ab vitae impedit minima voluptatibus eaque doloremque temporibus.</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}