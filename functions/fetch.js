import fetch from "node-fetch";

export const fetchLocal = async ({ path, body, headers, method }) => {
  const resultado = await fetch(path, {
    method,
    headers: {
      ...headers,
    },
    body,
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));

  if (resultado?.error) {
    console.log(resultado?.error);
    return resultado;
  }
  return resultado;
};
