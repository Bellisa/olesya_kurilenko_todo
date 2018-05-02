import { NavLink } from 'react-router-dom';
import './todoRows.scss';

export const TodoRows = (props) => {
  if (props.todo.done) {
    return (
      <div className="clearfix">
        <span className="todo-compl" >
          {props.todo.title}
        </span>
      </div>);
  }
  if (props.todo.done === false) {
    return (
      <div className="clearfix  content-short">
        <NavLink
          to={{
            pathname: `/tasks/${props.todo.id}`,
            state: props.todo
          }}
        >
          <span className="todo-proc" >
            {props.todo.title}
          </span>
        </NavLink>
        <span
          title={props.actions[1]}
          className="todo-compl-right"
          aria-hidden="true"
          onClick={() => props.onTodoClick(props.todo, props.actions[1])}
        />
      </div>);
  }
  return (
    <div className="clearfix content-short">
      <NavLink
        to={{
          pathname: `/tasks/${props.todo.id}`,
          state: props.todo
        }}
      >
        <span className="todo-wait">
          {props.todo.title}
        </span>
      </NavLink>

      <span
        title={props.actions[0]}
        className="todo-del-right"
        aria-hidden="true"
        onClick={() => (props.onTodoClick ? props.onTodoClick(props.todo, props.actions[0]) : _ => _)}
      />
      <span
        title={props.actions[1]}
        className="todo-compl-right"
        aria-hidden="true"
        onClick={() => props.onTodoClick(props.todo, props.actions[1])}
      />
      <span
        title={props.actions[2]}
        className="todo-proc-right"
        aria-hidden="true"
        onClick={() => props.onTodoClick(props.todo, props.actions[2])}
      />
    </div >
  );
};

