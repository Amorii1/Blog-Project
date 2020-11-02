import Head from "next/head";
import homeContent from "../content/homeContent";
import { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
const users = [
  {
    id: 1,
    name: "Muartdha",
    coordinates: [-77.038659, 38.931567],
    image: "https://placekitten.com/g/40/40/",
    color: "#ff9800",
  },
  {
    id: 2,
    name: "Ali",
    coordinates: [-77.058659, 38.931567],
    image: "https://placekitten.com/g/50/50/",
    color: "#e91e63",
  },
  {
    id: 3,
    name: "Salim",
    coordinates: [-77.088659, 38.931567],
    image: "https://placekitten.com/g/50/50/",
    color: "#03a9f4",
  },
  {
    id: 3,
    name: "Hamdon",
    coordinates: [-77.098659, 38.940467],
    image: "https://placekitten.com/g/50/50/",
    color: "#fff",
  },
];

const Home = () => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    let _lang = localStorage.getItem("lang");
    if (_lang) {
      setLang(_lang);
    }
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYW1vcmlpIiwiYSI6ImNrZ3piYnB3NzAwYzAyeHBxbWl2cTR2NG4ifQ.xqrja1OXKNmpqB8hS3dQew";
    var map = new mapboxgl.Map({
      container: "YOUR_CONTAINER_ELEMENT_ID",
      center: [-77.04, 38.907], // starting position [lng, lat]
      zoom: 10.15, // starting zoom
      style: "mapbox://styles/amorii/ckgzchl2743ez19pdj3fibo81",
    });

    map.on("load", function () {
      users.map((user) => {
        var el = document.createElement("div");
        el.className = "marker";
        el.style.backgroundImage = `url(${user.image})`;
        el.style.width = "40px";
        el.style.height = "40px";
        el.style.borderRadius = "50%";
        el.style.borderColor = user.color;
        el.style.borderWidth = "2px";
        el.style.borderStyle = "solid";

        new mapboxgl.Marker(el)
          .setLngLat(user.coordinates)
          .setPopup(new mapboxgl.Popup().setHTML(`<h1>${user.name}</h1>`))
          .addTo(map);
      });
    });
  }, []);

  const changeLang = (_lang) => {
    setLang(_lang);
    localStorage.setItem("lang", _lang);
  };

  return (
    <>
      <Head>
        <title>My new Websit</title>
        <meta property="og:title" content="My new Websit" />
        <meta property="og:image" content="https://picsum.photos/300/300" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <div className={lang == "en" ? "page" : "page rtl-page"}>
        <button onClick={() => changeLang("en")}>En</button>
        <button onClick={() => changeLang("ar")}>عربي</button>
        <h1>{homeContent[lang].hello}</h1>
        <p>{homeContent[lang].msg}</p>
        <div id="mapContainer" style={{ width: "100%", height: 400 }}></div>
      </div>
    </>
  );
};

export default Home;
