import { Router } from "express";
import { EventModel } from "../../../db/schema";

const router = Router();

router.get("/", (req, res) => {
  res.send({
    message: "Welcome to evnt.press server!",
    ref_docs: [
      "https://expressjs.com/en/5x/api.html",
      "https://mongoosejs.com/docs/guide.html",
    ],
    version: "V1",
    routes: {
      "GET /api/v1/events": "To get all the events",
      "GET /api/v1/event/:id": "To get a single event",
      "POST /api/v1/event/create": "To create an event",
      "PUT /api/v1/event/:id/update": "To update an event",
    },
  });
});

// route to get all events
router.get("/events", async (req, res) => {
  try {
    const events = await EventModel.find();
    console.log(events);
    res.send({ message: "Events found!", success: true, data: events });
  } catch (e) {
    res.send({ message: "Events not found!", success: false });
  }
});

// route to get an event by id
router.get("/event/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const event = await EventModel.findById(id);
    res.send({ message: "Event found!", success: true, data: event });
  } catch (e) {
    res.send({ message: "Event not found!", success: false });
  }
});

// route to create an event
router.post("/event/create", (req, res) => {
  try {
    // we dont need to pass id mongodb will automatically generate _id variable for us
    const {
      name,
      date,
      location,
      registration,
      registration_fee,
      image,
      registered,
      org_name,
    } = req.body;
    const newEvent = new EventModel({
      name,
      date,
      location,
      registration,
      registration_fee,
      image,
      registered,
      org_name,
    });
    newEvent.save();
    res.send({
      message: "Event created successfully!",
      success: true,
      data: newEvent,
    });
  } catch (e) {
    res.send({ message: "Failed to create event!", success: false });
  }
});

// route to update an event
router.put("/event/:id/update", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      date,
      location,
      registration,
      registration_fee,
      image,
      registered,
      org_name,
    } = req.body;
    const updatedEvent = await EventModel.findByIdAndUpdate(id, {
      name,
      date,
      location,
      registration,
      registration_fee,
      image,
      registered,
      org_name,
    });
    res.send({
      message: "Event updated successfully!",
      success: true,
      data: updatedEvent,
    });
  } catch (e) {
    res.send({ message: "Failed to update event!", success: false });
  }
});

export default router;
