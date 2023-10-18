import headerImg from '../assets/headerImg.jpg'

function Header() {
    return (
        <div className="header-container">
            <img src={headerImg} alt="todo list" />
            <span className="header-todo-label">To-Do List</span>
        </div>
    )
}

export default Header;