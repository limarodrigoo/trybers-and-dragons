import Monster from './Monster';

export default class Dragon extends Monster {
  constructor() {
    super();
    this._lifePoints = 999;
  }

  public get lifePoints() {
    return this._lifePoints;
  }
}