import "./Products.scss";
import products from "../../data/products.json";
import ProductCard from "../../components/ui/products/ProductCard/ProductCard";
import Breadcrumbs from "../../components/ui/BreadCrumbs/BreadCrumbs";
import SectionHeader from "../../components/ui/SectionHeader/SectionHeader";

const Products = () => {
  return (
    <main>
     <section className="products-grid">
  {products.map((product) => (
    <ProductCard
      key={product.slug}
      product={product}
    />
  ))}
</section>
    </main>
  );
};
export default Products;
