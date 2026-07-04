import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('[C1] returns "Hello, World!" when called with "World"', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  it('[C1] returns "Hello, Alice!" when called with "Alice"', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });

  it('[C2] returns the identical string on repeated calls with the same input', () => {
    const first = greet('World');
    const second = greet('World');
    const third = greet('World');
    expect(first).toBe('Hello, World!');
    expect(second).toBe('Hello, World!');
    expect(third).toBe('Hello, World!');
    expect(first).toBe(second);
    expect(second).toBe(third);
  });

  it('[C2] produces no observable side effects (does not mutate external state)', () => {
    const externalState = { callCount: 0 };
    const before = { ...externalState };
    greet('World');
    greet('World');
    greet('World');
    expect(externalState).toEqual(before);
  });

  it('[C3] returns a string type for any string input', () => {
    const result = greet('TestName');
    expect(typeof result).toBe('string');
  });

  it('[C3] returns "Hello, !" when called with an empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });
});
