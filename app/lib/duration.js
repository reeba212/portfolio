const MONTHS = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

function parseMonthYear(str) {
  const [mon, year] = str.trim().split(" ");
  return new Date(parseInt(year, 10), MONTHS[mon], 1);
}

/** Formats a "Mon YYYY - Mon YYYY" / "Mon YYYY - Present" range into e.g. "1 yr 1 mo", using `now` for open-ended ranges. */
export function formatDuration(range, now) {
  const [startStr, endStr] = range.split(" - ");
  const start = parseMonthYear(startStr);
  const end = endStr && endStr.trim().toLowerCase() !== "present" ? parseMonthYear(endStr) : now;

  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  months = Math.max(months, 0);

  const years = Math.floor(months / 12);
  const remMonths = months % 12;
  const parts = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (remMonths || !years) parts.push(`${remMonths} mo${remMonths !== 1 ? "s" : ""}`);
  return parts.join(" ");
}
