import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private energy :EnergyType;
  private static count = 0;

  constructor(name: string) {
    super(name);
    this.energy = 'stamina';
    Ranger.count += 1;
  }

  get energyType(): EnergyType {
    return this.energy;  
  }

  static createdArchetypeInstances(): number {
    return this.count;
  }
}
