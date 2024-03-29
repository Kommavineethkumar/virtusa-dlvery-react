import "../../assets/css/table.css";
import "../../assets/css/common.css";
import TablePagination from "./TablePagination";
import ProductTableRow from "./ProductTableRow";
import TableHeader from "./TableHeader";

function ProductsTable({ rows = [], callInnerTableAction }) {
  const headers = [
    {
      name: "Product Id",
      value_key: "productId",
      class: "max-w-20",
    },
    {
      name: "Product Name",
      type: "text",
      value_key: "productName",
    },
    {
      name: "Actions",
      value_key: "actions",
      class: "max-w-2",
      element: "actions",
      data: {
        actions: [
          {
            name: "Edit",
            icon: "https://img.icons8.com/?size=23&id=8rqSU6umQzpk&format=png",
            action: "editProduct",
            class: "max-w-fit",
          },
        ],
      },
    },
    {
      name: "Expiry Date",
      value_key: "expiryDate",
    },
  ];

  const clickCheckbox = (index, row) => {
    if (index === "main") {
      for (let i = 0; i < rows.length; ++i) {
        document.getElementById("checkbox" + i).checked =
          document.getElementById("checkbox").checked;
      }
    } else {
      document.getElementById("checkbox" + index).checked = true;
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full font-[sans-serif]">
          <thead className="whitespace-wrap">
            <TableHeader headers={headers} clickCheckbox={clickCheckbox} />
          </thead>
          <tbody className="whitespace-nowrap">
            {rows.map((row, index) => {
              return (
                <ProductTableRow
                  key={"row_" + index}
                  row={row}
                  headers={headers}
                  index={index}
                  clickCheckbox={clickCheckbox}
                  callInnerTableAction={callInnerTableAction}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      {/* <TablePagination /> */}
    </div>
  );
}

export default ProductsTable;
