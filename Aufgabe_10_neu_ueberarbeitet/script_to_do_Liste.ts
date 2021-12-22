namespace Aufgabe_10 {


    window.addEventListener("load", function (): void {

        /*Variablen*/
        let ToDoInput: HTMLInputElement = (document.getElementById("line") as HTMLInputElement);
        let ToDoButton = document.getElementById("plus");
        let todoList = document.getElementById("todo-list");
        let count: number = 0;
        let count2: number = 0;
        let count3: number = 0;

        /* Funktion des Counters des "total" */
        
        function counter1(): void {
        document.getElementById("counter1").innerHTML = String(count);
        }

        /* Funktion des Counters des "open" */
        function counter2(): void {
        document.getElementById("counter2").innerHTML = String(count2);
        }

        /* Funktion des Counters des "done" */
        function counter3(): void {
        document.getElementById("counter3").innerHTML = String(count3);
        }

         /* Funktion des Plus Buttons */
        ToDoButton.addEventListener("click", addTodo);

        function addTodo(): void {

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

            /* Counter zählt das Hinzufügen einer neuen ToDo + zählt das ToDo zu "open" + Counter "done" zählt nicht mit*/
            count++;
            counter1();
            count2++;
            counter2();
            count3;
            counter3();

            /* Funktion des Mülleimer Buttons */

            trashButton.addEventListener("click", function (): void {
            todoList.removeChild(todoDiv);
            /* Counter "total" wird abgezogen */
            count--;
            counter1();
            /* Counter "done" wird abgezogen" */
            count3--;
            counter3();
            });

            /* Funktion des Häkchen Buttons */

            checkmarkButton.addEventListener("click", function (): void {
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
        }

        /* Funktion des Mikrofons */

        var artyom = new Artyom();

        artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i: any, wildcard: string): void {
            console.log("Neue Aufgabe:" + wildcard);
            ToDoInput.value = wildcard;
            /* Funktion fügt das Gesprochene in die ToDo */
            addTodo();
        } });

        /*Funktion des Aufnehmens */

        function startContinuousArtyom(): void {
            artyom.fatality();
            setTimeout(function (): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function (): void {
                    console.log("Ready!");
                });
            }, 150);
        }
        startContinuousArtyom();
    

    });
    

}
