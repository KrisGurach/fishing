import imageTrash from "../images/rules/trash.svg";
import imageFire from "../images/rules/fire.svg";
import imageAlco from "../images/rules/alco.svg";
import imageHouse from "../images/rules/house.svg";
import imageSwim from "../images/rules/swim.svg";
import imageShip from "../images/rules/ship.svg";

const rules = [
  {
    image: imageTrash,
    boldText: "Запрещается",
    text: "мусорить на территории",
  },

  {
    image: imageFire,
    boldText: "Запрещается",
    text: "разведение открытого огня",
  },

  {
    image: imageAlco,
    boldText: "Запрещается",
    text: "употребление алкогольных веществ",
  },

  {
    image: imageHouse,
    boldText: "Запрещается",
    text: "установка палатки в неустановленных местах",
  },

  {
    image: imageSwim,
    boldText: "Запрещается",
    text: "плавание в водоеме",
  },

  {
    image: imageShip,
    boldText: "Запрещается",
    text: "использование плавcредств",
  },
];

export default rules;
