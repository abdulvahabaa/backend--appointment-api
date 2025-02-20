const generateAvailableSlots = () => {
  const slots = [];
  const startTime = 10; // 10 AM
  const endTime = 17;   // 5 PM

  for (let hour = startTime; hour < endTime; hour++) {
    for (let min of [0, 30]) {
      // Exclude break time (1:00 PM to 2:00 PM)
      if (!(hour === 13)) {
        // Convert to 12-hour format with AM/PM
        let period = hour >= 12 ? "PM" : "AM";
        let displayHour = hour % 12 === 0 ? 12 : hour % 12;
        const time = `${displayHour}:${min === 0 ? "00" : "30"} ${period}`;
        slots.push(time);
      }
    }
  }
  return slots;
};

export default generateAvailableSlots;

