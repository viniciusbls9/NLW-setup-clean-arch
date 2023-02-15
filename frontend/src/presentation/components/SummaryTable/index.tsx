import { HabitDay } from '@components/HabitDay';
import { WeekDays } from '@components/WeekDay';
import { GenerateDateFromYearBeginning } from '@presentation/utils/generateDateFromYearBeginning/generate-date-from-year-beginning';

const generateDateFromYearBeginning = new GenerateDateFromYearBeginning();
const summaryDates = generateDateFromYearBeginning.generateDate();

export const SummaryTable = () => {
  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  return (
    <div className="w-full flex">
      <WeekDays weekDays={weekDays} />

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date) => (
          <HabitDay key={date.toString()} />
        ))}
      </div>
    </div>
  );
};
