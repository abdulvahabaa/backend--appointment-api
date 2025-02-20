import { Router } from "express";
import {
  getAvailableSlots,
  bookAppointment,
} from "../controllers/appointmentController.mjs";

const router = Router();

router.get("/available-slots", getAvailableSlots);

router.post("/book", bookAppointment);

export default router;
