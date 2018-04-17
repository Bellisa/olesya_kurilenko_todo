import './todoRows.scss';

export const TodoRows = (props) => {
  if (props.todo.done) {
    return (<div className="clearfix"><span className="todoCompl">{props.todo.title}</span></div>);
  }
  if (props.todo.done === false) {
    return (<div className="clearfix"><span className="todoProc">{props.todo.title}</span></div>);
  }
  return (
    <div className="clearfix">
      <span className="todoWait" >{props.todo.title}</span>
      <span
        className="todoDelRight"
        aria-hidden="true"
        onClick={() => (props.onTodoClick ? props.onTodoClick(props.todo.id, props.actions[0]) : _ => _)}
      />
      <span
        className="todoComplRight"
        aria-hidden="true"
        onClick={() => props.onTodoClick(props.todo.id, props.actions[1])}
      />
      <span
        className="todoProcRight"
        aria-hidden="true"
        onClick={() => props.onTodoClick(props.todo.id, props.actions[2])}
      />
    </div >
  );
};

