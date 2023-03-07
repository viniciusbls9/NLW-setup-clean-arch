import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HabitProgressBar } from '.';

describe('HabitProgressBar Component', () => {
  test('Should render correctly HabitProgressBar component', () => {
    const { container } = render(<HabitProgressBar progress={75} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
