import Todo from './components/Todo';

function App() {
	return (
		<div className = "todoaap stack-large">
			<h1>To-Do</h1>
			<form>
				<h2 className = "label-wrapper">
					<label htmlFor = "new-todo-item" className = "label__lg">
						What needs to be done?
					</label>
				</h2>
				<input 
					type = "text"
					id = "new-todo-item"
					className = "input input__lg"
					name ="text"
					autocomplete = "off" 
				/>
				<button type = "submit" className = "btn btn__primary btn__lg">
					Add
				</button>
			</form>
			<div className = "filters btn-group stack-exception">
				<button type = "button" className = "btn toggle-btn" aria-pressed = "true">
					<span className = "visually-hidden">Show </span>
					<span>all</span>
					<span className = "visually-hidden"> tasks</span>
				</button>
				<button type = "button" className = "btn toggle-btn" aria-pressed = "false">
					<span className = "visually-hidden">Show </span>
					<span>Active</span>
					<span className = "visually-hidden"> tasks</span>
				</button>
				<button type = "button" className = "btn toggle-btn" aria-pressed = "false">
					<span className = "visually-hidden">Show </span>
					<span>Completed</span>
					<span className = "visually-hidden"> tasks</span>
				</button>
			</div>

			<h2 id = "list-heading">
				3 tasks remaining
			</h2>

			<ul 
				role = "list"
				className = "todo-list stack-large stack-exception"
				aria-labelledby = "list-heading"
			>
				<Todo name = "Eat" />
				<Todo  name = "Sleep"/>
				<Todo name = "Repeat" />
			</ul>
		</div>
	);

}

export default App;
