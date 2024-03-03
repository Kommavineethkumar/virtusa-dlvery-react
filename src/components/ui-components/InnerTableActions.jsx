function InnerTableActions({ header, row, callInnerTableAction }) {
  return (
    <td className={"inner-table-actions " + header.class}>
      {header.data.actions.map((action, index) => {
        return (
          <div
            onClick={() => {
              callInnerTableAction(action, row);
            }}
            key={"row_table_action_" + index}
            className={"table-action " + action.class}
          >
            <img className="inline-block" src={action.icon} alt={action.name} />
            <div className="action-name"> {action.name} </div>
          </div>
        );
      })}
    </td>
  );
}

export default InnerTableActions;
