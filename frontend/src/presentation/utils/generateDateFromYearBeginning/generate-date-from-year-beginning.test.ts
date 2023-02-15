import { describe, test, expect } from 'vitest';
import { GenerateDateFromYearBeginning } from './generate-date-from-year-beginning';

describe('GenerateDateFromYearBeginning', () => {
  test('Should return 14 days', () => {
    const generateDateFromYearBeginning = new GenerateDateFromYearBeginning();
    const summaryDates = generateDateFromYearBeginning.generateDate();

    expect(summaryDates).toHaveLength(14);
  });
});
