import appointmentService from "../services/appointmentService.mjs";

export const getAvailableSlots = async (req, res) => {
  try {
    // console.log(req.query);
    const { date } = req.query;
    if (!date) return res.status(400).json({ error: "Date is required" });

    const availableSlots = await appointmentService.getAvailableSlots(date);
    // console.log("availableSlots>>>", availableSlots);
    res.json({ availableSlots });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const bookAppointment = async (req, res) => {
  try {
    const { name, phone, date, timeSlot } = req.body;
    if (!name || !phone || !date || !timeSlot) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newAppointment = await appointmentService.bookAppointment({
      name,
      phone,
      date,
      timeSlot,
    });
    res.status(201).json({
      message: "Appointment booked successfully",
      appointment: newAppointment,
    });
  } catch (error) {
    if (error.code === "P2002") {
      // Prisma unique constraint error
      return res.status(400).json({ error: "Time slot already booked" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

export default { getAvailableSlots, bookAppointment };
