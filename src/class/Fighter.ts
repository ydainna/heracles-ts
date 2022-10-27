import { getLogger } from "./../utils/logger/getLogger";
import Shield from "./Shield";
import Weapon from "./Weapon";

class Fighter {
  private MAX_LIFE: number = 100; //base life of the fighter

  public name: string; //name of the fighter
  private strength: number; //strength of the fighter
  private dexterity: number; //dexterity of the fighter
  public life: number; //life of the fighter
  public weapon: Weapon; //weapon of the fighter
  public shield: Shield; //shield of the fighter

  constructor(name: string, strength: number, dexterity: number, weapon: Weapon, shield: Shield) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.weapon = weapon;
    this.shield = shield;
    this.life = this.MAX_LIFE;
  }

  getRand(max: any) {
    return Math.floor(Math.random() * max);
  }

  getDamage(strength: number, weapon: Weapon) {
    return weapon === null ? strength : strength + weapon.weaponDamage;
  }

  getDefense(dexterity: number, shield: Shield) {
    return shield === null ? dexterity : dexterity + shield.shieldProtection;
  }

  fight(opponent: Fighter) {
    const logger = getLogger("👊 - FIGHT");
    const damage = this.getDamage(this.strength, this.weapon);
    const defense = this.getDefense(opponent.dexterity, opponent.shield);
    const rand = this.getRand(100);
    const isHit = rand <= damage;
    const isBlock = rand <= defense;

    if (isHit && !isBlock) {
      opponent.life -= damage;
      logger.info(
        `${this.name} hits with ${this.weapon.weaponName} ${opponent.name} for ${damage} damage, life ${opponent.life < 0 ? "0" : opponent.life}`
      );
    } else if (isHit && isBlock) {
      logger.info(`${this.name} hits ${opponent.name} but is blocked`);
    } else {
      logger.info(`${this.name} misses ${opponent.name}`);
    }
  }

  isAlive() {
    return this.life > 0;
  }
}

export default Fighter;
