

function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(reply => reply.json())
    .then(json => console.log(json));
}