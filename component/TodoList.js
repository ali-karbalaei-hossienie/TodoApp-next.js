import { BiTrash } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import styles from "../styles/Home.module.css";

const TodoList = ({ Todos, onDelete }) => {
  return (
    <div className={styles.todos}>
      {Todos.map((todo) => {
        return (
          <div className={styles.todo} key={todo.id}>
            <div className={styles.todo_title}>{todo.title}</div>
            <div>
              <button>
                <BiTrash
                  className={styles.todo_trash}
                  onClick={() => onDelete(todo.id)}
                />
              </button>
              <button>
                <FaEdit className={styles.todo_edit} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
