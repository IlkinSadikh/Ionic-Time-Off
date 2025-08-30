import '@testing-library/jest-dom';

class MockIntersectionObserver {
  constructor(_: any) {}
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() { return []; }
}
(globalThis as any).IntersectionObserver = MockIntersectionObserver as any;
