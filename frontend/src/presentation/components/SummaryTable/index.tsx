import { WeekDays } from '@components/WeekDay';

export const SummaryTable = () => {
  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  return (
    <div className="w-full flex">
      <WeekDays weekDays={weekDays} />
    </div>
  );
};
