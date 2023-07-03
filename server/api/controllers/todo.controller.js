
import Task from "../models/task.js";

// req: request : url, params, body, header
// export const getNote = async (req, res) => {
//   const { id } = req.params;

//   if (id.length !== 24) throw new HttpException(400, "Invalid id");

//   const note = await Note.findById(id);

//   if (!note) {
//     throw new HttpException(404, "Note not found");
//   }

//   return res.status(200).json({ note });
// };

export const getAllTasks = async (req, res) => {
  const tasks = await Task.find();
  return res.status(200).json({ tasks });
};

export const createTask = async (req, res) => {
    
  const { title, description, status,priority } = req.body;

  const newTask = await Task.create({
    title,
    description,
    status,
    priority
  });

  return res.status(200).json({ newTask });
};

// export const updateNote = async (req, res) => {
//   const { id } = req.params;
//   const { title, description, status } = req.body;

//   const noteUpdated = await Note.findByIdAndUpdate(
//     id,
//     {
//       title,
//       description,
//       status,
//     },
//     { new: true }
//   );

//   return res.status(200).json({ noteUpdated });
// };

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (id.length !== 24) console.log("id invalid");

  await Task.findByIdAndDelete(id);

  const tasks = await Task.find();

  return res.status(200).json({ tasks });
};

// export const searchNote = async (req, res) => {
//   const { title } = req.query;

//   if (!title) throw new HttpException(400, "Title is required");

//   const notes = await Note.find({ title: { $regex: title, $options: "i" } });

//   return res.status(200).json({ notes });
// };
