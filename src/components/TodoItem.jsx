export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    return (
        <li  className="list-item">
            <label htmlFor="">
              <input 
                type="checkbox" 
                checked={completed}
                onChange={e => {
                  console.log("Checkbox changed:", e.target.checked);
                  toggleTodo(id, e.target.checked)}
                }
              />
              {title}
            </label>
            <button 
              onClick={() => deleteTodo(id)}
              className="btn btn-danger">Delete</button>
          </li> 
    )
}