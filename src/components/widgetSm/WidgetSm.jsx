import { Visibility } from '@material-ui/icons';
import './widgetSm.css';

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Neww Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://i.pinimg.com/550x/4d/72/97/4d7297dad94265c0acbc3b677d418935.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anne Padora</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://i.pinimg.com/550x/4d/72/97/4d7297dad94265c0acbc3b677d418935.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anastasiya Belki</span>
            <span className="widgetSmUserTitle">Musician</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://i.pinimg.com/550x/4d/72/97/4d7297dad94265c0acbc3b677d418935.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Makola Kalkin</span>
            <span className="widgetSmUserTitle">Butcher</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://i.pinimg.com/550x/4d/72/97/4d7297dad94265c0acbc3b677d418935.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Patrick Stevera</span>
            <span className="widgetSmUserTitle">Project Manager</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://i.pinimg.com/550x/4d/72/97/4d7297dad94265c0acbc3b677d418935.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kelly Padora</span>
            <span className="widgetSmUserTitle">Web Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
