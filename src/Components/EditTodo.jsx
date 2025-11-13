// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams, Link } from "react-router-dom";
// import { getTodos, updateTodos} from "../redux/reducer/slice/todos/todosSlice";

// export default function EditTodo() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { items, status } = useSelector((s) => s.todos);

//   const [title, setTitle] = useState("");

//   useEffect(() => {
//     if (status === "idle") dispatch(getTodos());
//   }, [status, dispatch]);

//   useEffect(() => {
//     const todo = items.find((t) => String(t.id) === id);
//     if (todo) setTitle(todo.title);
//   }, [items, id]);

//   const onSave = async (e) => {
//     e.preventDefault();
//     const todo = items.find((t) => String(t.id) === id);
//     if (!todo) return;
//     await dispatch(updateTodos({ ...todo, title }));
//     navigate("/");
//   };

//   return (
//     <div style={styles.wrap}>
//       <h2>Edit Todo</h2>
//       <form onSubmit={onSave} style={styles.form}>
//         <input style={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} />
//         <div style={{ display: "flex", gap: 8 }}>
//           <button style={styles.btn} type="submit">Save</button>
//           <Link to="/" style={styles.linkBtn}>Cancel</Link>
//         </div>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   wrap: { maxWidth: 520, margin: "0 auto" },
//   form: { display: "flex", gap: 8, marginTop: 12 },
//   input: { flex: 1, padding: 8, borderRadius: 6, border: "1px solid #ccc" },
//   btn: { padding: "8px 14px", borderRadius: 6, border: "1px solid #333", background: "#333", color: "#fff", cursor: "pointer" },
//   linkBtn: { padding: "8px 14px", borderRadius: 6, border: "1px solid #666", textDecoration: "none" }
// };



import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getTodos, updateTodos } from "../redux/reducer/slice/todos/todosSlice";

export default function EditTodo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, status } = useSelector((s) => s.todos);

  const [title, setTitle] = useState("");

  useEffect(() => {
    if (status === "idle") dispatch(getTodos());
  }, [status, dispatch]);

  useEffect(() => {
    // ✅ compare numeric IDs consistently
    const todo = items.find((t) => String(t.id) === String(id));
    if (todo) setTitle(todo.title);
  }, [items, id]);

  const onSave = async (e) => {
    e.preventDefault();
    const todo = items.find((t) => String(t.id) === String(id));
    if (!todo) return;
    await dispatch(updateTodos({ ...todo, title }));
    navigate("/");
  };

  return (
    <div style={styles.wrap}>
      <h2>Edit Todo</h2>
      <form onSubmit={onSave} style={styles.form}>
        <input
          style={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div style={{ display: "flex", gap: 8 }}>
          <button style={styles.btn} type="submit">Save</button>
          <Link to="/" style={styles.linkBtn}>Cancel</Link>
        </div>
      </form>
    </div>
  );
}

const styles = {
  wrap: { maxWidth: 520, margin: "0 auto" },
  form: { display: "flex", gap: 8, marginTop: 12 },
  input: { flex: 1, padding: 8, borderRadius: 6, border: "1px solid #ccc" },
  btn: { padding: "8px 14px", borderRadius: 6, border: "1px solid #333", background: "#333", color: "#fff", cursor: "pointer" },
  linkBtn: { padding: "8px 14px", borderRadius: 6, border: "1px solid #666", textDecoration: "none" }
};

