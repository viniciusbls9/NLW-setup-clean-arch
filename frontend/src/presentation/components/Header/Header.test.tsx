import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Header } from '.';

describe('Header Component', () => {
  test('Should render correctly header component', () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
