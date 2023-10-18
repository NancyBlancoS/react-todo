import '../styles/styles.css'

function Layout ({children}) {
    return (
        <div className="container">
            <header>{children}</header>
            <div className="add-task">Add Task</div>
            <div className="tasks-group">Tasks</div>
            
        </div>
    )
}

export default Layout;