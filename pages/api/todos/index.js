import { todos } from "../../../data/todos";
export default function handler(req, res) {
  if (req.method === "POST") {
    const newTod = {
      id: Date.now(),
      title: req.body.value,
    };
    todos.push(newTod);
    return res.status(201).json(todos);
  } else if (req.method === "GET") return res.status(200).json(todos);
}
