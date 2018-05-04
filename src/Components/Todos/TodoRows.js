import { NavLink } from 'react-router-dom';
import './todoRows.scss';
import { actions } from '../../constants';

const getClassNameByDone = (done) => {
  switch (done) {
    case true:
      return 'todo-compl';
    case false:
      return 'todo-proc';
    default:
      return 'todo-wait';
  }
};

const getClassNameByAction = (action) => {
  switch (action) {
    case actions.delete:
      return 'todo-del-right';
    case actions.complete:
      return 'todo-compl-right';
    case actions.processing:
      return 'todo-proc-right';
    default:
      return 'todo-wait';
  }
};
const isSpanShow = (action, done) => {
  switch (action) {
    case actions.delete:
      return (done === undefined);
    case actions.complete:
      return (done === undefined || done === false);
    case actions.processing:
      return (done === undefined);
    default:
      return false;
  }
};
export const TodoRows = props => (
  <div className="clearfix content-short">
    {
      props.todo.done ? (
        <span className={getClassNameByDone(props.todo.done)}>
          {props.todo.title}
        </span>
      ) :
        (
          <NavLink to={`/tasks/${props.todo.id}`}>
            <span className={getClassNameByDone(props.todo.done)}>
              {props.todo.title}
            </span>
          </NavLink>
        )
    }
    {
      Object.getOwnPropertyNames(actions).map(act => (isSpanShow(act, props.todo.done) ? (<span
        key={`${act}${props.todo.done}${props.todo.id}`}
        title={act}
        className={getClassNameByAction(act)}
        aria-hidden="true"
        onClick={() => (props.onTodoClick ? props.onTodoClick(props.todo, act) : _ => _)}
      />) : null))
    }
  </div >
);

