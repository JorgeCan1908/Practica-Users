const URL = `https://jsonplaceholder.typicode.com/users`;
const cuerpoTabla = document.querySelector(`#cuerpoTabla`);

fetch(URL)
    .then((res) => res.json()) //Convierto la respuesta en formato json
    .then((users) => {
        users.forEach(user => {
            //console.log(users)
            const { id, name, username, email } = user
            const row = document.createElement(`tr`);
            row.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${username}</td>
            <td>${email}</td>
        `;
            cuerpoTabla.append(row);
            console.log(id, name, username, email)
        });
    }) //Aqui ya obtengo los datos