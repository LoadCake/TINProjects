function palindrome(n)
{
    let tmp = n;
    n = n.split("").reverse().join("");
    return tmp === n;
}

console.log(palindrome("kobyłamamiłytułówabawółutyłimamałybok"))