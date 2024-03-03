import { useState, useEffect } from "react";
import "../../assets/css/table.css";
import ProductInfo from "../ui-components/ProductInfo";
import ProductsTable from "../ui-components/ProductsTable";
import { useAppContext } from "../../common/DataProvider";

function ProductManagement() {
  const { data, updateData, getValueFromContext } = useAppContext();
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      await getValueFromContext("products");
    }
    fetchProducts();
  }, []);
  const [isOpenAdd, setIsOpenAdd] = useState(false);

  const openAdd = () => {
    setIsOpenAdd(true);
  };

  const closeAdd = () => {
    console.log("closeAdd");
    setIsOpenAdd(false);
  };

  const editProduct = (row) => {
    console.log("editProduct", row);
    setIsOpenAdd(true);
    setProductData(row);
  };

  const callInnerTableAction = (action, row) => {
    console.log(action, row);
    console.log(action.action);
    if (typeof eval(action.action) === "function") {
      eval(action.action)(row);
    }
  };

  return (
    <div className="page-pane">
      <div className="mandali-regular page-header">
        <div className="page-title">Product List</div>
      </div>

      <div className="page-content">
        <div className="table-actions">
          <div className="table-action" onClick={openAdd}>
            <img
              className="inline-block"
              src="https://img.icons8.com/?size=25&id=102544&format=png"
              alt="Add"
            />
            <div className="action-name"> Add </div>
          </div>
          <div className="table-action">
            <img
              className="inline-block"
              src="https://img.icons8.com/?size=23&id=102550&format=png"
              alt="Delete"
            />
            <div className="action-name"> Delete </div>
          </div>
        </div>
        <ProductsTable
          rows={data.products}
          callInnerTableAction={callInnerTableAction}
        />
      </div>

      {isOpenAdd && (
        <ProductInfo closeModal={closeAdd} productData={productData} />
      )}
    </div>
  );
}

export default ProductManagement;
