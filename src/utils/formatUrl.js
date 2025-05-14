export default function formatUrl(url) {
  return `(${
    url.replaceAll('https://', '').replaceAll('www.', '').split('/')[0]
  })`;
}
