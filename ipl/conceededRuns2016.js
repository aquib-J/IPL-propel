function cumulativeExtraRunsByBowlingSide2016(arrObjMatch, arrObjDel) {
    let result = {};
    let id = [];
    for (let matchObj of arrObjMatch) {
        if (matchObj.season == '2016') {
            id.push(matchObj.id);
        }
    }
    for (let delObj of arrObjDel) {
        for (let number of id) {
            if (number == delObj.match_id) {
                if (result[delObj.bowling_team]) {
                    result[delObj.bowling_team].push(Number(delObj.extra_runs))
                } else {
                    result[delObj.bowling_team] = [Number(delObj.extra_runs)];
                }
            }
        }
    }

    return result;
    // return result['Royal Challengers Bangalore'].reduce((x,y)=>(x+y));
}


module.exports = cumulativeExtraRunsByBowlingSide2016;