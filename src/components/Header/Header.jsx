import logo from "../../images/logo.svg"

export default function Header() {
  return(
    <header className="header">
    {/*  фиксировано при прокрутке страницы!!!
         отступ справа дурацкий!!! */}
    <img src={logo} className="header__logo" alt="Логотип Макарье" />
    <nav className="header__menu">
      <a href="#terrain" className="header__menu-link">Местность</a>
      <a href="#bestiary" className="header__menu-link">Бестиарий</a>
      <a href="#price" className="header__menu-link">Прайс</a>
      <a href="#discount" className="header__menu-link">Акции</a>
      <a href="#abonement" className="header__menu-link">Абонемент</a>
      <a href="#rules" className="header__menu-link">Правила отдыха</a>
      <a href="#reviews" className="header__menu-link">Отзывы</a>
      <a href="#contacts" className="header__menu-link">Контакты</a>
    </nav>
    <button className="header__to-book">Забронировать</button>
  </header>
  )
}

