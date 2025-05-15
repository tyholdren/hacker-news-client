export default function formatUrl(url) {
  return `(${
    url
      .replaceAll('https://', '')
      .replaceAll('http://', '')
      .replaceAll('www.', '')
      .split('/')[0]
  })`;
}
