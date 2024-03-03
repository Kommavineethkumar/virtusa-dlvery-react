import InnerTableActions from "./InnerTableActions";

function CategoryTableRow({
  index,
  row,
  headers,
  clickCheckbox,
  callInnerTableAction,
}) {
  return (
    <tr key={"row_" + index} className="text-white">
      <td className="w-8 pl-6">
        <input
          id={"checkbox" + index}
          type="checkbox"
          className="checkbox peer hidden"
          onClick={() => {
            clickCheckbox(index, row);
          }}
        />
        <label
          htmlFor={"checkbox" + index}
          className="relative flex h-5 w-5 cursor-pointer items-center justify-center overflow-hidden rounded border border-gray-400 bg-blue-500 p-0.5 before:absolute before:block before:h-full before:w-full before:bg-white peer-checked:before:hidden"
        ></label>
      </td>
      {headers.map((header, headerIndex) => {
        return header.element === "actions" ? (
          <InnerTableActions
            key={"row_actions_" + headerIndex}
            header={header}
            row={row}
            callInnerTableAction={callInnerTableAction}
          />
        ) : (
          <td
            key={"row_" + headerIndex + "_col_" + headerIndex}
            className={
              "mandali-regular px-6 py-4 text-sm " +
              (header.class ? header.class : "")
            }
          >
            {row[header.value_key]}
          </td>
        );
      })}
    </tr>
  );
}

export default CategoryTableRow;
