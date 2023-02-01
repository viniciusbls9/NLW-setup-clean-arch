import { describe, expect, test } from 'vitest';
import axios from 'axios';

describe('Should test Server', () => {
  test('Should to call a specific route correctly', async () => {
    const response = await axios({
      url: `http://localhost:3333`,
      method: 'get'
    });

    expect(response.data).toBe('Hello NLW');
  });
});
