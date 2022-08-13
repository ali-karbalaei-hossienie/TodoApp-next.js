import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import TodoList from "../component/TodoList";
import TodoForm from "../component/TodoForm";

export default function Home() {
  const [Todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [Err, setErr] = useState(false);

  useEffect(() => {
    const fetcher = async () => {
      try {
        const { data } = await axios.get("/api/todos");
        console.log(data);
        setLoading(false);
        setTodos(data);
      } catch (err) {
        setLoading(false);
        setErr(err.message);
      }
    };
    fetcher();
  }, []);

  const RenderTodo = () => {
    let TodoDetail = <div>loading ....</div>;
    if (Err) {
      TodoDetail = <div>{Err}</div>;
    }
    if (Todos) {
      TodoDetail = <TodoList Todos={Todos} onDelete={() => DeleteHandler()} />;
    }
    return TodoDetail;
  };

  const DeleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(`/api/todos/${id}`);
      setTodos(xx);
    } catch (err) {
      setErr(err.message);
    }
  };

  const AddNewTodo = async (e, formData) => {
    console.log(formData);
    e.preventDefault();
    const { data } = await axios.post(`/api/todos`, { formData });
    setTodos(data);
  };
  return (
    <div>
      <nav className={styles.nav}>
        <h1>TodoList App using Next.js</h1>
      </nav>
      <div className="container">
        <TodoForm onSubmit={AddNewTodo} />
        <section className={styles.main}>{RenderTodo()}</section>
      </div>
    </div>
  );
}
