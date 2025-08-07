import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter', () => {
  it('should initialize count to 0 and val to 1', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);
  });

  it('should increment count by val (default 1)', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

//   try checking setVal functionality
  it('should update val when setVal is called', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(3);
    });
    expect(result.current.val).toBe(3);
 });     

  it('should increment count by updated val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(5);
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(5);
  });

  it('should accumulate increments', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
      result.current.increment();
    });
    expect(result.current.count).toBe(2);
  });

  it('should increment by new val after setVal', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(3);
    });
    act(() => {
      result.current.increment();
      result.current.increment();
    });
    expect(result.current.count).toBe(6);
  });
});