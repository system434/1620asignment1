






//console.log(drkbtn);


const drkbtn = document.querySelector(".Dark-button");
const bcknotes = document.querySelector(".notes");
const bcktext = document.querySelector(".textbox");
const dkfont = document.querySelector(".container");

function dark2light2dark(){
    //console.log(event);
    if(drkbtn.textContent == "Light Theme"){
        changetolight();
    }
    else{
        changetodark();
    }

}

function changetodark(){
    console.log("changed 2 dark");
    drkbtn.textContent = "Light Theme";
    bcknotes.style.backgroundColor = "#2979A4";
    bcktext.style.backgroundColor = "#213677";
    dkfont.style.color = "black";

}

function changetolight(){
    console.log("changed 2 light");
    drkbtn.textContent = "Dark Theme";
    bcknotes.style.backgroundColor = "#F9E0BD";
    bcktext.style.backgroundColor = "#F6C177";
    dkfont.style.color = "#555169";
    
}

const cnclbtn = document.querySelector(".cancel-button");
let txtara = document.querySelector(".note");
const svebtn = document.querySelector(".save-button");

function cancel(){
    cnclbtn.style.display = "none";
    txtara.style.display = "none";
    svebtn.style.display = "none";
    

}

const nwbtn = document.querySelector(".new-button");

function New_Note(){
    cnclbtn.style.display = "inline-block";
    txtara.style.display = "inline-block";
    svebtn.style.display = "inline-block";
    console.log(txtara);
    txtara.value = "Write Notes here";

}



function save(){
    
}

function list_search(){
    //search through notesArray and find object usig title, then display text in tex area

}

let note1 = {
    title: "note one",
    body: "this is my first note",
};

let note2 = {
    title: "note 2",
    body: "Note 2 begins here",
};

let notesArray = [note1,note2];



drkbtn.addEventListener("click",dark2light2dark);
cnclbtn.addEventListener("click",cancel);
nwbtn.addEventListener("click",New_Note);
svebtn.addEventListener("click",save);


