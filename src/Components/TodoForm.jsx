import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../redux/reducer/slice/todos/todosSlice";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await dispatch(addTodos(title));
    setTitle("");
  };

  return (
    <form onSubmit={onSubmit} style={styles.form}>
      <input
        style={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task…"
      />
      <button style={styles.btn} type="submit">Add</button>
    </form>
  );
}

const styles = {
  form: { display: "flex", gap: 8, marginBottom: 16 },
  input: { flex: 1, padding: 8, borderRadius: 6, border: "1px solid #ccc" },
  btn: { padding: "8px 14px", borderRadius: 6, border: "1px solid #333", background: "#333", color: "#fff", cursor: "pointer" }
};