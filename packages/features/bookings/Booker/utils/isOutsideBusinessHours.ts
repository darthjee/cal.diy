import dayjs from "@calcom/dayjs";

// Business hours are Monday-Friday, 9:00-18:00 in the booker's selected timezone.
const BUSINESS_HOURS_START = 9;
const BUSINESS_HOURS_END = 18;

export const isOutsideBusinessHours = (isoDate: string, timeZone: string) => {
  const slot = dayjs(isoDate).tz(timeZone);

  if (!slot.isValid()) return false;
  if (!slot.isBusinessDay()) return true;

  const hour = slot.hour();
  return hour < BUSINESS_HOURS_START || hour >= BUSINESS_HOURS_END;
};
