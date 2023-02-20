const main=document.querySelector(".container-two")
const addUser=document.getElementById("add-user")
const double=document.getElementById("double")
const showRich=document.getElementById("show-rich")
const sort=document.getElementById("sort")
const total=document.getElementById("total")

let data=[];
//fetch user and add money
// getUser()
// getUser()
// getUser()

async function getUser(){
    const res = await fetch("https://randomuser.me/api")
    const data = await res.json()
    console.log(data)

    const user=data.results[0];
    const newUser={
        name:`${user.name.first} ${user.name.last}`,
        money:Math.floor(Math.random() *10000)
    }
    
    addData(newUser);
}
function doubleMoney(){
    data=data.map(user=>{
        return {...user,money:user.money*2}
    })
    updateData()
}

function sorting(){
    data.sort((a,b)=>{
        b.money-a.money;
    })
    console.log(data)
    updateData()
}


//add new object to data array
function addData(obj){
    data.push(obj);
    updateData()
}

//add data in html
function updateData(providedData=data){
    //clear main
    main.innerHTML=`<h2>Person<span>Wealth</span></h2>`

        providedData.forEach(item=>{
        const ele=document.createElement("div");
        ele.classList.add("person")

        ele.innerHTML=`<strong>${item.name}</strong> ${item.money}`;
        main.appendChild(ele);
    })
}

//event
addUser.addEventListener('click',getUser)
double.addEventListener('click',doubleMoney)
sort.addEventListener('click',sorting)

