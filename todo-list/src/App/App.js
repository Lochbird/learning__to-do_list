import "./App.css";

function App() {
  return (
    <div className="App">
      {/* create a todo list creator: */}
      <div className="todo">
        <form className="todo__creator">
          {/* input field for the task's title */}
          <label>
            Title
            <input className="todo__creator-title" type="text" required />
          </label>
          {/* input field for the task's description */}
          <label>
            Description
            <input className="todo__creator-desc" type="text" />
          </label>
          {/* input field for the due date/time (optional) */}
          <label>
            Due Date <input className="todo__creator-due-date" type="date" />
          </label>
          {/* input field for the category (optional) */}
          <label>
            Category
            <input className="todo__creator-category" type="text" />
          </label>
          {/* input field for the priority (optional) */}
          <label>
            Priority
            <input type="radio" name="priority" value="low" /> Low
            <input type="radio" name="priority" value="medium" /> Medium
            <input type="radio" name="priority" value="high" /> High
          </label>
          {/* submit button  */}
          <button className="todo__creator-button" type="submit">
            ✔
          </button>
        </form>
        <div className="todo__list"></div>
      </div>
      {/* create a location where the todo list can be viewed */}
      {/* add sorting features: */}
      {/* by due date */}
      {/* A-Z */}
      {/* Z-A  */}
      {/* A button for deleting the todo */}
      {/* a button for completing the todo */}
      {/* Have a location with the completed todos */}
    </div>
  );
}

export default App;
