export default function cleanSet(set, startString) {
  if (startString === '') {
    return Array.from(set).join('-');
  }

  return Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.substring(startString.length))
    .join('-');
}
