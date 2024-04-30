import { useAppSelector } from "@/redux/features/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const todoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-5">
        <div className="bg-white p-5 w-full h-full  space-y-3 rounded-lg">
          {todos.map((item) => (
            <TodoCard {...item} key={item.id} />
          ))}
        </div>
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default todoContainer;
