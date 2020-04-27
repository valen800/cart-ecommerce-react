import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import TopMenu from "./components/TopMenu";
import Products from "./components/Products";
import useFetch from "./hooks/useFetch";
import { urlApiProducts, STORAGE_PRODUCT_CART } from "./utils/constants";

function App() {
  const products = useFetch(urlApiProducts, null);
  const [productsCard, setProductsCard] = useState([]);

  useEffect(() => {
    getProductsCart();
  }, []);

  const getProductsCart = () => {
    const idsProducts = localStorage.getItem(STORAGE_PRODUCT_CART);

    if (idsProducts) {
      const idsProductsSplit = idsProducts.split(",");
      setProductsCard(idsProductsSplit);
    } else {
      setProductsCard([]);
    }
  };

  const addProductCard = (id, name) => {
    const idsProducts = productsCard;
    idsProducts.push(id);
    setProductsCard(idsProducts);
    localStorage.setItem(STORAGE_PRODUCT_CART, productsCard);

    toast.success(`${name} añadido al carrito correctamente`);
  };

  return (
    <div className="App">
      <TopMenu />
      <Products products={products} addProductCard={addProductCard} />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
