export default function sortByAscending(data, metric) {
  return data.sort((a, b) => b[metric] - a[metric]);
}
