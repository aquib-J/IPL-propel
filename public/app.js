// Fetch && helper functions for visual - 1
function fetchAndVisualizeData() {
  fetch("./data_1.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

 
function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  return;
}

// visual chart - 1 && the helper function for data shaping 

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }
 
  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "1. Total number of matches played each year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [  // added to improve visuals
      {
        name: "Years",
        data: seriesData,
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
      }
    ]
  });
}
/*
// Fetch  for visual - 2
*/
function fetchAndVisualizeData2() {
  fetch("./data_2.json")
    .then(r => r.json())
    .then(visualizeData2);
}

fetchAndVisualizeData2();

 
function visualizeData2(data) {
  visualizeMatchesWon(data.matchesWonPerYear);
  return;
}




// visual chart - 2 && data sizing

function visualizeMatchesWon(yearTeamObj) {
  let years=Object.keys(yearTeamObj); // for plotting the x axis;
console.log(years);
  let Arr=[];  let newArr=[];

  for(let arrPerYear of Object.values(yearTeamObj)){ let result={};
    for(let team of arrPerYear){
        if(result[team]){result[team]++}else{result[team]=1;}}  
        Arr.push(result);
      } 
  // Arr returns the array of [{team1..team n:countofteam1...countofteamn},{team1..team n:countofteam1...countofteamn}...] per year aggregation 
  
  let teamArr=['Sunrisers Hyderabad',
  'Royal Challengers Bangalore',
  'Mumbai Indians',
  'Rising Pune Supergiant',
  'Gujarat Lions',
  'Kolkata Knight Riders',
  'Kings XI Punjab',
  'Delhi Daredevils',
  'Chennai Super Kings',
  'Rajasthan Royals',
  'Deccan Chargers',
  'Kochi Tuskers Kerala',
  'Pune Warriors',
  'Rising Pune Supergiants',
  'Delhi Capitals','noResult'];


  for(let team of teamArr){
    for(let obj of Arr){
      if(obj[team]){newArr.push({name:team,data:obj[team]})}
      else{newArr.push({name:team,data:0})};
    }
  }

 let dataArray=[]; 

 for(let j=0;j<teamArr.length;j++){
   let innerarray=[]; 
 for(let i=0;i<newArr.length;i++){
    if(newArr[i].name==teamArr[j]){
      if(typeof newArr[i].data!='undefined'){
        innerarray.push(newArr[i].data);
      }
    }
    }
    dataArray.push(innerarray);
  }

Highcharts.chart("matches-won-by-each-time-alltime", {
  chart: {
      type: 'column'
  },
  title: {
      text: '2. Number of matches won by each team over all the years of IPL'
  },
  subtitle: {
      text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
  },
  xAxis: {
      categories: years,
      crosshair: true
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Matches Won'
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: [{
      name: teamArr[0],
      data: dataArray[0]

  },
    {
      name: teamArr[1],
      data: dataArray[1]

  }, {
    name: teamArr[2],
    data: dataArray[2]

},{
  name: teamArr[3],
  data: dataArray[3]

},{
  name: teamArr[4],
  data: dataArray[4]

},{
  name: teamArr[5],
  data: dataArray[5]

},{
  name: teamArr[6],
  data: dataArray[6]

},{
  name: teamArr[7],
  data: dataArray[7]

},{
  name: teamArr[8],
  data: dataArray[8]

},{
  name: teamArr[9],
  data: dataArray[9]

},{
  name: teamArr[10],
  data: dataArray[10]

},{
  name: teamArr[11],
  data: dataArray[11]

},{
  name: teamArr[12],
  data: dataArray[12]

},{
  name: teamArr[12],
  data: dataArray[12]

},{
  name: teamArr[13],
  data: dataArray[13]

},{
  name: teamArr[14],
  data: dataArray[14]

},{
  name: teamArr[15],
  data: dataArray[15]

}]
});
}
/*

// Fetch for visual - 3

*/
function fetchAndVisualizeData3() {
  fetch("./data_3.json")
    .then(r => r.json())
    .then(visualizeData3);
}

fetchAndVisualizeData3();

 
function visualizeData3(data) {
  visualizeRunsConceeded(data.runsConceeded2016);
  return;
}


// visual chart-3 && data sizing ::

function visualizeRunsConceeded(runsConceeded) {
  const seriesData_3 = [];
  for (let team in runsConceeded) {
    seriesData_3.push([team, runsConceeded[team].reduce((x,y)=>(x+y))]);
  }

Highcharts.chart("extra-run-conceeded-by-each-team-2016", {
  chart: {
      type: 'column'
  },
  title: {
    text: "3. Extra runs conceded by each team in 2016"
  },
  subtitle: {
    text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
  },
  xAxis: {
      type: 'category',
      labels: {
          rotation: -45,
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
  },
  yAxis: {
      min: 0,
      title: {
        text: "Extra Runs"
      }
  },
  legend: {
      enabled: false
  },
  tooltip: {
      pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
  },
  series: [{
      name: 'Population',
      data: seriesData_3,
      dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
  }]
});

}
/*

// Fetch && Helper functions for visual - 4

*/





//visual chart-4


Highcharts.chart("top-economical-bowlers-2015", {
  chart: {
      type: 'column'
  },
  title: {
    text: "4. Top Economical Bowlers in 2015 season"
  },
  subtitle: {
    text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
  },
  xAxis: {
      type: 'category',
      labels: {
          rotation: -45,
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
  },
  yAxis: {
      min: 0,
      title: {
        text: "Economy"
      }
  },
  legend: {
      enabled: false
  },
  tooltip: {
      pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
  },
  series: [{
      name: 'Population',
      data: [
          ['Shanghai', 24.2],
          ['Beijing', 20.8],
          ['Karachi', 14.9],
          ['Shenzhen', 13.7],
          ['Guangzhou', 13.1],
          ['Istanbul', 12.7],
          ['Mumbai', 12.4],
          ['Moscow', 12.2],
          ['São Paulo', 12.0],
          ['Delhi', 11.7],
          ['Kinshasa', 11.5],
          ['Tianjin', 11.2],
          ['Lahore', 11.1],
          ['Jakarta', 10.6],
          ['Dongguan', 10.6],
          ['Lagos', 10.6],
          ['Bengaluru', 10.3],
          ['Seoul', 9.8],
          ['Foshan', 9.3],
          ['Tokyo', 9.3]
      ],
      dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
  }]
});