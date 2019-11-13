import toOrdinal from './index';

it('should give 1st for 1', () => {
    expect(toOrdinal(1)).toBe('1st');
});

it('should give 2nd for 2', () => {
    expect(toOrdinal(2)).toBe('2nd');
});

it('should give 3rd for 3', () => {
    expect(toOrdinal(3)).toBe('3rd');
});

it('should give 4th for 4', () => {
    expect(toOrdinal(4)).toBe('4th');
});

it('should give 5th for 5', () => {
    expect(toOrdinal(5)).toBe('5th');
});

it('should give 11th for 11', () => {
    expect(toOrdinal(11)).toBe('11th');
});

it('should give 21st for 21', () => {
    expect(toOrdinal(21)).toBe('21st');
});

it('should give 112th for 112', () => {
    expect(toOrdinal(112)).toBe('112th');
});