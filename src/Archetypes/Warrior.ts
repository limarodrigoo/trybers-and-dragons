import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private energy :EnergyType;
  private static count = 0;

  constructor(name: string) {
    super(name);
    this.energy = 'stamina';
    Warrior.count += 1;
  }

  get energyType(): EnergyType {
    return this.energy;  
  }

  static createdArchetypeInstances(): number {
    return this.count;
  }
}
