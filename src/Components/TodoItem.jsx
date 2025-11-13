import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTodos, updateTodos} from "../redux/reducer/slice/todos/todosSlice";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const toggleDone = async () => {
    await dispatch(updateTodos({ ...todo, done: !todo.done }));
  };

  const remove = async () => {
    await dispatch(deleteTodos(todo.id));
  };

  return (
    <div style={styles.item}>
      <input type="checkbox" checked={todo.done} onChange={toggleDone} />
      <span style={{ ...styles.title, textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.title}
      </span>
      <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
        <Link to={`/edit/${todo.id}`} style={styles.link}>Edit</Link>
        <button onClick={remove} style={styles.delBtn}>Delete</button>
      </div>
    </div>
  );
}

const styles = {
  item: { display: "flex", alignItems: "center", gap: 10, padding: 10, border: "1px solid #eee", borderRadius: 8, marginBottom: 8, background: "#fafafa" },
  title: { fontSize: 16 },
  link: { padding: "6px 10px", border: "1px solid #007bff", color: "#007bff", borderRadius: 6, textDecoration: "none" },
  delBtn: { padding: "6px 10px", border: "1px solid #b00020", color: "#fff", background: "#b00020", borderRadius: 6, cursor: "pointer" }
};
