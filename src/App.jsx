import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import Home from "@/views/Home/Home";
import Products from "@/views/Products/Products";
import ProductDetail from "@/views/ProductDetail/ProductDetail";
import Contact from "@/views/Contact/Contact";
import MainContainer from "@/components/MainContainer/MainContainer";

import sections from "@/data/sections.json";
import products from "@/data/products.json";

import "@/App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";


function AppContent() {
  const location = useLocation();

  let section = sections[location.pathname];

  if (location.pathname.startsWith("/productos/")) {
    const slug = location.pathname.split("/")[2];

    const product = products.find(
      (product) => product.slug === slug
    );

    section = {
      currentSection: "Productos",
      currentProduct: product ? product.name : "Producto",
      sectionTitle: product ? product.name : "Producto",
    };
  }  

  return (
    <>
      <Header />

      {section && (
        <SectionHeader
  currentSection={section.currentSection}
  currentProduct={section.currentProduct}
  sectionTitle={section.sectionTitle}
/>
      )}

      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:slug" element={<ProductDetail />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </MainContainer>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;