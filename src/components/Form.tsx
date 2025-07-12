import { useTodos } from "../hooks/useTodos";
import { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Item from "./ui/Item";
import { FaSave } from "react-icons/fa";
export const Form = () => {
  const { addTodo, todos, toggleTodo, deleteTodo } = useTodos();
  const [text, setText] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() === '') {
      alert('Por favor, ingresa una tarea');
      return;
    }
    addTodo(text);
    setText('');
  }
  return (
    <>
      <form onSubmit={onSubmit} className="flex gap-2 w-1/3 mx-auto" >
        <Input label="Tarea" value={text} onChange={onChange} />
        <Button icon={<FaSave size={20} />} />
      </form>
      <ul className="flex flex-col gap-2 my-5">
        {todos.map(todo => (
          <Item key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </>
  )
}