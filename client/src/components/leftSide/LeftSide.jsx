import "./leftSide.css";
import { Group, Bookmark, DynamicFeed } from "@material-ui/icons";

export default function LeftSide() {
  return (
    <div className="leftLeftSide">
      <div className="leftSideContainer">
        <ul className="leftSideList">
          <li className="leftSideListItem">
            <DynamicFeed className="leftSideIcon" />
            <span className="leftSideListItemText">FeedVet</span>
          </li>
          <li className="leftSideListItem">
            <Group className="leftSideIcon" />
            <span className="leftSideListItemText">Groups</span>
          </li>
          <li className="leftSideListItem">
            <Bookmark className="leftSideIcon" />
            <span className="leftSideListItemText">Events</span>
          </li>
        </ul>
        <hr className="leftSideHr" />
        <img className="Ad" src="assets/ad1.jpg" />
        <img className="Ad" src="assets/ad1.jpg" />
        <img className="Ad" src="assets/ad1.jpg" />
      </div>
    </div>
  );
}
