import { useParams } from "react-router-dom";
import products from "../../data/products.json";
import SectionHeader from "../../components/ui/SectionHeader/SectionHeader";

function ProductDetail() {

const { slug } = useParams();

  const product = products.find(
    (product) => product.slug === product.slug
  );

  if (!product) {
    return <h1>Producto no encontrado</h1>;
  }

  return (
    <div>

      <img
        src={product.image}
        alt={product.name}
      />

      <h1>{product.name}</h1>

      <p>${product.price}</p>

      <p>{product.description}</p>

      <button>
        Agregar al carrito
      </button>

    </div>
  );

}

export default ProductDetail;