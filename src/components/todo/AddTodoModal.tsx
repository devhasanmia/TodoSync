import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAppDispatch } from "../../redux/hooks";
import { addTodo } from "../../redux/features/todoSlice";

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const randomString = Math.random().toString(36).substring(2, 10);
    const taskDetails = {
      id: randomString,
      title: task,
      description: description,
      isCompleted: false
    }
    dispatch(addTodo(taskDetails))
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl font-semibold">
          Add Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add your tasks that you want to Finish
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                id="task"
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter your Task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter your Task Description"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="bg-primary-gradient text-xl font-semibold" type="submit">Submit</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
