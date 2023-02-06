//or kinda a real blog post.
let postBlog = {
    title: 'life is awesome, belive it',
    message: 'everything we need is inside ourselves',
    author: 'josegui',
    views: 3443.34,
    comments: [
        {autor: 'pedro', message: 'it is true, bro, I confirm it.'},
        {autor: 'oliver', message: 'go easy, bro...'},
    ],
    alive: true,

}


//CONSTRUCTOR MODE ACTIVED:
function Post(title, message, author, views, comments, alive) {
    this.title = title,
    this.message = message,
    this.author = author,
    this.views = views,
     this.comments = comments,
    this.alive = alive
}
let postOne = new Post('a', 'b', 'c', 'd','e', 'f')
let postTwo = new Post()

console.log(postOne)
    
