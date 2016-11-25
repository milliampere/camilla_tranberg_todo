/*********************************/
/*   En fiffig liten to do-app   */
/*     av Camilla Tranberg,  	 */
/*       22 november 2016        */
/*********************************/


// Spara-knapp som kallar på funktion 
var saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", addTask);


// Specialare: Spara när trycker på enter
var textInput = document.getElementById("textInput");
textInput.addEventListener("keyup", function(event) {
	var x = event.keyCode;
	if(x == 13){
		console.log("Lägger till uppgift med enterknappen :)");
		addTask();
	}
});	


// Uppdatera listans event
function update() {

	// Lägger till event till checkbox
	var inputList = document.getElementsByClassName("checkbox");
	for(var i = 0; i < inputList.length; i++){
	inputList[i].addEventListener("change", taskIsDone);
	}

	// Lägger till event till papperskorg
	var spanList = document.getElementsByTagName("span");
	for(var j = 0; j < spanList.length; j++){
		spanList[j].addEventListener("click", removeTask);
		spanList[j].addEventListener("mouseover", function(){
    		this.style.color = "grey";
    	});
    	spanList[j].addEventListener("mouseout", function(){
    		this.style.color = "black";
    	});
	}
}


/**************************/
/*   ADD TASK             */
/**************************/

// Funktion: Lägga till syssla i lista

function addTask(){
	var textInput = document.getElementById("textInput");

	// Om textfältet lämnas tomt
	if(textInput.value === ""){
		alert("Hallå latmask, skriv in en uppgift!");
	}
	else {

		// Kapar texten om den är för lång (kanske inte snällt men livet är hårt)
		if(textInput.value.length > 40){
			textInput.value = textInput.value.substring(0,40) + "...";
		}

		var text = document.createTextNode(textInput.value);

		//Hämtar ul-listan
		var unfinishedTasks = document.getElementById("unfinishedTasks");

		// Skapar en li
		var taskLi = document.createElement("li");

		// Skapar en checkbox
		var checkbox = document.createElement("input");
		checkbox.setAttribute("type", "checkbox");
		checkbox.setAttribute("class", "checkbox");

		// Fäster input till li och li till ul 
		taskLi.appendChild(checkbox);
		taskLi.appendChild(text);
		unfinishedTasks.appendChild(taskLi);
		
		// Lägger till en soptunna
		taskLi.innerHTML += "<span class='trash'>Radera</span>";

		// Tömmer textfältet
		textInput.value = "";

		update();
	}
}


/**************************/
/*   CHANGE TO DONE       */
/**************************/

// Funktion: Lägga till syssla i avklarat

function taskIsDone(){

	// This är input-elementet, parentElement är li
	var checkedTask = this.parentElement;
	console.log("Flyttar ");

	// Lägger till i ny ul
	var ul = document.getElementById("finishedTasks");
	ul.appendChild(checkedTask);

	// Ta bort checkbox
	checkedTask.removeChild(this);

	// Stylar om
	checkedTask.style.color = "grey";
	checkedTask.style.textDecoration = "line-through";

	update();

}


/**************************/
/*   REMOVE TASK          */
/**************************/

// Funktion: Ta bort en syssla

function removeTask(){

	// this är span-elementet, parentElement är li
	var clickedBin = this.parentElement;
	console.log("Raderar ");

	// Tar bort li
	clickedBin.parentElement.removeChild(clickedBin);

	update();
}


