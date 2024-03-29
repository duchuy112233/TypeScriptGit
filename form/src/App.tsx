import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import { Route, Routes } from "react-router-dom";
import { Product } from "./types/Product";
import { useEffect, useState } from "react";
import instance from "./apis";

import About from "./components/About";
import ProductDetail from "./pages/productDetail";
import Dashboard from "./pages/admin/Dashboard";

const App = () => {
  ///// Hiển thị
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/products");
      setProducts(data);
    })();
  }, []);
  /////

  return (
    <>
      <Header />
      <main className="mt-8 bg-white color-text mt-24">
        <div className="max-w-screen-xl mx-auto pt-[14px] flex pb-16">
          <div className="content grow">
            <Routes>
              <Route index element={<Home products={products} />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop/:id" element={<ProductDetail />} />
              {/* admin */}
              <Route path="/admin">
                <Route index element={<Dashboard products={products} />} />
              </Route>
              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;

<>
  <Header />
  <main className="mt-8 bg-white color-text mt-24">
    <div className="max-w-screen-xl mx-auto pt-[14px] flex pb-16">
      <div className="content grow"></div>
    </div>
  </main>
  <Footer />
</>;
