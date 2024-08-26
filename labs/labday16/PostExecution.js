const PostControllers = require("./PostControllers");

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const SLUG = '/posts';

async function run() {
    const inputUserId = 55;
    const inputId = 1123;
    const postController = new PostControllers(BASE_URL, SLUG);


    const postsForUser = await postController.getAllPostForUser(inputUserId)
    const post = await postController.getPost(inputUserId, inputId);
    // console.log(postsForUser);
    console.log(post);
}
run()