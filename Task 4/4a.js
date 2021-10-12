function factorialIter(n)
{
    let num = 1;
    for(let i=1;i<=n;i++)
    {
        num *= i;
    }
    return num;
}

console.log(factorialIter(3))

let factorialRecurs = (n) =>
{
    if(n===0)
    {
        return 1;
    }
    return factorialRecurs(n-1)*n
}

console.log(factorialRecurs(3))