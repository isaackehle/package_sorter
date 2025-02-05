import { DecisionMaker } from './DecisionMaker';
import { StackName } from './definitions';

export function sort(width: number, height: number, length: number, mass: number): StackName {
  const processor = new DecisionMaker(width, height, length, mass);

  const isBulky = processor.isBulky();
  const isHeavy = processor.isHeavy();

  if (isBulky && isHeavy) return 'REJECTED';
  if (isBulky || isHeavy) return 'SPECIAL';
  return 'STANDARD';
}
