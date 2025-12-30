import { parse, compareAsc } from "date-fns";
import type { TimetableClass } from "@/types/contentful";

export interface GroupedClass {
  title: string;
  startTime: string;
  endTime: string;
  isTbc: boolean;
}

export interface DaySchedule {
  day: string;
  classes: GroupedClass[];
}

const DAYS_ORDER = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

/**
 * Group timetable classes by day and sort by time
 */
export function groupClassesByDay(
  timetableClasses: TimetableClass[]
): DaySchedule[] {
  const schedule: DaySchedule[] = DAYS_ORDER.map((day) => ({
    day,
    classes: [],
  }));

  timetableClasses.forEach((classEntry) => {
    const { title, classTimes } = classEntry;

    classTimes?.forEach((time) => {
      const { day, startTime, endTime, isTbc } = time;
      const dayIndex = DAYS_ORDER.indexOf(day);

      if (dayIndex !== -1) {
        schedule[dayIndex].classes.push({
          title,
          startTime,
          endTime,
          isTbc,
        });
      }
    });
  });

  // Sort classes by start time within each day
  schedule.forEach((daySchedule) => {
    daySchedule.classes.sort((a, b) => {
      // Handle TBC classes - put them at the end
      if (a.isTbc && !b.isTbc) return 1;
      if (!a.isTbc && b.isTbc) return -1;
      if (a.isTbc && b.isTbc) return 0;

      try {
        const timeA = parse(a.startTime, "hh:mm a", new Date());
        const timeB = parse(b.startTime, "hh:mm a", new Date());
        return compareAsc(timeA, timeB);
      } catch {
        // Fallback to string comparison if parsing fails
        return a.startTime.localeCompare(b.startTime);
      }
    });
  });

  // Filter out days with no classes
  return schedule.filter((day) => day.classes.length > 0);
}

/**
 * Format time for display
 */
export function formatTime(time: string): string {
  try {
    const parsed = parse(time, "hh:mm a", new Date());
    return parsed
      .toLocaleTimeString("en-AU", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      .toLowerCase();
  } catch {
    return time.toLowerCase();
  }
}
