"use strict";

let requestBD = new XMLHttpRequest();
requestBD.open(
  "GET",
  "https://restcountries.com/v3.1/name/bangladesh?fullText=true"
);
requestBD.send();

const requestPK = new XMLHttpRequest();
requestPK.open(
  "GET",
  "https://restcountries.com/v3.1/name/pakistan?fullText=true"
);
requestPK.send();

let requestIN = new XMLHttpRequest();
requestIN.open(
  "GET",
  "https://restcountries.com/v3.1/name/india?fullText=true"
);
requestIN.send();

let requestNP = new XMLHttpRequest();
requestNP.open(
  "GET",
  "https://restcountries.com/v3.1/name/nepal?fullText=true"
);
requestNP.send();

let requestLK = new XMLHttpRequest();
requestLK.open("GET", "https://restcountries.com/v3.1/name/lanka");
requestLK.send();

let requestAF = new XMLHttpRequest();
requestAF.open(
  "GET",
  "https://restcountries.com/v3.1/name/afghanistan?fullText=true"
);
requestAF.send();

const Response = (
  countryAPIRequest,
  countryName,
  countryFlag,
  countryTime,
  countryOfficialName,
  countryCapital,
  countryLanguage,
  countryCurrency,
  countryArea,
  countryPopulation
) => {
  let [data] = JSON.parse(countryAPIRequest.responseText);
  let country_flag = `<img src="${data.flags.png}" alt="Flag"></img>`;

  document.querySelector(countryName).innerHTML = data.name.common;
  document
    .querySelector(countryFlag)
    .insertAdjacentHTML("afterbegin", country_flag);

  function countryTimeFunction(){
    let countryTimeZoneArr = data.timezones[0].split("C");
    let countryTimeZone = countryTimeZoneArr[1].replace(":", ".");
    let localTime = new Date(); //Local date and time in my area or in my pc.
    let utc = localTime.getTime() + localTime.getTimezoneOffset() * 60000;
    let otherCountriesTime = new Date(
      utc + 3600000 * countryTimeZone
    ).toLocaleString();

    document.querySelector(countryTime).innerHTML = otherCountriesTime;
  };

  setInterval(countryTimeFunction, 1000); //Note: Must not use "()" while calling function in setInterval.

  document.querySelector(countryOfficialName).innerHTML = data.name.official;
  document.querySelector(countryCapital).innerHTML = data.capital;

  let lang = data.languages;
  let langArr = Object.values(lang);

  document.querySelector(countryLanguage).innerHTML = langArr;

  let curr = data.currencies;
  let currArr = Object.values(curr);

  document.querySelector(
    countryCurrency
  ).innerHTML = `${currArr[0].name} (${currArr[0].symbol})`;
  document.querySelector(countryArea).innerHTML = data.area;
  document.querySelector(countryPopulation).innerHTML = data.population;
};

requestBD.addEventListener("load", function () {
  Response(
    requestBD,
    ".BD_Name",
    ".BD_Flag",
    ".BD_Time",
    ".BD_Official_Name",
    ".BD_Capital",
    ".BD_Language",
    ".BD_Currency",
    ".BD_Area",
    ".BD_Population"
  );
});

requestPK.addEventListener("load", function () {
  Response(
    requestPK,
    ".PK_Name",
    ".PK_Flag",
    ".PK_Time",
    ".PK_Official_Name",
    ".PK_Capital",
    ".PK_Language",
    ".PK_Currency",
    ".PK_Area",
    ".PK_Population"
  );
});

requestIN.addEventListener("load", function () {
  Response(
    requestIN,
    ".IN_Name",
    ".IN_Flag",
    ".IN_Time",
    ".IN_Official_Name",
    ".IN_Capital",
    ".IN_Language",
    ".IN_Currency",
    ".IN_Area",
    ".IN_Population"
  );
});

requestNP.addEventListener("load", function () {
  Response(
    requestNP,
    ".NP_Name",
    ".NP_Flag",
    ".NP_Time",
    ".NP_Official_Name",
    ".NP_Capital",
    ".NP_Language",
    ".NP_Currency",
    ".NP_Area",
    ".NP_Population"
  );
});

requestLK.addEventListener("load", function () {
  Response(
    requestLK,
    ".LK_Name",
    ".LK_Flag",
    ".LK_Time",
    ".LK_Official_Name",
    ".LK_Capital",
    ".LK_Language",
    ".LK_Currency",
    ".LK_Area",
    ".LK_Population"
  );
});

requestAF.addEventListener("load", function () {
  Response(
    requestAF,
    ".AF_Name",
    ".AF_Flag",
    ".AF_Time",
    ".AF_Official_Name",
    ".AF_Capital",
    ".AF_Language",
    ".AF_Currency",
    ".AF_Area",
    ".AF_Population"
  );
});

// const countryTimeFunction = () => {
//   let localTime = new Date().toLocaleTimeString(); //Local date and time in my area or in my pc.
//   // let utc = localTime.getTime() + localTime.getTimezoneOffset() * 60000;
//   // let otherCountriesTime = new Date(utc + 3600000 * 4).toLocaleTimeString();

//   console.log(localTime);
// };

// setInterval(countryTimeFunction(), 10);

// const countryTimeFunction = () => {
//   let localTime = new Date().toLocaleTimeString();
//   console.log(localTime);
// };

// setInterval(countryTimeFunction, 1000);
