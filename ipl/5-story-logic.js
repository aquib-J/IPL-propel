function story(matchesObj) {
    let arrVenues = [];
    for (let obj of matchesObj) {

        arrVenues.push(obj.venue);

    }
    arrVenues = Array.from(new Set(arrVenues));
    let venueSpecificWinners = [];

    for (let venue of arrVenues) {
        for (let obj of matchesObj) {

            if (obj.venue == venue) {
                venueSpecificWinners.push([venue, obj.winner])
            }
        }
    }
    let venueOrderedTeamArray = [];
    for (let venue of arrVenues) {
        let innerArr = [];
        for (let venTeamArray of venueSpecificWinners) {
            if (venue == venTeamArray[0]) {
                innerArr.push(venTeamArray[1]);
            }
        }
        venueOrderedTeamArray.push(innerArr);
    }



    return [arrVenues, venueOrderedTeamArray];
}

module.exports = story;