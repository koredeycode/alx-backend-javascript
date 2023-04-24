export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const parts = [...set.values()]
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => {
      const valueSubStr = value.substring(startString.length);
      return valueSubStr !== value ? valueSubStr : '';
    })
    .filter((valueSubStr) => valueSubStr !== '');

  return parts.join('-');
}
