import Head from "next/head";
import homeContent from "../content/homeContent";
import { useState, useEffect } from "react";

const Home = () => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    let _lang = localStorage.getItem("lang");
    if (_lang) {
      setLang(_lang);
    }
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
      </Head>
      <div className={lang == "en" ? "page" : "page rtl-page"}>
        <button onClick={() => changeLang("en")}>En</button>
        <button onClick={() => changeLang("ar")}>عربي</button>
        <h1>{homeContent[lang].hello}</h1>
        <p>{homeContent[lang].msg}</p>
      </div>
    </>
  );
};

export default Home;
