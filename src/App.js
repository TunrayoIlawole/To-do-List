import React, {useState} from 'react';
import { nanoid } from "nanoid";
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

const FILTER_MAP = {
	All: () => true,
	Active: task => !task.completed,
	Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);


function App({theTasks}) {

	const [tasks, setTasks] = useState(theTasks);
	const [filter, setFilter] = useState('All');

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

	const taskList = tasks
	.filter(FILTER_MAP[filter])
	.map(task => {
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

	const filterList = FILTER_NAMES.map(name => (
		<FilterButton 
			key = {name} 
			name = {name}
			isPressed = {name === filter}
			setFilter = {setFilter}
			/>
	))

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
				{filterList}
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
