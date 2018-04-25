import { NavLink } from 'react-router-dom';
import './todoRows.scss';

export const TodoRows = (props) => {
  if (props.todo.done) {
    return (
      <div className="clearfix">
        <NavLink
          to={{
            pathname: `/tasks/${props.todo.id}?day=${props.todo.day}`,
            state: props.todo
          }}
        >
          <span className="todo-compl" >
            {props.todo.title}
          </span>
        </NavLink>
      </div>);
  }
  if (props.todo.done === false) {
    return (
      <div className="clearfix">
        <NavLink
          to={{
            pathname: `/tasks/${props.todo.id}?day=${props.todo.day}`,
            state: props.todo
          }}
        >
          <span className="todo-proc" >
            {props.todo.title}
          </span>
        </NavLink>
      </div>);
  }
  return (
    <div className="clearfix content-short">
      <NavLink
        to={{
          pathname: `/tasks/${props.todo.id}?day=${props.todo.day}`,
          state: props.todo
        }}
      >
        <span className="todo-wait" >
          {props.todo.title}
        </span>
      </NavLink>

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

