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
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { handleEdit } from "../../redux/features/todoSlice";
const UpdateTodoModal = ({ todoId }: { todoId: string }) => {
    const dispatch = useAppDispatch();
    const todo = useAppSelector((state) =>
        state.todos.todos.find((todo) => todo.id === todoId)
    );
    const [task, setTask] = useState(todo ? todo.title : "");
    const [description, setDescription] = useState(todo ? todo.description : "");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const taskDetails = {
            id: todoId,
            title: task,
            description: description,
            isCompleted: todo ? todo.isCompleted : false,
        };
        dispatch(handleEdit(taskDetails))
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-[#5C53FE]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                    </svg>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Update Task</DialogTitle>
                    <DialogDescription>
                        {todo ? "Update your task details" : "Add your tasks that you want to finish"}
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
                                value={task}
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
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter your Task Description"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button className="bg-primary-gradient text-xl font-semibold" type="submit">
                                Update
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateTodoModal;
