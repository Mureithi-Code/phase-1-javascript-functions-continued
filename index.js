// code your solution here
function saturdayFun(actitity = 'roller-skate'){
    return (`This Saturday, I want to ${actitity}!`)
}
function mondayWork(actitity = 'go to the office'){
    return (`This Monday, I will ${actitity}.`)
}
function wrapAdjective(flair = "*"){
    return function(adjective = "special"){
        return `You are ${flair}${adjective}${flair}!`;
    };
}