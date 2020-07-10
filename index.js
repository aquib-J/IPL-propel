const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonPerYear = require('./ipl/numberOfMatchesWonPerYear');
const cumulativeExtraRunsByBowlingSide2016 = require('./ipl/conceededRuns2016');
const topTenEconomyBowler2015 = require('./ipl/topTenEcoBowler');
const storyFunction = require('./ipl/5-story-logic');

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH_1 = "./public/data_1.json";
const JSON_OUTPUT_FILE_PATH_2 = "./public/data_2.json"
const JSON_OUTPUT_FILE_PATH_3 = "./public/data_3.json"
const JSON_OUTPUT_FILE_PATH_4 = "./public/data_4.json"
const JSON_OUTPUT_FILE_PATH_5 = "./public/data_5.json"

async function main() {
  try {
    const jsonArrayMatches = await csv().fromFile(MATCHES_FILE_PATH);
    const jsonArrayDeliveries = await csv().fromFile(DELIVERIES_FILE_PATH);

    let result1 = await matchesPlayedPerYear(jsonArrayMatches);
    saveMatchesPlayedPerYear(result1);

    let result2 = await matchesWonPerYear(jsonArrayMatches);
    saveMatchesWonPerYear(result2);

    let result3 = await cumulativeExtraRunsByBowlingSide2016(jsonArrayMatches, jsonArrayDeliveries);
    saverunsConceeded2016(result3);

    let result4 = await topTenEconomyBowler2015(jsonArrayMatches, jsonArrayDeliveries);
    saveTopTenEcoBowlers(result4);

    let result5 = await storyFunction(jsonArrayMatches);
    saveVenueForWinnerTeams(result5);

  } catch (e) {
    console.log(e);
  }


}

async function saveMatchesPlayedPerYear(result) {
  const jsonData = {
    matchesPlayedPerYear: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_1, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

async function saveMatchesWonPerYear(result) {
  const jsonData_2 = {
    matchesWonPerYear: result
  };
  const jsonString_2 = JSON.stringify(jsonData_2);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_2, jsonString_2, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

async function saverunsConceeded2016(result) {
  const jsonData_3 = {
    runsConceeded2016: result
  };
  const jsonString_3 = JSON.stringify(jsonData_3);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_3, jsonString_3, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

async function saveTopTenEcoBowlers(result) {
  const jsonData_4 = {
    topEcoBowlers: result
  };
  const jsonString_4 = JSON.stringify(jsonData_4);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_4, jsonString_4, "utf-8", err => {
    if (err) {
      console.error(err);
    }
  });
}

async function saveVenueForWinnerTeams(result) {
  const jsonData_5 = {
    storyJSON: result
  };
  const jsonString_5 = JSON.stringify(jsonData_5);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_5, jsonString_5, "utf-8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();