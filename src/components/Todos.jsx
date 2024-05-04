import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice"

const Todos = () => {
	const todos = useSelector((state) => state.todos)

	const dispatch = useDispatch()

	const handleTodoDelete = (id) => {
        dispatch(removeTodo(id))
    }

	return (
		<ul className="list-none">
			{todos.map((todo) => (
				<li
					className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
					key={todo.id}
				>
					<div className="text-white">{todo.task}</div>
					<button
						onClick={() => handleTodoDelete(todo.id)}
						className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-trash-2"
						>
							<path d="M3 6h18" />
							<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
							<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
							<line x1="10" x2="10" y1="11" y2="17" />
							<line x1="14" x2="14" y1="11" y2="17" />
						</svg>
					</button>
				</li>
			))}
		</ul>
	)
}

export default Todos
