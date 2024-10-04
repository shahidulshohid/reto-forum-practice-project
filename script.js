const loadAllPosts = async(category) => {

    // // second way 
    // //========================
    // console.log(`https://openapi.programming-hero.com/api/retro-forum/posts${category ? `?category=${category}` : ''}`)

    // 1 way 
    //========================
    // if(category){
    //     console.log(` https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`);
    // }
    // else{
    //     console.log(`https://openapi.programming-hero.com/api/retro-forum/posts`)
    // }


    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category ? `?category=${category}` : ''}`)
    const data = await response.json()
    displayAllPost(data.posts)
}
loadAllPosts()

const displayAllPost = (posts) => {
    console.log(posts)
}

const handleSearchByCategory = () => {
    const searchText = document.getElementById('searchPosts').value ;
    loadAllPosts(searchText)
}