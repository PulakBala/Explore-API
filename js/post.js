function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}
/*
1. get the container element where you want to add the new elements.
2. create child element
3.set innerText or innerHTML
4. appendChild
*/

function displayPosts(posts) {
    const postContainer = document.getElementById('posts-container')
    for(const post of posts) {
        const postdiv = document.createElement('div');
        postdiv.classList.add('post')
        postdiv.innerHTML = `
            <h5>User-${post.userId}</h5>
            <h4>Post:${post.title} title</h4>
            <p>Post Desription:  ${post.body}</p>
        `;
        postContainer.appendChild(postdiv);
    }
}

loadPosts()