import type { Metadata } from "next";
import { Banner } from "@/components/ui/Banner";
import { Button } from "@/components/ui/Button";
import { getTimetableClasses, getTermDates, getBannerImages } from "@/lib/contentful/queries";
import { groupClassesByDay, formatTime } from "@/lib/utils/timetable";
import { cn } from "@/lib/utils/cn";
import {
  timetableClasses as staticTimetableClasses,
  termDates as staticTermDates,
  bannerImages as staticBannerImages,
} from "@/data/content";

export const metadata: Metadata = {
  title: "Timetable",
  description:
    "View our class timetable and term dates. Find the perfect class time for your schedule.",
};

export default async function TimetablePage() {
  const [timetableClassesData, termDatesData, bannerImages] = await Promise.all([
    getTimetableClasses(),
    getTermDates(),
    getBannerImages(),
  ]);

  const bannerImageUrl = bannerImages?.timetableBanner || staticBannerImages.timetable;

  // Use Contentful data or fallback to static
  const timetableClasses = timetableClassesData.length > 0 ? timetableClassesData : staticTimetableClasses;
  const termDates = termDatesData || staticTermDates;

  const schedule = groupClassesByDay(timetableClasses);
  const currentYear = termDates?.year || new Date().getFullYear();

  return (
    <>
      {/* Hero Banner */}
      <Banner
        imageUrl={bannerImageUrl}
        imageAlt="Class Timetable"
        title="Timetable"
        gradient={true}
        priority={true}
      />

      {/* Term Dates */}
      {termDates && (
        <section className="py-12 bg-primary-pink">
          <div className="max-w-content mx-auto px-4">
            <h2 className="font-montaga text-2xl tablet:text-3xl text-primary-text text-center mb-8">
              {currentYear} Term Dates
            </h2>

            <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-6">
              {[
                { name: "Term 1", data: termDates.termOne },
                { name: "Term 2", data: termDates.termTwo },
                { name: "Term 3", data: termDates.termThree },
                { name: "Term 4", data: termDates.termFour },
              ].map(
                (term) =>
                  term.data && (
                    <div
                      key={term.name}
                      className="bg-white rounded-lg p-6 text-center shadow-sm"
                    >
                      <h3 className="font-montaga text-lg text-primary-text mb-2">
                        {term.name}
                      </h3>
                      <p className="text-sm text-primary-text">
                        {term.data.startDate} - {term.data.endDate}
                      </p>
                    </div>
                  )
              )}
            </div>
          </div>
        </section>
      )}

      {/* Timetable */}
      <section className="py-16">
        <div className="max-w-desktop mx-auto px-4">
          <h2 className="font-montaga text-3xl tablet:text-4xl text-primary-text text-center mb-12">
            Class Schedule
          </h2>

          {schedule.length > 0 ? (
            <div className="space-y-8">
              {schedule.map((day) => (
                <div key={day.day} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-primary-blue px-6 py-3">
                    <h3 className="font-montaga text-xl text-white">{day.day}</h3>
                  </div>
                  <div className="divide-y divide-light-grey/30">
                    {day.classes.map((classItem, index) => (
                      <div
                        key={`${classItem.title}-${index}`}
                        className={cn(
                          "px-6 py-4",
                          "flex flex-col tablet:flex-row tablet:items-center tablet:justify-between",
                          "gap-2"
                        )}
                      >
                        <span className="font-montserrat font-medium text-primary-text">
                          {classItem.title}
                        </span>
                        <span className="text-sm text-primary-text/70">
                          {classItem.isTbc
                            ? "(TBC)"
                            : `${formatTime(classItem.startTime)} - ${formatTime(classItem.endTime)}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-primary-text">
              <p>Timetable information is coming soon. Please contact us for current class times.</p>
            </div>
          )}

          {/* CTA */}
          <div className="text-center mt-12">
            <Button href="/sign-up" text="Book Free Trial" bgColor="blue" />
          </div>
        </div>
      </section>
    </>
  );
}
