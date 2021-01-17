import React, {useState} from 'react';
import { nanoid } from "nanoid";
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';


function App({theTasks}) {

	const [tasks, setTasks] = useState(theTasks);

	const toggleTaskCompleted = (id) => {
		const updatedTasks = tasks.map(task => {
			if (task.id === id) {
				return {...task, completed: !task.completed}
			}
			return task;
		});
		setTasks(updatedTasks);
	};

	const deleteTask = (id) => {
		const remainingTask = tasks.filter(task => id !== task.id);
		setTasks(remainingTask);
	}

	const editTask = (id, newName) => {
		const editedTaskList = tasks.map(task => {
			if (id === task.id) {
				return {...task, name: newName}
			}
			return task;
		});
		setTasks(editedTaskList);
	}

	const taskList = tasks.map(task => {
		return (
			<Todo 
				key = {task.id} 
				id = {task.id} 
				name = {task.name} 
				completed = {task.completed}
				toggleTaskCompleted = {toggleTaskCompleted}
				deleteTask = {deleteTask}
				editTask = {editTask}
				/>
		);
	});

	const addTask = (name) => {
		const newTask = {id: "todo-" + nanoid(), name: name, completed: false};
		setTasks([...tasks, newTask]);
	};

	const taskNoun = taskList.length !== 1 ? 'tasks' : 'task';
	const headingText = `${taskList.length} ${taskNoun} remaining`;

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
				{headingText}
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
