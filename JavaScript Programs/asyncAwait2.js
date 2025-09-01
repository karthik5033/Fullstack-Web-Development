function fetchPostData(){
    return new Promise((resolve)=>{
 setTimeout(() => {
        resolve("post data fetched")
    }, 2000);
    })
   
}

function fetchCommentData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("comment data fetched")
        }, 3000);
    })
}

async function getBlogData() {
    try {
        console.log("fetching blog data");
        // const blogData=await fetchPostData();
        // const commentData= await fetchCommentData();
       const [blogData,commentData]= await Promise.all([fetchPostData(),fetchCommentData()])
        console.log(blogData);
        console.log(commentData);
        
        console.log("fetched data successfully");
        
        
    } catch (error) {
        console.error("error fetching the data");
        
        
    }
}
getBlogData();