const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonPerYear=require('./ipl/numberOfMatchesWonPerYear');

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const JSON_OUTPUT_FILE_PATH_1="./public/data_1.json";
const JSON_OUTPUT_FILE_PATH_2="./public/data_2.json"
const JSON_OUTPUT_FILE_PATH_3="./public/data_3.json"
const JSON_OUTPUT_FILE_PATH_4="./public/data_3.json"

async function main() {
  try{
    const jsonArray=await csv().fromFile(MATCHES_FILE_PATH);
  let result1= await matchesPlayedPerYear(jsonArray);
  saveMatchesPlayedPerYear(result1);
  let result2=await matchesWonPerYear(jsonArray);
  saveMatchesWonPerYear(result2);
  }catch(e){
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

async function saveMatchesWonPerYear(result){
  const jsonData_2={
    matchesWonPerYear:result
  };
  const jsonString_2=JSON.stringify(jsonData_2);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_2,jsonString_2,"utf8",err=>{
    if(err){
      console.error(err);
    }
  });
}

main();
