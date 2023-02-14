interface WeekDaysProps {
  weekDays: string[];
}

export const WeekDays: React.FC<WeekDaysProps> = ({
  weekDays
}: WeekDaysProps) => {
  return (
    <div className="grid grid-rows-7 grid-flow-row gap-3">
      {weekDays.map((weekDay) => {
        return (
          <div
            key={'a'}
            className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
          >
            {weekDay}
          </div>
        );
      })}
    </div>
  );
};
