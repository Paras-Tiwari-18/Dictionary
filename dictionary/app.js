const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const btn=document.getElementById("search-btn");
btn.addEventListener("click",() => {let inpword = document.getElementById("inp-word").value;
fetch(`${url}${inpword}`)
.then((response)=> response.json())
.then((data) =>{
    console.log(data);
    result.innerHTML =`
    <div class="word">
                <h3>${inpword}</h3>
                <button>
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                
            </div>
            <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
            <p class="word-sentence">${data[0].meanings[0].definitions[0].example }</p>
            <p class="synonyms"> <b>Synonyms : </b>${data[0].meanings[0].synonyms}</p>
    `
})

});