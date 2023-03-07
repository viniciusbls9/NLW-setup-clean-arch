import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HabitDay } from '.';

const props = {
  completed: 4,
  amount: 5
};

describe('HabitDay Component', () => {
  test('Should render correctly HabitDay component', () => {
    const { container } = render(<HabitDay {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Should show different color percentage based', () => {
    render(<HabitDay {...props} />);
    expect(screen.getByRole('button')).toHaveStyle({
      backgroundColor: 'rgb(139 92 246 / 1)'
    });
  });
});
