import { useState } from "react";
import styles from "../styles/Form.module.css";

const TodoForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [isShow, setIsShow] = useState(false);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
      <form onSubmit={(e) => onSubmit(e, formData)}>
        <div className={styles.inputFrom}>
          <label>title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) => changeHandler(e)}
            placeholder="todo title ..."
          />
        </div>
        <div className={styles.inputFrom}>
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            value={formData.description}
            onChange={(e) => changeHandler(e)}
          />
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
