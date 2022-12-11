import Navbar from "../../components/navbar/Navbar";
import LeftSide from "../../components/leftSide/LeftSide";
import FeedVet from "../../components/feedVet/FeedVet";
import EventFeed from "../../components/eventFeed/EventFeed";
import "./home.css";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="containerHome">
        <EventFeed />
        <FeedVet />
        <Rightbar />
      </div>
    </>
  );
}
