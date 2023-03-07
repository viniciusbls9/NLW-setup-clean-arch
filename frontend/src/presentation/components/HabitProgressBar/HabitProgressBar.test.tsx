import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HabitProgressBar } from '.';

describe('HabitProgressBar Component', () => {
  test('Should render correctly HabitProgressBar component', () => {
    const { container } = render(<HabitProgressBar progress={75} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Should receive correctly progress number', () => {
    render(<HabitProgressBar progress={75} />);
    expect(screen.getByRole('progressbar')).toHaveStyle({
      width: '75%'
    });
  });
});
