const joke=document.getElementById('joke')
const button=document.getElementById('joke-btn')

button.addEventListener('click',generatejoke)

async function generatejoke(){
    //call api
    const jokes = fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept': 'application/json'
        }
    })
    .then(response=>response.json())//to get json data
    .then(data=>{
        joke.innerHTML=data.joke;
    })
}
