export class Randomizer {
  static generateRandomListName(): string {
    const timestamp = new Date().getTime(); 
    const randomNumbers = String(timestamp).substring(String(timestamp).length-8).split('');
    return this.numbersToString(randomNumbers);
  }

  static numbersToString(randomNumbers: string[]): string {
    return randomNumbers
      .map((x) => String.fromCharCode(Number(x) + 65))
      .join('');
  }
}
