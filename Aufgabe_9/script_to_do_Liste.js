var Aufgabe_9;
(function (Aufgabe_9) {
    window.addEventListener("load", function () {
        /*Variablen*/
        let ToDoInput = document.getElementById("line");
        let ToDoButton = document.getElementById("plus");
        let todoList = document.getElementById("todo-list");
        let count = 0;
        /* Funktion des Counters */
        function counter() {
            document.getElementById("counter").innerHTML = String(count);
        }
        /* Funktion des Plus Buttons */
        ToDoButton.addEventListener("click", function () {
            /* Neue DIV erstellen, in der die lis aufgezählt werden, die in der Inline geschrieben werden */
            const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo");
            /* li Aufzählungen */
            let newToDo = document.createElement("li");
            newToDo.innerText = ToDoInput.value;
            newToDo.classList.add("todo-item");
            /*Ans DIV hängen */
            todoDiv.appendChild(newToDo);
            /* Häkchen Button */
            let checkmarkButton = document.createElement("input");
            checkmarkButton.type = "checkbox";
            checkmarkButton.classList.add("checkmark-input");
            /* Ans DIV hängen */
            todoDiv.appendChild(checkmarkButton);
            /* Mülleimer Button */
            let trashButton = document.createElement("p");
            trashButton.className = "far fa-trash-alt";
            trashButton.classList.add("trash-btn");
            /* Ans Div hängen */
            todoDiv.appendChild(trashButton);
            /* An die Liste hängen */
            todoList.appendChild(todoDiv);
            /* Inhalt des Inlines löschen, nachdem eine ToDo eingetragen wurde*/
            ToDoInput.value = "";
            /* Counter zählt das Hinzufügen einer neuen ToDo */
            count++;
            counter();
            /* Funktion des Mülleimer Buttons */
            trashButton.addEventListener("click", function () {
                todoList.removeChild(todoDiv);
                /* zieht gelöschte ToDo vom Counter ab*/
                count--;
                counter();
            });
            /* Funktion des Häkchen Buttons */
            checkmarkButton.addEventListener("click", function () {
                if (newToDo.style.textDecoration == "line-through") {
                    newToDo.style.textDecoration = "none";
                }
                else {
                    newToDo.style.textDecoration = "line-through";
                }
            });
        });
    });
})(Aufgabe_9 || (Aufgabe_9 = {}));
//# sourceMappingURL=script_to_do_Liste.js.map