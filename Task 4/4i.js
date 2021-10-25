function amountToCoins(amount, arr)
{
    let result = [];
    for(let i=0;i<arr.length;i++)
    {
        while(amount>=arr[i])
        {
            amount -= arr[i];
            result.push(arr[i])
        }
    }
    return result;
}

console.log(amountToCoins(46, [25,10,5,2,1]));