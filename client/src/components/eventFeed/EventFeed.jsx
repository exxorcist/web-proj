import { useContext, useEffect, useState } from "react";
import Event from "../event/Event";
import EventShare from "../eventShare/EventShare";
import "./eventFeed.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function EventFeed({ username }) {
  const [events, setEvents] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = username
        ? await axios.get("/events/profile/" + username)
        : await axios.get("events/timeline/" + user._id);
      setEvents(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchEvents();
  }, [username, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <EventShare />}
        {events.map((p) => (
          <Event key={p._id} event={p} />
        ))}
      </div>
    </div>
  );
}
