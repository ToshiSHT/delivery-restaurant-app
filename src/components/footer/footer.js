import './footer.css'

const Footer = () => {
    return(
        <footer className="footer">
            <div className="wrapper">
                <div className='descr'>Сеть ресторанов «Rols market» — это оперативная доставка блюд японской, паназиатской и европейской кухни в  Ростовской области</div>
                <div className='phone'>8 (9258) 188-88-88</div>
                <div className='timetable'>
                    <span>Принимаем заказы:</span>
                    <span>Пн-Вс: 10:00 - 23:00</span>
                </div>
                
            </div>
        </footer>
    )

}

export default Footer;