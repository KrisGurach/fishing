import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl; // Удаляем метод, чтобы избежать использования старых иконок
L.Icon.Default.mergeOptions({
  iconUrl: require('leaflet/dist/images/marker-icon.png'), // Стандартная иконка
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'), // Стандартная иконка высокого разрешения
  shadowUrl: require('leaflet/dist/images/marker-shadow.png') // Тень для иконки
});

export default function Contacts() {
  const position = [51.772609, 39.689215]; // Координаты для маркера

  return (
    <div>
      <div className="contacts__flex-container">
        <div className="contacts__container">
          <h2 className="contacts__title">Адрес</h2>
          <p className="contacts__text">
            Воронежская обл., Новоусманский р-н, село Макарье
          </p>
        </div>

        <div className="contacts__container">
          <h2 className="contacts__title">Координаты</h2>
          <p className="contacts__text">51.772609, 39.689215</p>
        </div>

        <div className="contacts__container">
          <h2 className="contacts__title">Телефон</h2>
          <p className="contacts__text">+7 (951) 869-50-03</p>
        </div>
      </div>

      <div className="contacts__map">
        <MapContainer center={position} zoom={13} style={{ height: "620px", width: "100%", borderRadius: "50px" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Мальцевский пруд
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
