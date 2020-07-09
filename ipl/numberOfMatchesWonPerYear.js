function numberOfMatchesWonPerYear(arrObj) {
    let result = {};

    for (let obj of arrObj) {
        let season = obj.season;
        let winner = obj.winner;
        if (result[season]) {
            if (winner != '') {
                result[season].push(winner);
            } else {
                result[season].push('noResult');
            }
        } else {
            result[season] = [winner];
        }
    }
    return result;

}

module.exports = numberOfMatchesWonPerYear;