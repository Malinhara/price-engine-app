import { describe, expect, it } from 'vitest';
import { calculatePrice } from '../utills/pricingLogic';

const product = { unitsPerCarton: 20, cartonPrice: 175 };

describe('Price calculation', () => {
  it('calculates correct price for 25 units', () => {
    const result = calculatePrice({ product, quantity: 25 });
    expect(result.cartons).toBe(1);
    expect(result.singles).toBe(5);
    expect(result.total).toBeCloseTo(175 + (175 * 1.3 / 20 * 5));
  });

  it('applies discount for 3+ cartons', () => {
    const result = calculatePrice({ product, quantity: 60 });
    expect(result.cartons).toBe(3);
    expect(result.total).toBeCloseTo(3 * 175 * 0.9);
  });
});
