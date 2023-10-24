import headerImg from '../assets/img/headerImg.jpg'

import '../styles/styles.css';

function Header() {
    return (
        <div className="header-container">
            <img src={headerImg} alt="todo list" />
            <span className="header-todo-label">To-Do List</span>
        </div>
    )
}

export default Header;