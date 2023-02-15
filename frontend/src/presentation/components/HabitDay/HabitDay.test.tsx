import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HabitDay } from '.';

describe('Header Component', () => {
  test('Should render correctly header component', () => {
    const { container } = render(<HabitDay />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
