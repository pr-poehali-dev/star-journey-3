import Icon from "@/components/ui/icon"

const data = {
  sections: {
    expedition: [
      { text: "Маршрут экспедиции", href: "#route" },
      { text: "Состав отряда", href: "#crew" },
      { text: "Ключевые люди", href: "#people" },
    ],
    context: [
      { text: "Великая Северная экспедиция", href: "#" },
      { text: "Вторая Камчатская экспедиция", href: "#" },
      { text: "Витус Беринг", href: "#" },
    ],
    geography: [
      { text: "Верхнеудинск", href: "#" },
      { text: "Охотское море", href: "#" },
      { text: "Хребет Джугджур", href: "#" },
    ],
  },
  facts: [
    { value: "1735–1737", label: "Годы экспедиции" },
    { value: "≈2800", label: "Километров пути" },
    { value: "2 года", label: "Длительность" },
  ],
}

export default function Footer() {
  return (
    <>
      <style>{`
        .ai-footer {
          background-color: #001f27;
          position: relative;
          overflow: hidden;
        }

        .ai-footer::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.25;
          background: #cb4b16;
          filter: blur(140px);
          height: 60%;
          width: 50%;
          position: absolute;
          top: 20%;
          left: -25%;
          z-index: 0;
        }

        .footer-container {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 80px 30px 30px;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 2fr;
          gap: 80px;
          margin-bottom: 60px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 24px;
        }

        .brand-icon {
          width: 50px;
          height: 50px;
          background: #cb4b16;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          color: #fff;
        }

        .brand-name {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 22px;
          color: #ffffff;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .brand-description {
          font-family: "Montserrat";
          font-size: 15px;
          line-height: 1.8;
          color: #657b83;
          margin-bottom: 40px;
        }

        .facts-row {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
        }

        .fact-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .fact-value {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 28px;
          color: #cb4b16;
        }

        .fact-label {
          font-family: "Montserrat";
          font-size: 12px;
          color: #657b83;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .link-column h3 {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 14px;
          color: #cb4b16;
          text-transform: uppercase;
          margin: 0 0 20px;
          letter-spacing: 1.5px;
        }

        .link-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .link-item {
          margin-bottom: 12px;
        }

        .link-item a {
          font-family: "Montserrat";
          font-size: 14px;
          color: #657b83;
          text-decoration: none;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .link-item a:hover {
          color: #ffffff;
        }

        .footer-bottom {
          border-top: 1px solid #073642;
          padding-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .copyright {
          font-family: "Montserrat";
          font-size: 14px;
          color: #657b83;
        }

        .copyright span {
          color: #cb4b16;
        }

        .footer-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: "Montserrat";
          font-size: 12px;
          color: #657b83;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media screen and (max-width: 1199px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-links {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media screen and (max-width: 767px) {
          .footer-container {
            padding: 60px 16px 20px;
          }
          .footer-links {
            grid-template-columns: 1fr 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
          .facts-row {
            gap: 24px;
          }
        }
      `}</style>

      <footer className="ai-footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="brand-logo">
                <div className="brand-icon">🧭</div>
                <div className="brand-name">
                  Верхнеудинско-<br />Охотский отряд
                </div>
              </div>
              <p className="brand-description">
                Документация Верхнеудинско-Охотского отряда Великой Северной экспедиции 1735–1737 годов. 
                Более 2800 км пути через нехоженые просторы Восточной Сибири.
              </p>
              <div className="facts-row">
                {data.facts.map((fact, i) => (
                  <div key={i} className="fact-item">
                    <span className="fact-value">{fact.value}</span>
                    <span className="fact-label">{fact.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="footer-links">
              <div className="link-column">
                <h3>Экспедиция</h3>
                <ul className="link-list">
                  {data.sections.expedition.map((link, i) => (
                    <li key={i} className="link-item">
                      <a href={link.href}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="link-column">
                <h3>Контекст</h3>
                <ul className="link-list">
                  {data.sections.context.map((link, i) => (
                    <li key={i} className="link-item">
                      <a href={link.href}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="link-column">
                <h3>География</h3>
                <ul className="link-list">
                  {data.sections.geography.map((link, i) => (
                    <li key={i} className="link-item">
                      <a href={link.href}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              Великая Северная экспедиция · <span>1733–1743</span> · Российская империя
            </p>
            <div className="footer-badge">
              <Icon name="MapPin" size={14} />
              Верхнеудинск → Охотск
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
