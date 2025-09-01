function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({name: "Karthik", mail:"karthikkp5033@gmail.com" })
        },3000)
    })

}
async function getUserData() {
    
    try{
        console.log("Waiting for data to be fetched");
        const userdata=await fetchUserData();
        console.log("user data fetched successfully");
        
        console.log("user data is ", userdata);
    }
    catch(error){
        console.log("error fetching data");
        
    }
    
}
getUserData();