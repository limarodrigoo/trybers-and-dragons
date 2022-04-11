import Race from './Race';

export default class Elf extends Race {
  private lifePoints;
  private static createdRaces = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.lifePoints = 99;
    Elf.createdRaces += 1;
  }

  public get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances() {
    return this.createdRaces;
  }
}