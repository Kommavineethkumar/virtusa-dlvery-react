function TableHeader({ headers, clickCheckbox }) {
  return (
    <tr>
      <th className="w-8 pl-6">
        <input
          id="checkbox"
          type="checkbox"
          className="peer hidden"
          onClick={() => {
            clickCheckbox("main");
          }}
        />
        <label
          htmlFor="checkbox"
          className="relative flex h-5 w-5 cursor-pointer items-center justify-center overflow-hidden rounded border border-gray-400 bg-blue-500 p-0.5 before:absolute before:block before:h-full before:w-full before:bg-white peer-checked:before:hidden"
        ></label>
      </th>
      {headers.map((header, index) => {
        return (
          <th
            key={"header_" + index}
            className="mandali-regular text-md px-6 py-4 text-left font-semibold"
          >
            {header.name}
          </th>
        );
      })}
    </tr>
  );
}

export default TableHeader;
