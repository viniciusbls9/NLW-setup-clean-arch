import { HabitDay } from '@components/HabitDay';
import { WeekDays } from '@components/WeekDay';

export const SummaryTable = () => {
  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  return (
    <div className="w-full flex">
      <WeekDays weekDays={weekDays} />

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        <HabitDay />
      </div>
    </div>
  );
};
