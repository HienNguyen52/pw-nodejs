class PostControllers {

    constructor(baseUrl, slug) {
        this._url = `${baseUrl}${slug}`;
    }


    async getResponse(response) {
        return response.json()
    };

    async allPosts(posts) {
        return posts
    }
    async getAllPostForUser(inputUserId) {
        const urlRespone = await fetch(this._url);
        const responseJson = await this.getResponse(urlRespone);
        const posts = await this.allPosts(responseJson);
        const postsForUser = posts.filter(function (p) {
            return (p.userId == inputUserId)
        });
        return postsForUser;

    }
    async getPost(userId, id) {
        const urlRespone = await fetch(this._url);
        const responseJson = await this.getResponse(urlRespone);
        let posts = await this.allPosts(responseJson);

        posts = posts.filter(function (p) {
            return (p.userId == userId && p.id == id)
        });
        if (posts.length > 0) {
            return posts[0].title;
        } else {
            return 'There is no post found';
        }



    }


};
module.exports = PostControllers;