function topTenEconomyBowler(arrObjMatch, arrObjDel) {
    let result = {};
    let id = [];
    for (let matchObj of arrObjMatch) {
        if (matchObj.season == '2015') {
            id.push(matchObj.id);
        }
    }
    let bowlerArray = [];
    let uniqueBowlerArray = [];

    for (let delObj of arrObjDel) {
        for (let num of id) {
            if (num == delObj.match_id) {
                uniqueBowlerArray.push(delObj.bowler);
                bowlerArray.push([delObj.bowler, delObj.total_runs - delObj.bye_runs - delObj.legbye_runs]);
            }
        }
    }
    uniqueBowlerArray = Array.from(new Set(uniqueBowlerArray));

    for (let bowler of uniqueBowlerArray) {
        for (let nameScore of bowlerArray) {
            if (nameScore[0] == bowler) {
                if (result[bowler]) {
                    result[bowler][0]++;
                    result[bowler][1] += nameScore[1];
                } else {

                    result[bowler] = [1, nameScore[1]];
                }
            }
        }
    }

    return result;
}

module.exports = topTenEconomyBowler;