function superbowlWin(record){
    function matchElement(element){
        return (element.result === "W")
    }
    let found = record.find(matchElement)
    return found !== undefined ? found.year : undefined
}

// const record = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//     { year: "2012", result: "L"},
//     { year: "2011", result: "N/A"},
//     { year: "2010", result: "L"},
// ]  

// superbowlWin(record)