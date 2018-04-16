import { Tabs, Tab } from './Tabs/';
import { tasksInWeek } from './tasksInWeek';

export const TaskList = () => {
  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];


  return (
    <Tabs>
      {tasksInWeek.map((tasks, index) =>
        (<Tab
          key={index}
          title={days[index]}
        >
          <ol>
            {tasks.map(task => <li key={task.id} >{task.title}</li>)}
          </ol>
          <button>Add</button>
         </Tab>))
      }
    </Tabs>
  );
};
