import Image from 'next/image'

export default function Home() {
  return (
    <main className="main">
      <h2 className="title">Ближайшие подлёты астероидов</h2>
      <div className="units">
        <button className="unit">в километрах</button>
        <div>|</div>
        <button className="unit unit-current">в лунных орбитах</button>
      </div>
      <ul className="cards">
        <li className="card">
          <div className="date">12 сент 2023</div>
          <div className="data">
            <div className="distance">3 лунные орбиты</div>
            <Image
              src="/asteroid-mini.png"
              alt="" className="image"
              height={26}
              width={26}
            />
            <div>
              <div className="name">2021 FQ</div>
              <div className="size">85 м</div>
            </div>
          </div>
          <div className="options">
            <button className="order">заказать</button>
            <div className="note">Опасен</div>
          </div>
        </li>
        <li className="card">
          <div className="date">12 сент 2023</div>
          <div className="data">
            <div className="distance">3 лунные орбиты</div>
            <Image
              src="/asteroid-mini.png"
              alt="" className="image"
              height={26}
              width={26}
            />
            <div>
              <div className="name">2021 FQ</div>
              <div className="size">85 м</div>
            </div>
          </div>
          <div className="options">
            <button className="order">заказать</button>
            <div className="note">Опасен</div>
          </div>
        </li>
      </ul>
      <div className="trash-wrapper">
        <div>
          <div className="trash-title">Корзина</div>
          <div className="quantity">2 астероида</div>
        </div>
        <button className="send">Отправить</button>
      </div>
    </main>
  )
}
