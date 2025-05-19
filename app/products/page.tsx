import PageHero from '@/components/page-hero'
import ProductGrid from '@/components/product-grid';
import Container from '@/components/ui/container'
import { dummyProducts } from '@/data/products'

const Poducts = () => {
  return (
    <>
      <PageHero
        title="All Products"
        description="Explore our wide range of products."
      />
      <Container>
        <ProductGrid
          products={dummyProducts}
        />
      </Container>
    </>
  );
}

export default Poducts
