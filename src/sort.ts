import { DecisionMaker } from './DecisionMaker';

export function sort(width: number, height: number, length: number, mass: number) {
  const processor = new DecisionMaker(width, height, length, mass);
  return processor.sort();
}
