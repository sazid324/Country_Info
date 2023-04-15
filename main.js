const requestBD = new XMLHttpRequest();
requestBD.open("GET", "https://restcountries.com/v3.1/name/bangladesh");
requestBD.send();

const requestPK = new XMLHttpRequest();
requestPK.open("GET", "https://restcountries.com/v3.1/name/pakistan");
requestPK.send();

const Response = (req, name, flag, official_name, capital, language, currency, area, population) => {
    let [data] = JSON.parse(req.responseText);
    let country_flag = `<img src="${data.flags.png}" alt="Flag"></img>`;

    document.querySelector(name).innerHTML = data.name.common;
    document.querySelector(flag).insertAdjacentHTML("afterbegin", country_flag);
    document.querySelector(official_name).innerHTML = data.name.official;
    document.querySelector(capital).innerHTML = data.capital;
    document.querySelector(language).innerHTML = data.languages.ben;
    document.querySelector(currency).innerHTML = `${data.currencies.BDT.name} (${data.currencies.BDT.symbol})`;
    document.querySelector(area).innerHTML = data.area;
    document.querySelector(population).innerHTML = data.population;
  }

function request(req) {
  req.addEventListener("load", function () {
  Response(req, ".BD_Name", ".BD_Flag", ".BD_Official_Name", ".BD_Capital", ".BD_Language", ".BD_Currency", ".BD_Area", ".BD_Population");
  Response(req, ".PK_Name", ".PK_Flag", ".PK_Official_Name", ".PK_Capital", ".PK_Language", ".PK_Currency", ".PK_Area", ".PK_Population");
  Response(req, ".IN_Name", ".IN_Flag", ".IN_Official_Name", ".IN_Capital", ".IN_Language", ".IN_Currency", ".IN_Area", ".IN_Population");
  Response(req, ".NP_Name", ".NP_Flag", ".NP_Official_Name", ".NP_Capital", ".NP_Language", ".NP_Currency", ".NP_Area", ".NP_Population");
  Response(req, ".LK_Name", ".LK_Flag", ".LK_Official_Name", ".LK_Capital", ".LK_Language", ".LK_Currency", ".LK_Area", ".LK_Population");
  Response(req, ".AF_Name", ".AF_Flag", ".AF_Official_Name", ".AF_Capital", ".AF_Language", ".AF_Currency", ".AF_Area", ".AF_Population");
});
};

request(requestBD);
request(requestPK);

  console.log(data);