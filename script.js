/*
 * 1: LOOPING A TRIANGLE
*/

lines = 7

for (let i = 0; i < lines; i++)
{
    let output = ""
    for (let j = 0; j < i + 1; j++)
    {
        output += "#"
    }
    console.log(output)
}

/*
 * 2: FizzBuzz
*/
for (let i = 1; i <= 100; i++)
{
    let output = ""

    if (i % 3 == 0)
    {
        output += "Fizz"
    }
    if (i % 5 == 0)
    {
        output += "Buzz"
    }

    if (output == "")
    {
        console.log(i)
    }
    else
    {
        console.log(output)
    }
}

/*
 * 3: Chessboard
*/
let binding = 8
let output = ""

for (let i = 0; i < binding; i++)
{
    for (let j = 0; j < binding; j++)
    {
        if (j % 2 == (i % 2))
        {
            output += " "
        }
        else
        {
            output += "#"
        }
    }
    output += "\n"
}

console.log(output)
