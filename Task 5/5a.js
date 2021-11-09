objector =
    {
        field1: 1,
        field2: 2,
        field3: 3,
        ohNo(){
            console.log("oh no...")
        },
        dontWoof(){
            console.log("don't woof")
        },
        awoof(){
            console.log("Awoof")
        }
    };

function listProperties(object)
{
    for (const key of Object.keys(object)) {
        console.log(`type of ${key} = ${typeof object[key]}`)
    }
}

listProperties(objector)