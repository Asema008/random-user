


let user = "https://dummyjson.com/users"
let random = document.querySelector(".random")
 
async function getUser(){
    try {
        const res = await fetch(user)
        const data = await res.json()

        console.log(data);
   showUser(data.users)
        
    } catch (error) {
        console.log(error);
    }
}
getUser()

function showUser(data){
    random.innerHTML = data.map((item) => {
        return`
        <div class=" img">
       
      <img  src=" ${item.image }"  />
       <h4>${item.firstName},
       ${item.lastName}
       </h4>
        <h3>${item.birthDate}</h3>
        
        </div>
        `
    }) .join("")
}