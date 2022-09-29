function checkCashRegister(price, cash, cid) {
    let changeValue = cash*100 - price*100;
    let cidTotal = 0;

    for (let unitType of cid)
        cidTotal += unitType[1]*100;

    if (cidTotal < changeValue)
        return {status: "INSUFFICIENT_FUNDS", change: []}
    else if (cidTotal == changeValue)
        return {status: "CLOSED", change: cid}

    const lookupTable = {
        "ONE HUNDRED": 10000,
        "TWENTY": 2000,
        "TEN": 1000,
        "FIVE": 500,
        "ONE": 100,
        "QUARTER": 25,
        "DIME": 10,
        "NICKEL": 5,
        "PENNY": 1
    }

    let changeList = [];
    cid = cid.reverse();

    for (let unitType of cid) {
        
        let unitAmmount = [unitType[0], 0]

        unitType[1] = unitType[1]*100;

        while (changeValue >= lookupTable[unitType[0]] && unitType[1] > 0) {
            const value = lookupTable[unitType[0]];
            changeValue -= value;
            unitType[1] -= value;
            unitAmmount[1] += value/100;
        }

        if (unitAmmount[1] > 0)
            changeList.push(unitAmmount);
    }

    if (changeValue > 0)
        return {status: "INSUFFICIENT_FUNDS", change: []}

    return {status: "OPEN", change: changeList};
}