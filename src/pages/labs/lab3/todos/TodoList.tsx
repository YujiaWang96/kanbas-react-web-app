import TodoItem from "./TodoItem";
import todos from "./todos.json";
const TodoList = () => {
  return (
    <>
      <h3>Todo List</h3>
      <ul className="list-group" style={{ width: "300px" }}>
        {todos.map((todo) => {
          return <TodoItem todo={todo} />;
        })}
      </ul>
      <hr />
    </>
  );
};
export default TodoList;
