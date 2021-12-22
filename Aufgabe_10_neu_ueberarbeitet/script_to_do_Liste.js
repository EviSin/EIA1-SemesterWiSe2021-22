var Aufgabe_9;
(function (Aufgabe_9) {
    window.addEventListener("load", function () {
        /*Variablen*/
        let ToDoInput = document.getElementById("line");
        let ToDoButton = document.getElementById("plus");
        let todoList = document.getElementById("todo-list");
        let count = 0;
        let count2 = 0;
        let count3 = 0;
        /* Funktion des Counters des "total" */
        function counter1() {
            document.getElementById("counter1").innerHTML = String(count);
        }
        /* Funktion des Counters des "open" */
        function counter2() {
            document.getElementById("counter2").innerHTML = String(count2);
        }
        /* Funktion des Counters des "done" */
        function counter3() {
            document.getElementById("counter3").innerHTML = String(count3);
        }
        /* Funktion des Plus Buttons */
        ToDoButton.addEventListener("click", addTodo);
        function addTodo() {
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
            /* Counter zählt das Hinzufügen einer neuen ToDo + zählt das ToDo zu "open" */
            count++;
            counter1();
            count2++;
            counter2();
            count3;
            counter3();
            /* Funktion des Mülleimer Buttons */
            trashButton.addEventListener("click", function () {
                todoList.removeChild(todoDiv);
                /* Counter "total" wird abgezogen */
                count--;
                counter1();
                /* Counter "done" wird abgezogen" */
                count3--;
                counter3();
            });
            /* Funktion des Häkchen Buttons */
            checkmarkButton.addEventListener("click", function () {
                if (newToDo.style.textDecoration == "line-through") {
                    newToDo.style.textDecoration = "none";
                    /* Counter "open" wird dazugezählt, Counter "done" wird nicht gezählt*/
                    count2++;
                    count3--;
                    /* Diese sollen dann in das HTML eingefügt werden */
                    document.querySelector("#counter2").innerHTML = count2 + "";
                    document.querySelector("#counter3").innerHTML = count3 + "";
                }
                else {
                    newToDo.style.textDecoration = "line-through";
                    /* Counter "done" wird dazugezählt, Counter "open" wird nicht gezählt*/
                    count2--;
                    count3++;
                    /* Diese sollen dann in das HTML eingefügt werden */
                    document.querySelector("#counter2").innerHTML = count2 + "";
                    document.querySelector("#counter3").innerHTML = count3 + "";
                }
            });
            /* Funktion des Mikrofons */
            window.addEventListener("load", function () {
                const artyom = new Artyom();
                artyom.addCommands({
                    indexes: ["erstelle Aufgabe *"],
                    smart: true,
                    action: function (i, wildcard) {
                        console.log("Neue Aufgabe:" + wildcard);
                        /*Nach Aufnahme wird das Gesprochene wiedergegeben */
                        ToDoInput.value = wildcard;
                        /* Funktion fügt das Gesprochene in die ToDo */
                        addTodo();
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
        }
    });
})(Aufgabe_9 || (Aufgabe_9 = {}));
//# sourceMappingURL=script_to_do_Liste.js.map