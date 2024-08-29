import logo from "../../images/logo-white.svg";

export default function Footer() {
  return(
    <footer className="footer">
      <div className="footer__flex-container">
        <img src={logo} className="footer__logo" alt="Логотип Макарье" />
        <div className="footer__container">
          <a href="#terrain" className="footer__menu-link">Местность</a>
          <a href="#bestiary" className="footer__menu-link">Бестиарий</a>
          <a href="#price" className="footer__menu-link">Прайс</a>
          <a href="#action" className="footer__menu-link">Акции</a>
        </div>
        <div className="footer__container">
          <a href="#abonement" className="footer__menu-link">Абонемент</a>
          <a href="#rules" className="footer__menu-link">Правила отдыха</a>
          <a href="#reviews" className="footer__menu-link">Отзывы</a>
          <a href="#contacts" className="footer__menu-link">Контакты</a>
        </div>
        <div>
          <p className="footer__number">+7 (951) 869-50-03</p>
          <div className="footer__links">
            <a href="#" className="footer__link-tg"></a>
            <a href="#" className="footer__link-wa"></a>
            <a href="#" className="footer__link-vk"></a>
            <a href="#" className="footer__link-ok"></a>
          </div>
          <p className="footer__text">Политика конфиденциальности</p>
        </div>
      </div>
    </footer>
  )
}
