const baseUrl = "https://antfriend.herokuapp.com";
const toggleOnUrl = baseUrl + "/toggle/on";

export async function http(request) {
  let response = null;
  let json = null;
  let error = null;

  try {
    response = await fetch(request);
    json = await response.json();
  } catch (e) {
    error = e;
  }

  return { response, json, error };
}

export async function get(url) {
  return await http(new Request(url, { method: "get" }));
}

export async function getToggleOn() {
  const response = await get(toggleOnUrl);
  return { response, data: response?.json?.data, error: response.error };
}
