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
                if((numbers[i] + answer[0]) === total)
                {
                    answer.push(numbers[i]);

                    numbers.splice(i, 1);

                    numbers.splice(j, 1);

                    i = 0;

                    j = 0;
                }
            }
            else
            {
                answer.push(numbers[i]);
                j = i;
            }
        }

        if(tmp.length === 2)
            answer.push(tmp);

    }

    return answer;
}

console.log(pares([4, 3, 1, 2, 5, 6], 5));