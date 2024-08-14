const readline = require('readline-sync');
const url = 'https://jsonplaceholder.typicode.com/posts';
let inputUserId = readline.question('Please input your userId: ');
let inputId = readline.question('Please input your postId: ');
fetch(url)
    .then(getResponse)
    .then(allPosts)
    .then(getAllPostForUser)

function getResponse(response){
    return  response.json()
};

function allPosts(posts){
    return posts
}
function getAllPostForUser(posts){
    let post = posts.filter(function(posts){
        return (posts.userId == inputUserId  && posts.id == inputId) 
    })
    posts =  posts.filter(function(posts){
        return (posts.userId == inputUserId)
    });
    if(post.length > 0) {
        console.log(post[0].title);
    }  else {
        console.log('There is no post found');
    }
    
    console.log(posts);
    
}

