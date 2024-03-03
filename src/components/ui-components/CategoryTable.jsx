import "../../assets/css/table.css";
import "../../assets/css/common.css";
import TablePagination from "./TablePagination";
import CategoryTableRow from "./CategoryTableRow";
import TableHeader from "./TableHeader";

function CategoryTable({ rows = [], callInnerTableAction }) {
  const headers = [
    {
      name: "Category Id",
      value_key: "categoryId",
      class: "max-w-20",
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
            class: "max-w-fit",
            action: "editCategory",
          },
        ],
      },
    },
    {
      name: "Category Name",
      value_key: "categoryName",
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
                <CategoryTableRow
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

export default CategoryTable;
