const urlBase = "http://localhost:8000/api/autor";
const consomeApi = (recurso = "", method = "GET", body) => {
  return fetch(`${urlBase}/${recurso}`, {
    method,
    headers: { "content-type": "application/json" },
    body
  })
   .then(ApiService.TrataErros)
   .then(res => res.json())
};

const ApiService = {
  ListaAutores: () => consomeApi(),
  CriaAutor: autor => consomeApi("", "POST", autor),
  ListaNomes: () => consomeApi("nome"),
  ListaLivros: () => consomeApi("livro"),
  RemoveAutor: id => consomeApi(id, "DELETE"),
  TrataErros: res => {
    if (!res.ok) {
      throw new Error(res.responseText);
    }
    return res;
  }
};

export default ApiService;
