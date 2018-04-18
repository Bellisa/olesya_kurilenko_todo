import './todoRows.scss';

export const TodoRows = (props) => {
  if (props.todo.done) {
    return (<div className="clearfix"><span className="todo-compl">{props.todo.title}</span></div>);
  }
  if (props.todo.done === false) {
    return (<div className="clearfix"><span className="todo-proc">{props.todo.title}</span></div>);
  }
  return (
    <div className="clearfix content-short">
      <span className="todo-wait" >{props.todo.title}</span>
      <span
        className="todo-del-right"
        aria-hidden="true"
        onClick={() => (props.onTodoClick ? props.onTodoClick(props.todo.id, props.actions[0]) : _ => _)}
      />
      <span
        className="todo-compl-right"
        aria-hidden="true"
        onClick={() => props.onTodoClick(props.todo.id, props.actions[1])}
      />
      <span
        className="todo-proc-right"
        aria-hidden="true"
        onClick={() => props.onTodoClick(props.todo.id, props.actions[2])}
      />
    </div >
  );
};

