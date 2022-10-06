import Fighter from "./fighter/Fighter";
import { getLogger } from "./utils/logger/getLogger.ts/getLogger";

const winner = getLogger("🐘🏆 - WINNER");
const loser = getLogger("☠️ - LOSER");
const draw = getLogger("🤝 - DRAW");

let heracles = new Fighter("[🧔]-Heracles", 20, 6);
let heracNemean = new Fighter("[🦁]-HeracNemean Lion", 11, 13);
let round = 0;

while (heracles.life > 0 && heracNemean.life > 0) {
  round++;
  const logger = getLogger("🕛 - ROUND");
  logger.info(`Round ${round}`);

  heracles.fight(heracNemean);
  heracNemean.fight(heracles);
}

if (heracles.life > 0 && heracNemean.life <= 0) {
  winner.debug(`${heracles.name} wins !`);
  loser.error(`${heracNemean.name} is dead !`);
} else if (heracles.life <= 0 && heracNemean.life > 0) {
  winner.debug(`${heracNemean.name} wins !`);
  loser.error(`${heracles.name} is dead !`);
} else {
  draw.debug("It's a draw !");
}