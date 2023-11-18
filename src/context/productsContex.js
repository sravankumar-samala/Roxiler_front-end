import { useState, useContext, createContext } from "react";

const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [month, setMonth] = useState(3);
  const [currPage, setCurrPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const updateSearchValue = (event) => setSearchValue(event.target.value);

  const updateMonth = (event) => {
    setMonth(event.target.value);
    setCurrPage(1);
  };

  const nextPage = () => setCurrPage((prev) => prev + 1);

  const prevPage = () => setCurrPage((prev) => prev - 1);

  const changeLimit = (e) => setLimit(e.target.value);

  return (
    <ProductsContext.Provider
      value={{
        searchValue,
        month,
        currPage,
        updateSearchValue,
        updateMonth,
        nextPage,
        prevPage,
        limit,
        changeLimit,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

function useProductsContext() {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("Context was used outside the Context Provider.");
  }
  return context;
}

// export custom context hook and context provider
export { useProductsContext, ProductsContextProvider };
