function pares(numbers, total)
{
    var answer = [];

    var tmp    = [];

    var j = 0;

    for(var i = 0; i < numbers.length; i++)
    {
        if(numbers[i] <= total)
        {
            if(tmp.length !== 0)
            {
                if((numbers[i] + tmp[0]) === total)
                {
                    tmp.push(numbers[i]);

                    numbers.splice(i, 1);

                    numbers.splice(j, 1);

                    i = 0;

                    j = 0;
                }
            }
            else
            {
                tmp.push(numbers[i]);
                j = i;
            }
        }

        if(tmp.length === 2){
            answer.push(tmp);
            tmp = [];
            console.log("Mostrando " + tmp);
        }

    }

    return answer;
}

console.log(pares([4, 3, 1, 2, 5, 6], 5));