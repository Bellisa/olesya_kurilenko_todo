export const ComTodoRow = (props) => {
  if (props.todo.completed) {
    return (<div className="todoCompl"><span>{props.todo.title}</span></div>);
  }
  return (
    <div className="todoNoCopl">
      <span>{props.todo.title}</span>
      <span className="glyphicon glyphicon-remove" onClick={() => props.onTodoClick(props.todo.id, props.actions[0])} >X</span>
      <span className="glyphicon glyphicon-ok" onClick={() => props.onTodoClick(props.todo.id, props.actions[1])} >V</span>
      <span className="glyphicon glyphicon-refresh" onClick={() => props.onTodoClick(props.todo.id, props.actions[2])} >~</span>
    </div>
  );
};
