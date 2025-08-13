import { HomeRunning } from "./HomeRunning";
import { HomeIntroduction } from "./HomeIntroduction";

export interface Home {
  introduction?: HomeIntroduction;
  running?: HomeRunning;
}
