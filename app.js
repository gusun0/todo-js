document.getElementById('addToDo').addEventListener('click', () => {
	const input = document.getElementById('inputText');
	const todoItem = input.value;
	if(!todoItem || todoItem.length <= 0) return;

	createTodoItem(todoItem);
	input.value = '';
});

const createTodoItem = (textValue) => {

	
	const element = `
<div class="alert alert-danger alert-dismissible fade show justify-contet-center" role="alert"
							    style="width: 90vw"
	>
	${textValue}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>


</div>`;

	document.getElementById('todoContainer').innerHTML += element;

}
