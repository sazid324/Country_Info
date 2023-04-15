let requestBD = new XMLHttpRequest();
requestBD.open("GET", "https://restcountries.com/v3.1/name/bangladesh?fullText=true");
requestBD.send();

const requestPK = new XMLHttpRequest();
requestPK.open("GET", "https://restcountries.com/v3.1/name/pakistan?fullText=true");
requestPK.send();

let requestIN = new XMLHttpRequest();
requestIN.open("GET", "https://restcountries.com/v3.1/name/india?fullText=true");
requestIN.send();

let requestNP = new XMLHttpRequest();
requestNP.open("GET", "https://restcountries.com/v3.1/name/nepal?fullText=true");
requestNP.send();

let requestLK = new XMLHttpRequest();
requestLK.open("GET", "https://restcountries.com/v3.1/name/lanka");
requestLK.send();

let requestAF = new XMLHttpRequest();
requestAF.open("GET", "https://restcountries.com/v3.1/name/afghanistan?fullText=true");
requestAF.send();

const Response = (
  req,
  nam,
  flag,
  official_name,
  capital,
  language,
  currency,
  area,
  population
) => {
  let [data] = JSON.parse(req.responseText);
  let country_flag = `<img src="${data.flags.png}" alt="Flag"></img>`;

  document.querySelector(nam).innerHTML = data.name.common;
  document.querySelector(flag).insertAdjacentHTML("afterbegin", country_flag);
  document.querySelector(official_name).innerHTML = data.name.official;
  document.querySelector(capital).innerHTML = data.capital;
  let lang = data.languages;
  let langArr = Object.values(lang);
  document.querySelector(language).innerHTML = langArr;
  let curr = data.currencies;
  let currArr = Object.values(curr);
  document.querySelector(currency).innerHTML = `${currArr[0].name} (${currArr[0].symbol})`;
  document.querySelector(area).innerHTML = data.area;
  document.querySelector(population).innerHTML = data.population;
};

requestBD.addEventListener("load", function () {
  Response(requestBD, ".BD_Name", ".BD_Flag", ".BD_Official_Name", ".BD_Capital", ".BD_Language", ".BD_Currency", ".BD_Area", ".BD_Population");
});

requestPK.addEventListener("load", function () {
  Response(requestPK, ".PK_Name", ".PK_Flag", ".PK_Official_Name", ".PK_Capital", ".PK_Language", ".PK_Currency", ".PK_Area", ".PK_Population");
});

requestIN.addEventListener("load", function () {
  Response(requestIN, ".IN_Name", ".IN_Flag", ".IN_Official_Name", ".IN_Capital", ".IN_Language", ".IN_Currency", ".IN_Area", ".IN_Population");
});

requestNP.addEventListener("load", function () {
  Response(requestNP, ".NP_Name", ".NP_Flag", ".NP_Official_Name", ".NP_Capital", ".NP_Language", ".NP_Currency", ".NP_Area", ".NP_Population");
});

requestLK.addEventListener("load", function () {
  Response(requestLK, ".LK_Name", ".LK_Flag", ".LK_Official_Name", ".LK_Capital", ".LK_Language", ".LK_Currency", ".LK_Area", ".LK_Population");
});

requestAF.addEventListener("load", function () {
  Response(requestAF, ".AF_Name", ".AF_Flag", ".AF_Official_Name", ".AF_Capital", ".AF_Language", ".AF_Currency", ".AF_Area", ".AF_Population");
});
