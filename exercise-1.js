let rick= [];

let getCharacters = async ()=>{
    let response = await fetch (`https://rickandmortyapi.com/api/character/?name=${nameCharacter}&page=${count}`)
    // console.log(response);
    let res= await response.json();
    // console.log(res);
    rick= [...res.results];
    console.log(rick);
};
// console.log(ricks);
getCharacters()
const mapMonsters = (rick)=>{
    return rick.map((caracters)=>({
        name: caracters.name,
        image: caracters.image,
        especie: caracters.species,
        location: caracters.location.name,
        
    }))
}

const drawPerson =  (rick)=>{

    for (const caracters of rick) {
   
        let cardDiv$$= document.createElement('div');
        cardDiv$$.className='caracter-card';

        let caracterName= document.createElement('h3');
        caracterName.textContent= caracters.name;

        let caracterImg=document.createElement("img");
        caracterImg.className='img'
        caracterImg.setAttribute('src', caracters.image);
        caracterImg.setAttribute('alt', caracters.name)
let divpadre= document.querySelector('.conteiner')
        divpadre.appendChild(cardDiv$$)
        cardDiv$$.appendChild(caracterImg)

        cardDiv$$.appendChild(caracterName)

        
    }
}

// drawPerson(rick)
let init = async () =>{
    await getCharacters();
    rick=[...mapMonsters(rick)]
    let padre= document.querySelector('.conteiner');
padre.innerHTML= "";
    console.log(rick);
    drawPerson(rick);

}
let nameCharacter="";
let count=1;

const nexPage = ()=>{
    if(count<6){
    count ++;
    init(count);
    console.log(count);
}
}
const backPage = ()=>{
    if(count>1){
    count --;
    init(count);
    console.log(count)}
}
const buscar =()=>{
    let names = document.querySelector(".search_input");
    names.addEventListener("input",()=>{
        nameCharacter=names.value.toLowerCase();
        init();
    
        console.log(names);
        console.log("este es namecharacter",nameCharacter);
    })
}
buscar()
init();

 