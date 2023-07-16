arr = [1,5,9,7,3,6,8,4,2]
a = 0
for(i = 0; i < 9; i++)
{
    for(j = 0; j < 9 - i; j++)
    {
        if (arr[j]>arr[j+1])
        {
            a = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = a
        }
    }
}
for(i = 0; i < 9; i++){console.log(arr[i])}
