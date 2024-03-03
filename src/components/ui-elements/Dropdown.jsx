function Dropdown({ onChange, values, id, keyName }) {
  const localOnChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="dropdown-container">
      <select className="dropdown-select" value={id} onChange={localOnChange}>
        {values.map((value, index) => {
          return (
            <option
              key={index}
              value={value[keyName]}
              onClick={() => onChange(value[keyName])}
            >
              {value[keyName]}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Dropdown;
