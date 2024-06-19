export function generateRandomPosition(minX: number, maxX: number, minY: number, maxY: number, multiplier: number) {
  let xGenerated: number = 0;
  let yGenerated: number = 0;

  let xPos: number = 0;
  let yPos: number = 0;

  let xMultiplier: number = 300 * multiplier;
  let yMultiplier: number = 200 * multiplier;

  if (minX >= 100) {
    xMultiplier = 3000 * multiplier;
  } else if (minX >= 1000) {
    xMultiplier = 30000 * multiplier;
  }

  if (minY >= 100) {
    yMultiplier = 2000 * multiplier;
  } else if (minY >= 1000) {
    yMultiplier = 20000 * multiplier;
  }

  do {
    xPos = Math.random() * xMultiplier;
    xGenerated++;
    if (xGenerated == 9) xPos = minX;
  } while ((xPos < minX || xPos > maxX) && xGenerated < 10);

  do {
    yPos = Math.random() * yMultiplier;
    yGenerated++;
    if (yGenerated == 9) yPos = minY;
  } while ((yPos < minY || yPos > maxY) && yGenerated < 10);

  return { xPos, yPos };
}
