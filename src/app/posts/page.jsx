import React from 'react';

// const getPosts = async() => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     return res.json();
// }

const getPosts = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    if(!res.ok){
        throw new Error("Faild to fetch posts");
    }
    return res.json()
}

// const getPosts = async() => {
//     try{
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     return res.json();
//     }
//     catch(err){
//         throw new Error("Faild to fetch posts");
//     }
// }

const PostsPage = async() => {

    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await res.json();
    // console.log(posts);

    const posts = await getPosts();
    console.log(posts);


    return (
        <div>
            <h2>Posts are comming soon...</h2>
            <h2>Total Posts: {posts.length}</h2>
        </div>
    );
};

export default PostsPage;