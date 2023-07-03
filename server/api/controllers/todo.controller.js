import Day from "../models/Day.js";
import Task from "../models/Task.js";

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

  const { title, description, status, weight } = req.body;

  const newTask = await Task.create({
    title,
    description,
    status,
    weight
  });

  const newDay = await Day.findOneAndUpdate(
    { "date": new Date().toDateString() },
    {
      $push: { tasks: newTask._id }
    },
    { upsert: true, new: true }
  )

  return res.status(200).json({ newTask, newDay });
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, weight, status } = req.body;

  const taskUpdated = await Task.findByIdAndUpdate(
    id,
    {
      title,
      description,
      weight,
      status
    },
    { new: true }
  );

  if (status) {
    // update completion
    await Day.findOneAndUpdate(
      {
        $and: [
          { date: new Date().toDateString() },
          { tasks: { $in: [id] } }
        ]
      },
      { $inc: { completion: weight } }
    )
  }

  return res.status(200).json({ taskUpdated });
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (id.length !== 24) console.log("id invalid");

  await Task.findByIdAndDelete(id);

  const tasks = await Task.find();

  return res.status(200).json({ tasks });
};


