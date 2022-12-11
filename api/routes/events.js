const router = require("express").Router();
const Event = require("../models/Event");
const User = require("../models/User");

//create a event

router.post("/", async (req, res) => {
  const newEvent = new Event(req.body);
  try {
    const savedEvent = await newEvent.save();
    res.status(200).json(savedEvent);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update a event

router.put("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (event.userId === req.body.userId) {
      await event.updateOne({ $set: req.body });
      res.status(200).json("the event has been updated");
    } else {
      res.status(403).json("you can update only your event");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//delete a event

router.delete("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (event.userId === req.body.userId) {
      await event.deleteOne();
      res.status(200).json("the event has been deleted");
    } else {
      res.status(403).json("you can delete only your event");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//participant / disparticipant a event

router.put("/:id/participate", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event.participants.includes(req.body.userId)) {
      await event.updateOne({ $push: { participants: req.body.userId } });
      res.status(200).json("The event has been participated");
    } else {
      await event.updateOne({ $pull: { participants: req.body.userId } });
      res.status(200).json("The event has been participated");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//get a event

router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get timeline events

router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userEvents = await Event.find({ userId: currentUser._id });
    const friendEvents = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Event.find({ userId: friendId });
      })
    );
    res.status(200).json(userEvents.concat(...friendEvents));
  } catch (err) {
    res.status(500).json(err);
  }
});

//get user's all events

router.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const events = await Event.find({ userId: user._id });
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
