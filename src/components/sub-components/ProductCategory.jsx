import { useState, useEffect } from "react";
import "../../assets/css/table.css";
import ProductCategoryInfo from "../ui-components/ProductCategoryInfo";
import CategoryTable from "../ui-components/CategoryTable";
import { useAppContext } from "../../common/DataProvider";

function ProductManagement() {
  const { data, updateData, getValueFromContext } = useAppContext();
  const [categoryData, setCategoryData] = useState({});
  useEffect(() => {
    async function fetchCategories() {
      await getValueFromContext("categories");
    }
    fetchCategories();
  }, []);
  const [isOpenAdd, setIsOpenAdd] = useState(false);

  const openAdd = () => {
    setIsOpenAdd(true);
  };

  const closeAdd = () => {
    setIsOpenAdd(false);
  };

  const editCategory = (row) => {
    console.log("editCategory12");
    setIsOpenAdd(true);
    setCategoryData(row);
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
        <div className="page-title">Product Categories</div>
      </div>

      <div className="page-content">
        <div className="table-actions">
          <div className="table-action" onClick={openAdd}>
            <img
              className="inline-block"
              src="https://img.icons8.com/?size=25&id=102544&format=png"
            />
            <div className="action-name"> Add </div>
          </div>
          <div className="table-action">
            <img
              className="inline-block"
              src="https://img.icons8.com/?size=23&id=102550&format=png"
            />
            <div className="action-name"> Delete </div>
          </div>
        </div>
        <CategoryTable
          rows={data.categories}
          callInnerTableAction={callInnerTableAction}
        />
      </div>

      {isOpenAdd && (
        <ProductCategoryInfo
          closeModal={closeAdd}
          categoryData={categoryData}
        />
      )}
    </div>
  );
}

export default ProductManagement;
