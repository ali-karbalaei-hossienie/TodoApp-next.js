import dbConnect from "../../../server/utils/dbConnect";
import Todo from "../../../server/models/todo";
dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  if (method === "POST") {
    const { formData } = body;
    await Todo.create({
      title: formData.title,
      description: formData.description,
    });
    const todos = await Todo.find({});
    return res.status(201).json({ message: "new todo added", todos });
  } else if (method === "GET") {
    const todos = await Todo.find({});
    return res.status(200).json({ todos });
  }
}
// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const newTod = {
//       id: Date.now(),
//       title: req.body.formData.title,
//     };
//     todos.push(newTod);
//     return res.status(201).json(todos);
//   }
//   if (req.method === "GET") {
//     const todos = await Todo.find({});
//     return res.status(200).json({ todos });
//   }
// }
