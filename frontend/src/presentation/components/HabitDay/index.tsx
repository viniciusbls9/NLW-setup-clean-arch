import { HabitProgressBar } from '@components/HabitProgressBar';
import * as Popover from '@radix-ui/react-popover'

export const HabitDay = () => {
  return (
    <Popover.Root>
      <Popover.Trigger className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg" />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className='font-semibold text-zinc-400'>segunda-feira</span>
          <span className='mt-1 font-extrabold leading-tight text-3xl'>17/01</span>

          <HabitProgressBar progress={75} />
          <Popover.Arrow height={8} width={16} className='fill-zinc-900' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
