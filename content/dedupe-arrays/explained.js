const originalArray = [
  '🇪🇸',
  '🏁',
  '🇪🇺',
  '🇪🇸',
  '🇪🇸',
  '🇮🇨',
  '🇮🇨',
  '🏳️‍🌈',
  '🇮🇨',
  '🇮🇨',
  '🇮🇨',
  '🇪🇺',
];

const explainReduce = () => {
  const steps = [];
  const explainedReducer = originalArray.reduce((acc, flag) => {
    const step = {};
    step.item = flag;
    step.accumulatorBeforeReducerFunction = acc;
    step.pushToAccumulator = !acc.includes(flag) ? 'YES' : 'NO';
    step.accumulatorAfterReducerFunction = acc.includes(flag)
      ? acc
      : [...acc, flag];
    steps.push(step);
    console.log(step);
    return acc.includes(flag) ? acc : [...acc, flag];
  }, []);
  console.log(explainedReducer);
  console.table(steps);
};

explainReduce();

const explainFilter = () => {
  const steps = [];
  const explainedFilter = originalArray.filter((flag, index) => {
    const step = {};
    step.item = flag;
    step.index = index;
    step.indexOf = originalArray.indexOf(flag);
    step.condition = originalArray.indexOf(flag) === index;
    step.operation =
      originalArray.indexOf(flag) === index ? 'MAINTAIN' : 'DISCARD';
    steps.push(step);
    //console.log(step)
    return originalArray.indexOf(flag) === index;
  });
  console.log(explainedFilter);
  console.table(steps);
};

explainFilter();
