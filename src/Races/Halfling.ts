import Race from './Race';

export default class Halfling extends Race {
  private lifePoints;
  private static createdRaces = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.lifePoints = 60;
    Halfling.createdRaces += 1;
  }

  public get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances() {
    return this.createdRaces;
  }
}