export const APIKEY = "2c96ea4258b35486d603f60f629ff3f0";

export async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  return await response.json();
}
