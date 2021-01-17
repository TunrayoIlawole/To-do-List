import React from 'react';
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';


function App({tasks}) {

	const taskList = tasks.map(task => {
		return (
			<Todo key = {task.id} id = {task.id} name = {task.name} completed = {task.completed} />
		);
	});

	const addTask = (name) => {
		alert(name);
	}

	return (
		<div className = "todoaap stack-large">
			<h1>To-Do</h1>
			<Form addTask = {addTask}/>
			<div className = "filters btn-group stack-exception">
				<FilterButton />
				<FilterButton />
				<FilterButton />
			</div>

			<h2 id = "list-heading">
				{tasks.length} tasks remaining
			</h2>

			<ul 
				role = "list"
				className = "todo-list stack-large stack-exception"
				aria-labelledby = "list-heading"
			>
				{taskList}
			</ul>
		</div>
	);

}

export default App;
