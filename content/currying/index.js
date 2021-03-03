const volumeCalculator = (x, y, z) => x * y * z;

const curriedVolumeCalculator = x => y => z => volumeCalculator(x, y, z);

const my3by4CuboidVolumeCalculator = curriedVolumeCalculator(3)(4);

console.log('volumeCalculator(3,4,5) ===', volumeCalculator(3, 4, 5));
console.log(
  'curriedVolumeCalculator(3)(4)(5) ===',
  curriedVolumeCalculator(3)(4)(5)
);
console.log(
  'my3by4CuboidVolumeCalculator(5) ===',
  my3by4CuboidVolumeCalculator(5)
);
