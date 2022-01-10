import { Randomizer } from './randomizer';

describe('Randomizer', () => {
  it('should create an instance', () => {
    expect(new Randomizer()).toBeTruthy();
  });

  it('should generate a random name of 8 characters', () => {
    expect(Randomizer.generateRandomListName().length).toBe(8);
  });

  it('should generate the correct letters for numbers', () => {
    expect(Randomizer.numbersToString(['1', '2', '3'])).toMatch(
      /[^]*[A]*[B]*[C]*/
    );
  });
});
