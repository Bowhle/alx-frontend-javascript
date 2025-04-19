export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const unusedTask = true;
    const unusedTask2 = false;
  }

  return [task, task2];
}
