import { HabitDay } from '@components/HabitDay';
import { WeekDays } from '@components/WeekDay';
import { GenerateDateFromYearBeginning } from '@presentation/utils/generateDateFromYearBeginning/generate-date-from-year-beginning';

const generateDateFromYearBeginning = new GenerateDateFromYearBeginning();
const summaryDates = generateDateFromYearBeginning.generateDate();

const mininumSummaryDatesSize = 18 * 7;
const amountOfDaysToFill = mininumSummaryDatesSize - summaryDates.length;

export const SummaryTable = () => {
  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  return (
    <div className="w-full flex">
      <WeekDays weekDays={weekDays} />

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date) => (
          <HabitDay key={date.toString()} completed={4} amount={5} />
        ))}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, index) => {
            return (
              <div
                key={index}
                className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
              />
            );
          })}
      </div>
    </div>
  );
};
