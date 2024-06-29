import { useAppSelector } from "../../redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  // Select the todos from the Redux store
  const todos = useAppSelector(state => state.todos.todos);
  return (
    <div>
      {/* Header section with AddTodoModal and TodoFilter components */}
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>

      {/* Main container for the todos */}
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-md space-y-3">
          {/* Conditional rendering based on the length of the todos array */}
          {todos.length > 0 ? (
            todos.map((item) => (
              <TodoCard
                key={item.id}
                isCompleted={item.isCompleted}
                title={item.title}
                description={item.description}
                id={item.id}
              />
            ))
          ) : (
            <div className="bg-white p-3">There are no tasks pending</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
