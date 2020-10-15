const button = document.getElementById("Button");
button.addEventListener("click", Manipulate);
let listId=0;

function Manipulate()
{
    const input = (<HTMLInputElement>document.getElementById("InputText")).value;
    const selected = parseInt((<HTMLSelectElement>document.getElementById("OptionsList")).value);
    let result;
    switch(selected)
    {
        case 1: {result=input.toUpperCase(); break;}
        case 2: {result=input.toLowerCase(); break;}
        case 4: {result=input[0].toUpperCase()+input.slice(1, input.length); break;}
        default: {result=""; break;}
    }
    let ListElement=document.createElement("li");
    ListElement.setAttribute("id","ListPoint"+listId);
    ListElement.textContent=result;
    const List=document.getElementById("ResultList");
    List.appendChild(ListElement);
    listId++;
}