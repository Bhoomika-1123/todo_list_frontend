import { Routes, Route, Link } from "react-router-dom";
import TodoForm from "./Components/TodoForm.jsx";
import TodoList from "./Components/TodoList.jsx";
import EditTodo from "./Components/EditTodo.jsx";

export default function App() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <Link to="/" style={styles.brand}>React CRUD + Redux Toolkit</Link>
      </header>

      <main style={styles.main}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2>Todos</h2>
                <TodoForm />
                <TodoList />
              </>
            }
          />
          <Route path="/edit/:id" element={<EditTodo />} />
        </Routes>
      </main>
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "#f6f7fb" },
  header: { padding: "16px 24px", borderBottom: "1px solid #eee", background: "#fff" },
  brand: { fontWeight: 700, color: "#111", textDecoration: "none" },
  main: { maxWidth: 720, margin: "24px auto", padding: "0 16px" }
};
