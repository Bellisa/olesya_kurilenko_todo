import './aside.scss';
import { ComButton } from '../Components/ComButton';
import { ComUserTasksInfo } from '../Components/ComUserTasksInfo';
import { ComGeolocation } from '../Components/ComGeolocation';

export const Aside = () => (
  <aside className="col-md-2 my-3 p-3 bg-white rounded box-shadow">
    <div className="flex-md-row mb-4">
      <div className="d-flex flex-column align-items-start">
        <ComButton />
        <ComUserTasksInfo />
        <ComGeolocation />
      </div>
    </div>
  </aside>
);

