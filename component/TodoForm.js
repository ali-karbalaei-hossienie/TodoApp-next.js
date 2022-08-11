import { useState } from "react";
import styles from "../styles/Form.module.css";

const TodoForm = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const [isShow, setIsShow] = useState(false);

  if (!isShow) {
    return (
      <div>
        <button className={styles.AddTodo} onClick={() => setIsShow(true)}>
          Add New Todo?
        </button>
      </div>
    );
  }

  return (
    <div className={styles.wrap_form}>
      <form onSubmit={(e) => onSubmit(e, value)}>
        <div className={styles.inputFrom}>
          <label>title</label>
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            placeholder="todo title ..."
          />
        </div>
        <div className={styles.inputFrom}>
          <label>Description</label>
          <textarea type="text" onChange={(e) => setValue(e.target.value)} />
        </div>
        <div className={styles.btnWraper}>
          <button className={styles.btnCancel} onClick={() => setIsShow(false)}>
            cancel
          </button>
          <button type="submit" className={styles.btnSubmit}>
            Add New Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
