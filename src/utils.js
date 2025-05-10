export function formatUrl(url) {
  return `(${
    url.replaceAll('https://', '').replaceAll('www.', '').split('/')[0]
  })`;
}

export function parseHtmlWithDOMParser(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  return doc.body.textContent || '';
}
