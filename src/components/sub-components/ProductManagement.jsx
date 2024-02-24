import { useState } from "react";
import "../../assets/css/table.css";
import ProductInfo from "../ui-components/ProductInfo";

function ProductManagement() {

  const [isOpenAdd, setIsOpenAdd] = useState(false);

  const openAdd = () => {
    console.log("openAdd");
    setIsOpenAdd(true);
  };

  return (
    <div className="page-pane">
      <div className="mandali-regular page-header">
        <div className="page-title">Products List</div>
      </div>

      <div className="page-content">
        <div className="table-actions">
          <div className="table-action" onClick={openAdd}><img className="inline-block" src="https://img.icons8.com/?size=25&id=102544&format=png"/> Add </div>
          <div className="table-action"><img className="inline-block" src="https://img.icons8.com/?size=25&id=102544&format=png" /> Edit </div>
          <div className="table-action"><img className="inline-block" src="https://img.icons8.com/?size=25&id=102544&format=png" /> Delete</div>
        </div>
        <div className="table-body">
          <table>
            <thead>
              <th>
                <tr>
                  <td>Product Name</td>
                </tr>
                <tr>
                  <td>Product Category</td>
                </tr>
                <tr>Product Type</tr>
                <tr>Modified By</tr>
                <tr>Modified Time</tr>
              </th>
            </thead>
            <tbody>
              <tr>
                <td>iPhone 15 Pro</td>
                <td>Electronics</td>
                <td>Mobile</td>
                <td>John Doe</td>
                <td>2021-10-10 10:10:10</td>
              </tr>
              <tr>
                <td>iPhone 15 Pro</td>
                <td>Electronics</td>
                <td>Mobile</td>
                <td>John Doe</td>
                <td>2021-10-10 10:10:10</td>
              </tr>
              <tr>
                <td>iPhone 15 Pro</td>
                <td>Electronics</td>
                <td>Mobile</td>
                <td>John Doe</td>
                <td>2021-10-10 10:10:10</td>
              </tr>
              <tr>
                <td>iPhone 15 Pro</td>
                <td>Electronics</td>
                <td>Mobile</td>
                <td>John Doe</td>
                <td>2021-10-10 10:10:10</td>
              </tr>
              <tr>
                <td>iPhone 15 Pro</td>
                <td>Electronics</td>
                <td>Mobile</td>
                <td>John Doe</td>
                <td>2021-10-10 10:10:10</td>
              </tr>
              <tr>
                <td>iPhone 15 Pro</td>
                <td>Electronics</td>
                <td>Mobile</td>
                <td>John Doe</td>
                <td>2021-10-10 10:10:10</td>
              </tr>
              <tr>
                <td>iPhone 15 Pro</td>
                <td>Electronics</td>
                <td>Mobile</td>
                <td>John Doe</td>
                <td>2021-10-10 10:10:10</td>
              </tr>
              <tr>
                <td>iPhone 15 Pro</td>
                <td>Electronics</td>
                <td>Mobile</td>
                <td>John Doe</td>
                <td>2021-10-10 10:10:10</td>
              </tr>
              <tr>
                <td>iPhone 15 Pro</td>
                <td>Electronics</td>
                <td>Mobile</td>
                <td>John Doe</td>
                <td>2021-10-10 10:10:10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {isOpenAdd && <ProductInfo />}

    </div>
  );
}

export default ProductManagement;
