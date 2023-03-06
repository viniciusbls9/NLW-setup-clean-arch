import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NewHabitForm } from '.';

describe('Header Component', () => {
  test('Should render correctly modal component', () => {
    const { container } = render(<NewHabitForm />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
