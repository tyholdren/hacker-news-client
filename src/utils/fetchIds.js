export default async function fetchIds(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw Error();
    }
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
