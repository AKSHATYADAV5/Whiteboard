import { isPointCloseToLine, isNearPoint, getArrowHeadsCoordinates, midPointBtw } from './math';

// Helper for readability of numeric approximations
const closeTo = (received, expected, digits = 5) => {
  expect(received).toBeCloseTo(expected, digits);
};

describe('math utilities', () => {
  describe('isPointCloseToLine', () => {
    it('returns true for a point exactly on the line', () => {
      expect(isPointCloseToLine(0, 0, 10, 0, 5, 0)).toBe(true);
    });

    it('returns false for a point far from the line', () => {
      expect(isPointCloseToLine(0, 0, 10, 0, 5, 1)).toBe(false);
    });
  });

  describe('isNearPoint', () => {
    it('detects a nearby point', () => {
      expect(isNearPoint(10, 10, 12, 12)).toBe(true);
    });

    it('rejects a distant point', () => {
      expect(isNearPoint(10, 10, 16, 16)).toBe(false);
    });
  });

  describe('getArrowHeadsCoordinates', () => {
    it('computes coordinates for arrow heads on a horizontal line', () => {
      const { x3, y3, x4, y4 } = getArrowHeadsCoordinates(0, 0, 10, 0, 5);
      closeTo(x3, 10 - 5 * Math.cos(Math.PI / 6));
      closeTo(y3, 5 * Math.sin(Math.PI / 6));
      closeTo(x4, 10 - 5 * Math.cos(Math.PI / 6));
      closeTo(y4, -5 * Math.sin(Math.PI / 6));
    });
  });

  describe('midPointBtw', () => {
    it('returns the midpoint between two points', () => {
      const result = midPointBtw({ x: 0, y: 0 }, { x: 2, y: 4 });
      expect(result).toEqual({ x: 1, y: 2 });
    });
  });
});
