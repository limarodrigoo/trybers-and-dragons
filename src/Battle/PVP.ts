import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(protected player1 :Fighter, protected player2 :Fighter) {
    super(player1);
  }

  checkSomeoneIsDead() {
    if (this.player1.lifePoints > 0 && this.player2.lifePoints > 0) return true;
    return false;
  }

  fight(): number {
    let limit = 0;
    while (this.checkSomeoneIsDead() && limit < 500) {
      limit += 1;
      this.player1.attack(this.player2);
      if (this.player2.lifePoints < 0) break;
      this.player2.attack(this.player1);
    }
    return this.player1.lifePoints > 0 ? 1 : -1;
  }
}