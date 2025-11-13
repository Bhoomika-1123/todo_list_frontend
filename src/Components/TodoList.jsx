import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/reducer/slice/todos/todosSlice";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((s) => s.todos);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getTodos());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p>Loading…</p>;
  if (status === "failed") return <p style={{ color: "crimson" }}>Error: {error}</p>;
  if (!items.length) return <p>No todos yet. Add one!</p>;

  return (
    <div>
      {items.map((t) => (
        <TodoItem key={t.id} todo={t} />
      ))}
    </div>
  );
}
