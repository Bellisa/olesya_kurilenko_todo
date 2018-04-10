export const ComTodoRow = (props) => {
  if (props.todo.completed) {
    return (<div className="todoCompl"><span>{props.todo.title}</span></div>);
  }
  return (
    <div className="todoNoCopl">
      <span>{props.todo.title}</span>
      <span className="glyphicon glyphicon-remove" aria-hidden="true" onClick={() => (props.onTodoClick ? props.onTodoClick(props.todo.id, props.actions[0]) : _ => _)} >X</span>
      <span className="glyphicon glyphicon-ok" aria-hidden="true" onClick={() => props.onTodoClick(props.todo.id, props.actions[1])} >V</span>
      <span className="glyphicon glyphicon-refresh" aria-hidden="true" onClick={() => props.onTodoClick(props.todo.id, props.actions[2])} >~</span>
    </div >
  );
};

