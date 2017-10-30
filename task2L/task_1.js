/**
 * Created by Aleksej on 30/08/17.
 */
var arr = [45, 2, 3, 4, 67, 1, 4, 5, 6, 7, 3, 4];
var j, i, temp;
for (j=0; j < arr.length-1; j++)
{
    for(i=0; i < arr.length-j; i++)
    {
        if(arr[i] > arr[i+1])
        {
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
}
alert(arr);