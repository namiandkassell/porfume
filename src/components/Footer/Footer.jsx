import React from "react";

function Footer(props) {
  return (
    <div>
      <footer className="footer">
        <div className="Container">
          <div className="footer-location">
            <div className="card-1 card">
              <h5>Кыргызстан</h5>
              <p>Бишкек - ул.Жусупа Абдырахманова</p>
              <p>Ош - Киевская ул.</p>
            </div>
            <div className="card-2 card">
              <h5>Казахстан</h5>
              <p>Алматы - ул.Назарбаева</p>
              <p>Астана - ул.Кошкебердиева</p>
            </div>
            <div className="card-3 card">
              <h5>Узбекистан</h5>
              <p>Ташкент - ул.Туркмена</p>
            </div>
          </div>
          <div className="footer-nums">
            <div className="num-boxes">
              <a href="tel:996705609393">Штаб: +996705609393</a>
              <a href="tel:996705609393">Штаб: +996705609393</a>
            </div>
            <div className="num-boxes">
              <a href="tel:996705609393">Штаб: +996705609393</a>
              <a href="tel:996705609393">Штаб: +996705609393</a>
            </div>
            <div className="num-boxes">
              <a href="tel:996705609393">Штаб: +996705609393</a>
              <a href="tel:996705609393">Штаб: +996705609393</a>
            </div>
          </div>
          <div className="footer-politic">
            <p>
            © 2023 DesPerfume Bluemarin / OOO CCC
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
