var Aufgabe_10;
(function (Aufgabe_10) {
    /*Interface für ToDos */
    /* Das Objekt für die ToDos */
    let toDoList = [
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
    let inputElement;
    let addButtonElement;
    let todosElement;
    let counterDOMElement;
    /* Damit alles ladet */
    window.addEventListener("load", function () {
        inputElement = document.querySelector("#line");
        addButtonElement = document.querySelector("#plus");
        todosElement = document.querySelector("#todo-container");
        counterDOMElement = document.querySelector("#counter");
        addButtonElement.addEventListener("click", addTodo);
        drawListToDOM();
    });
    /*Funktion, damit ToDos hinzugefügt werden können */
    function drawListToDOM() {
        /* Inhalt des Inlines löschen, nachdem eine ToDo eingetragen wurde*/
        todosElement.innerHTML = "";
        for (let index = 0; index < toDoList.length; index++) {
            /* Neue DIV erstellen, in der die ToDos aufgezählt werden, die in der Inline geschrieben werden */
            var todo = document.createElement("div");
            todo.classList.add("todo");
            /* ToDos  */
            todo.innerHTML = "<span class='check " + toDoList[index].checked + "'><i class='fas fa-check'></i></span>"
                + toDoList[index].text +
                "<span class='trash fas fa-trash-alt'></span>";
            /* Funktion des Häkchens */
            todo.querySelector(".check").addEventListener("click", function () {
                Checkmark(index);
            });
            /* Funktion des Mülleimers */
            todo.querySelector(".trash").addEventListener("click", function () {
                deleteTodo(index);
            });
            todosElement.appendChild(todo);
        }
        updateCounter();
    }
    /*Funktion für den Counter, damit er die ToDos aufzählt, die noch gemacht werden müssen und die, die schon erledigt wurden*/
    function updateCounter() {
        var unchecked = 0;
        var checked = 0;
        for (let index = 0; index < toDoList.length; index++) {
            if (toDoList[index].checked == true) {
                checked++;
            }
            else {
                unchecked++;
            }
            counterDOMElement.innerHTML = "total:" + toDoList.length + ", open:" + unchecked + ", done:" + checked;
        }
    }
    /* Counter zählt neue ToDo auf*/
    function addTodo() {
        if (inputElement.value != "") {
            toDoList.unshift({ text: inputElement.value,
                checked: false
            });
            inputElement.value = "";
            drawListToDOM();
        }
    }
    /* Häkchen */
    function Checkmark(index) {
        toDoList[index].checked = !toDoList[index].checked;
        drawListToDOM();
    }
    /* Mülleimer */
    function deleteTodo(index) {
        toDoList.splice(index, 1);
        drawListToDOM();
    }
    window.addEventListener("load", function () {
        const artyom = new Artyom();
        artyom.addCommands({
            indexes: ["neue Aufgabe *"],
            smart: true,
            action: function (i, wildcard) {
                console.log("Neue Aufgabe:" + wildcard);
                toDoList.unshift({
                    text: wildcard,
                    checked: false
                });
                drawListToDOM();
            }
        });
        function startContinuousArtyom() {
            artyom.fatality();
            setTimeout(function () {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function () {
                    console.log("Ready!");
                });
            }, 150);
        }
        startContinuousArtyom();
    });
})(Aufgabe_10 || (Aufgabe_10 = {}));
//# sourceMappingURL=script_to_do_Liste.js.map