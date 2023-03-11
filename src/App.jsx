import Header from "./componente/Header";
import ProductList from "./componente/ProductList";
import { useState } from "react";

function App() {
  const [allProduct, setAllProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProduct, setCountProduct] = useState(0);
  return (
    <div className="papo">
      <Header
        allProduct={allProduct}
        setAllProduct={setAllProduct}
        total={total}
        setTotal={setTotal}
        countProduct={countProduct}
        setCountProduct={setCountProduct}
      />
      <ProductList
        allProduct={allProduct}
        setAllProduct={setAllProduct}
        total={total}
        setTotal={setTotal}
        countProduct={countProduct}
        setCountProduct={setCountProduct}
      />
    </div>
  );
}
export default App;
