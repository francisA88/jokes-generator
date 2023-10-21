let loading = document.querySelector("#loading");
let jokeSection = document.querySelector("#joke-section");
let genButton = document.querySelector("#generate");

function fetchJoke(){
    loading.classList.remove("hidden");
    fetch('https://official-joke-api.appspot.com/jokes/random').catch(err=>{
        jokeSection.innerHTML = 
            "Failed to fetch joke.<br>\
            <br>\
             Click button to retry.";
        loading.classList.add("hidden");
    }).then(data => {
        return data;
    }).then(data => {
        console.log(data);
        let res = data.json();
        return res;
    }).then(joke => {
        let setup = joke.setup;
        let punchline = joke.punchline;
        jokeSection.innerHTML = `<p>${setup}</p
            <p>${punchline}.</p>`

        loading.classList.add("hidden");
    })
}

genButton.addEventListener('click', (e)=>fetchJoke());