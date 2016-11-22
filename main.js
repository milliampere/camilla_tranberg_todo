/*********************************/
/*   En fiffig liten to do-app   */
/*     av Camilla Tranberg,  	 */
/*       22 november 2016        */
/*********************************/


// Spara-knapp som kallar på funktion 
var saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", addTask);


// Uppdatera listans event
function update() {

	// Lägger till event till checkbox
	var inputList = document.getElementsByClassName("cbox");
	for(var i = 0; i < inputList.length; i++){
	inputList[i].addEventListener("change", taskIsDone);
	}

	// Lägger till event till papperskorg
	var spanList = document.getElementsByTagName("span");
	for(var j = 0; j < spanList.length; j++){
		spanList[j].addEventListener("click", removeTask);	
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
		var text = document.createTextNode(textInput.value);

		//Hämtar ul-listan
		var unfinishedTasks = document.getElementById("unfinishedTasks");

		// Skapar en li
		var taskLi = document.createElement("li");

		// Skapar en checkbox
		var checkbox = document.createElement("input");
		checkbox.setAttribute("type", "checkbox");
		checkbox.setAttribute("class", "cbox");

		// Fäster input till li och li till ul 
		taskLi.appendChild(checkbox);
		taskLi.appendChild(text);
		unfinishedTasks.appendChild(taskLi);
		
		// Lägger till en soptunna-ikon
		taskLi.innerHTML += "<span class='glyphicon glyphicon-trash'></span>";

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
	console.log("Flyttar " + checkedTask.innerText);
	// Detacha från ul och lägg i ny ul
	checkedTask.parentElement.removeChild(checkedTask);
	var ul = document.getElementById("finishedTasks");
	ul.appendChild(checkedTask);
	// Ta bort checkbox
	checkedTask.removeChild(this);

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
	console.log("Raderar " + clickedBin.innerText);

	// Tar bort li
	clickedBin.parentElement.removeChild(clickedBin);

	update();
}


