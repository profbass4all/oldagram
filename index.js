const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let allPosts = document.querySelector('main')
let details = ''

for (let i = 0; i < posts.length; i++) {

    details += `
    <section id="whole-post">
        <section class='posts'>
        <img src=${posts[i].avatar} class='user-img'>
        <div>
            <h3>${posts[i].name}</h3>
            <p>${posts[i].location}</p>
        </div>
    </section>
    <section>
                    <img src=${posts[i].post} class="image-post">
                </section>
                <section class="icons contains  ">
                    <img src="images/icon-heart.png">
                    <img src="images/icon-comment.png">
                    <img src="images/icon-dm.png">
                </section>

                <section class="likes contains">
                    <p>${posts[i].likes} Likes</p>
                </section>
                
                <section class="comments contains">
                    <p><span>${posts[i].username}</span> just took a few mushrooms lol</p>
                </section>
            </section>
    `
}

allPosts.innerHTML = details