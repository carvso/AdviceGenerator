const adviceNumber = document.querySelector(".num-advice");
const quote = document.querySelector(".quote-txt");
const btn = document.querySelector(".btn");

async function dataFetch(url){
    const dataObject = await fetch(url);
    const dataJSON = await dataObject.json();
    return dataJSON;
}

btn.addEventListener("click", async ()=>{
    const data = await dataFetch("https://api.adviceslip.com/advice?t=" + Math.random());
    adviceNumber.textContent = data.slip.id;
    quote.textContent = data.slip.advice;
});

