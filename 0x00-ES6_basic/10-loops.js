export default function appendToEachArrayValue (array, appendString) {
  const retArray = [];
  for (const elem of array) {
    retArray.push(appendString + elem);
  }

  return retArray;
}
