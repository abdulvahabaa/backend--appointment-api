import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import generateAvailableSlots from "../utils/timeSlots.mjs";

const getAvailableSlots = async (date) => {

  const appointments = await prisma.appointment.findMany({
    where: { date: new Date(date) },
    select: { timeSlot: true },
  });

  const bookedSlots = appointments.map((a) => a.timeSlot);

  const normalizeTime = (time) => time.replace(/ (AM|PM)/, "").trim();

  const availableSlots = generateAvailableSlots().filter(
    (slot) => !bookedSlots.includes(normalizeTime(slot))
  );

  return availableSlots;
};

const bookAppointment = async ({ name, phone, date, timeSlot }) => {
  // console.log({ name, phone, date, timeSlot });
  return await prisma.appointment.create({
    data: { name, phone, date: new Date(date), timeSlot },
  });
};

export default { getAvailableSlots, bookAppointment };
