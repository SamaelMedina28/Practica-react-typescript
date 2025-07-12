import { FaTrash } from "react-icons/fa";

type Props = {
  text: string;
  completed: boolean;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  id: number;
}

export default function Item({ text, completed, toggleTodo, deleteTodo, id }: Props) {
  return (
    <li className={"flex gap-2 items-center justify-between w-1/3 mx-auto bg-gray-600 rounded px-5 py-4 " + (completed ? 'bg-green-600' : 'bg-gray-600')}>
      <span className="font-medium">{text}</span>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        <button onClick={() => deleteTodo(id)} className="bg-red-500 text-white px-2 py-2 rounded"><FaTrash size={20} color="white" /></button>
      </div>
    </li>
  )
}