function sortAlphabetically(n)
{
    n = n.split("").sort().join("");
    return n
}

console.log(sortAlphabetically("abba"));