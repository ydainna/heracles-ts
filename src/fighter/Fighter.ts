import { getLogger } from "../utils/logger/getLogger.ts/getLogger";

class Fighter {
  private MAX_LIFE: number = 100; //base life of the fighter

  public name: string; //name of the fighter
  private strength: number; //strength of the fighter
  private dexterity: number; //dexterity of the fighter
  public life: number; //life of the fighter

  constructor(name: string, strength: number, dexterity: number) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = this.MAX_LIFE;
  }
  fight(fighter: Fighter): void {
    const damage = Math.floor(Math.random() * this.strength);
    const defense = Math.floor(Math.random() * fighter.dexterity);
    const damageDone = damage - defense;
    if (damageDone > 0) {
      fighter.life -= damageDone;
      getLogger("🗡️ - HIT").info(
        `${this.name} hits ${fighter.name} for ${damageDone} damage, life ${fighter.life < 0 ? "0" : fighter.life}`,
      );
    } else {
      getLogger("🛡️ - MISS").info(`${this.name} misses ${fighter.name}`);
    }
  }
}

export default Fighter;