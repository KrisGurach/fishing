import ImageTerrain from "../../images/terrain.png"

export default function TerrainSlider() {
  return(
    <section className="terrain" id="terrain">
    <h2 className="section-header">Местность</h2>
    {/* спросить про картинки и подписи в слайдере, использовать библиотеку (см беседу) */}
    <div className="terrain__flex-container">
      <img src={ImageTerrain} className="terrain__slider" alt="Пирс в озере" />
      <div className="terrain__description">
        <h3 className="terrain__header">Комфортабельные места подхода и пирсы</h3>
        <p className="terrain__text">
          Также как консультация с широким активом требует от нас анализа инновационных методов управления процессами.
          В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира
          объединены в целые кластеры себе подобных.
        </p>
        {/* добавить кнопки */}
      </div>
    </div>
  </section>
  )
}
