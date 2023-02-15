import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SummaryTable } from '.';

describe('SummaryTable Component', () => {
  test('Should render header component correctly', () => {
    const { container } = render(<SummaryTable />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
