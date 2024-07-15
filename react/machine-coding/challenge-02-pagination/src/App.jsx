import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { formatPages } from "./libs/format-pages";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(
    parseInt(localStorage.getItem("currentPage")) || 1
  );
  const [totalPages, setTotalPages] = useState(0);

  const [showPages, setShowPages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          (page - 1) * 20
        }&select=title,images`
      );
      const data = await res.json();

      if (data && data.products) {
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / 20));
      }
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    if (totalPages > 0) {
      console.log(totalPages);
      const pages = formatPages(totalPages, page);
      console.log("Show Pages", pages);
      setShowPages(pages);
    }
  }, [totalPages, page]);

  useEffect(() => {
    localStorage.setItem("currentPage", page.toString());
  }, [page]);

  return (
    <main>
      <h2>All Products</h2>
      <div className="products">
        {products.length > 0 &&
          products.map((product) => (
            <div key={product.id} className="product">
              <div className="product__img">
                <img src={product.images[0] || ""} alt={product.title} />
              </div>
              <h3 className="product__title">{product.title}</h3>
            </div>
          ))}
      </div>
      {totalPages > 0 && (
        <div className="pagination">
          <button
            className="previous"
            disabled={page === 1}
            onClick={() => {
              setPage(page - 1);
            }}
          >
            <ArrowLeft className="icon" />
          </button>
          <div className="current">
            {showPages.map((val, i) => (
              <span
                key={val}
                onClick={() => {
                  setPage(val);
                }}
                className={`${page === val ? "selected" : ""}`}
              >
                {val}
              </span>
            ))}
          </div>
          <button
            className="next"
            disabled={page === totalPages}
            onClick={() => {
              setPage(page + 1);
            }}
          >
            <ArrowRight className="icon" />
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
