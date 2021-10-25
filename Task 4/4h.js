function second(arr)
{
    arr.sort((a, b) =>
    {
        return a - b;
    });
    return [arr[1], arr[arr.length-2]]
}

console.log(second([6,2,36,13,6,3,3,4]))
