import Fighter from "./class/Fighter";
import Weapon from "./class/Weapon";
import Shield from "./class/Shield";

import { getLogger } from "./utils/logger/getLogger";

// Create a logger
const winner = getLogger("🐘🏆 - WINNER");
const loser = getLogger("☠️ - LOSER");

// Create a new item
let hearclesWeapon = new Weapon("🗡️ Excalibeurre", 10);
let heraclesShield = new Shield(10);

let erymanthianBoarWeapon = new Weapon("🐾 Papatte", 0);
let erymanthianBoarShield = new Shield(0);

// Create a new fighter
let heracles = new Fighter("[🧔]-Heracles", 20, 6, hearclesWeapon, heraclesShield);
let erymanthian = new Fighter("[🐗]-Erymanthian boar", 25, 12, erymanthianBoarWeapon, erymanthianBoarShield);

//Fight until one of the two fighters is dead
let round = 0;
while (heracles.life > 0 && erymanthian.life > 0) {
  round++;
  const logger = getLogger("🕛 - ROUND");
  logger.info(`Round ${round}`);

  heracles.fight(erymanthian);
  erymanthian.fight(heracles);
}

//check if the fight is over
if (heracles.life > 0 && erymanthian.life <= 0) {
  winner.debug(`${heracles.name} wins !`);
  loser.error(`${erymanthian.name} is dead !`);
} else if (heracles.life <= 0 && erymanthian.life > 0) {
  winner.debug(`${erymanthian.name} wins !`);
  loser.error(`${heracles.name} is dead !`);
}
