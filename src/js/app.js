const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

export default function getSort(arr) {
  arr.sort((a, b) => b.health - a.health);

  return arr;
}

getSort(heroes);
