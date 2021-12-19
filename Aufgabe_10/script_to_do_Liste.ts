namespace Aufgabe_10 {

/*Interface für ToDos */

interface DisplaytoDo {
    text: string;
    checked: boolean;
}

/* Das Objekt für die ToDos */
let toDoList: DisplaytoDo[] = [

    { 
        text: "Geige spielen",
    checked: false 
},

    { 
        text: "Geschenke einkaufen",
    checked: false 
},

    {
        text: "Miete überweisen",
    checked: true 
}
];


/* Variablen */

let inputElement: HTMLInputElement;
let addButtonElement: HTMLElement;
let todosElement: HTMLElement;
let counterDOMElement: HTMLElement;


/* Damit alles ladet */
window.addEventListener("load", function(): void {

    inputElement = document.querySelector("#line");

    addButtonElement = document.querySelector("#plus");

    todosElement = document.querySelector("#todo-container");

    counterDOMElement = document.querySelector("#counter");

    addButtonElement.addEventListener("click", addTodo);

    drawListToDOM();

});


/*Funktion, damit ToDos hinzugefügt werden können */
function drawListToDOM(): void {

    /* Inhalt des Inlines löschen, nachdem eine ToDo eingetragen wurde*/
    todosElement.innerHTML = "";

    for (let index: number = 0; index < toDoList.length; index++) {

        /* Neue DIV erstellen, in der die ToDos aufgezählt werden, die in der Inline geschrieben werden */
        var todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        /* ToDos  */
        todo.innerHTML =  "<span class='check " + toDoList[index].checked + "'><i class='fas fa-check'></i></span>"

                            + toDoList[index].text +

                            "<span class='trash fas fa-trash-alt'></span>";

        /* Funktion des Häkchens */
         todo.querySelector(".check").addEventListener("click", function(): void {

        Checkmark(index);
                    
         });
        
        /* Funktion des Mülleimers */
        todo.querySelector(".trash").addEventListener("click", function(): void {

            deleteTodo(index);

        });

        todosElement.appendChild(todo);

    }
    
    updateCounter();

}

/*Funktion für den Counter, damit er die ToDos aufzählt, die noch gemacht werden müssen und die, die schon erledigt wurden*/
function updateCounter(): void {

    var unchecked: number = 0;
    var checked: number = 0;

    for (let index = 0; index < toDoList.length; index++) {

        if (toDoList[index].checked == true) {
            checked++;
        }
        else {
            unchecked++;
        }

        counterDOMElement.innerHTML =  "total:" + toDoList.length +  ", open:" + unchecked +   ", done:" + checked;

    }
}

/* Counter zählt neue ToDo auf*/
function addTodo(): void {


    if (inputElement.value != "") {

        toDoList.unshift(
            { text: inputElement.value,
            checked: false
            }
        );

        inputElement.value = "";

        drawListToDOM();

    }

}

/* Häkchen */

function Checkmark(index: number): void {

    toDoList[index].checked = !toDoList[index].checked;
    drawListToDOM();

}

/* Mülleimer */
function deleteTodo(index: number): void {

    toDoList.splice(index, 1);

    drawListToDOM();

}

/* Funktion des Mikrofons */

declare var Artyom: any;

window.addEventListener("load", function(): void {
    const artyom = new Artyom();
    artyom.addCommands({
        indexes: ["neue Aufgabe *"],
        smart: true,
        action: function(i: any, wildcard: string): void {
            console.log( "Neue Aufgabe:" + wildcard);
            toDoList.unshift({
                text: wildcard,
                checked: false
            });
            drawListToDOM();
        }
    });

    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function(): void {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function() {
                console.log("Ready!");
            });
        }, 150);
    }
    startContinuousArtyom();
});

}
