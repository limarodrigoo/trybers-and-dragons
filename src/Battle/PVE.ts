import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(player: Fighter, public monsters: SimpleFighter[]) {
    super(player);
    this.monsters = monsters;
  }

  someoneIsDead() {
    if (
      this.player.lifePoints > 0
      && this.monsters.map((m) => m.lifePoints > 0)
    ) { return true; }
    return false;
  }

  fight(): number {
    let limit = 0;
    while (this.someoneIsDead() && limit < 500) {
      limit += 1;
      this.monsters.forEach((m) => {
        this.player.attack(m);
        m.attack(this.player);
      });
    }
    return this.player.lifePoints > 0 ? 1 : -1;
  }
}
