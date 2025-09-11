// API de exemplo: https://jsonplaceholder.typicode.com/users

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const config = await response.json();
  console.log(config); // vai mostrar o array de usuários
}

getUsers();
