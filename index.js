const arrayOfDrivers = ['Antonia','Nuru','Amari','Mo']

const returnFirstTwoDrivers = arrayOfDrivers => arrayOfDrivers.slice(0,2)
returnFirstTwoDrivers(arrayOfDrivers)

const returnLastTwoDrivers = arrayOfDrivers => arrayOfDrivers.slice(2,4)

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function(fare){
        return multiplier*fare
    }
}

const fareDoubler = fare => fare*2

const fareTripler = fare => fare*3

function selectDifferentDrivers(arrayOfDrivers,anyFunction){
    return anyFunction(arrayOfDrivers)
}
