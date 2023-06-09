import './index.css'

export default function NavBar({ sendSearchValue}){
    function onChangeHandler(e){
        sendSearchValue(e.target.value)
    }
    return (
        <div className="navbar--container">
            <span>Movie list</span>
            <input type="text" onChange={onChangeHandler} placeholder='Search...'/>
            <img src='assets/1.jpg' alt='profile pic'/>
        </div>
    )
}