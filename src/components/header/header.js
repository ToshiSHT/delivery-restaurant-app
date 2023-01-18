import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className='wrapper'> 
                <span className="logo">Rolls Market</span>
                <ul className="menu">
                    <li>Ролы</li>
                    <li>Сеты</li>
                    <li>Пицца</li>
                    <li>Суши</li>
                    <li>Напитки</li>
                </ul>
                <span className='basket'> Корзина</span>
            </div>
           
        </header>
    )

}

export default Header;