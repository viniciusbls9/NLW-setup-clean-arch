import Habits from 'entities/Habits';
import { useEffect, useRef, useState } from 'react';
import Observer from '@entities/Observer';
import { HabitsRepository, Habit } from '../gateways/HabitGateway';

export const useHabits = (todoGateway: HabitsRepository) => {
  const [, setItems] = useState<any[]>([]);
  const todoListRef = useRef<Habits | null>(null);

  const handleUpdateItems = () => {
    if (todoListRef.current) {
      setItems([...todoListRef.current.items]);
    }
  };

  useEffect(() => {
    (async () => {
      todoListRef.current = await todoGateway.findAll();

      todoListRef?.current?.register(
        new Observer('create', async function (item: any) {
          await todoGateway.create(item);
          console.log({ todoGateway, item });
          handleUpdateItems();
        })
      );

      // todoListRef?.current?.register(
      //     new Observer('removeItem', async function (item: any) {
      //         await todoGateway.removeItem(item.id);
      //         handleUpdateItems();
      //     }),
      // );

      // todoListRef?.current?.register(
      //     new Observer('toggleDone', async function (item: any) {
      //         await todoGateway.updateItem(item);
      //         handleUpdateItems();
      //     }),
      // );

      handleUpdateItems();
    })();
  }, [todoGateway]);

  return {
    habit: todoListRef.current || undefined
  };
};
