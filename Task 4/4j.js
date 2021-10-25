function binarySearch(arr, start, end, element)
{
    if(start > end)
    {
        return "element not found";
    }

    mid = Math.floor((start + end)/2);

    if(element === arr[mid])
    {
        return mid;
    }
    if(element< arr[mid])
    {
        return binarySearch(arr, start, mid-1, element);
    }
    else
    {
        return binarySearch(arr,mid+1, end, element);
    }
}

console.log(binarySearch([1, 2, 5, 7, 13, 15, 16, 18, 24, 28, 29],0,11, 18))