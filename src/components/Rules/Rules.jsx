import rules from "../../utils/rules";

export default function Rules() {
  return (
    <div className="rules__flex-container">
      <div className="rules__text-container">
        <h3 className="rules__title">
          Наша цель — единение человека и природы
        </h3>
        <p className="rules__text">
          Мы стремимся создать новый уровень отдыха на нашем озере, с заботой о
          балансе экосистем и комфорте отдыхающих. Мы рады ответственным гостям,
          которые любят свое хобби, природу и уважают других гостей.
        </p>
        <p className="rules__text">
          Мы прикладываем максимум усилий, чтобы рыбалка в Макарье была
          комфортной для всех желающих. Мы придерживаемся политики нулевой
          терпимости к загрязнению прибрежной территории и просим вас
          придерживаться нашей позиции. Мы в одностороннем порядке прекращаем
          сотрудничество с гостями, нарушающими наши правила.
        </p>
      </div>
      <div className="rules__container">
        {rules.map((x, index) => (
          <RuleCard
            key={index}
            image={x.image}
            boldText={x.boldText}
            text={x.text}
          />
        ))}
      </div>
    </div>
  );

  function RuleCard({ image, boldText, text }) {
    return (
      <div className="rule-card">
        <div className="rule__image">
          <img src={image} alt="" />
        </div>
        <div className="rule-card__container">
          <p className="rule-card__bold-text">{boldText}</p>
          <p className="rule-card__text">{text}</p>
        </div>
      </div>
    );
  }
}
