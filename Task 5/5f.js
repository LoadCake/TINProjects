class Person
{
    constructor(FirstName, LastName) {
        this.FirstName = FirstName;
        this.LastName = LastName;
    }

    setName(FirstName, LastName)
    {
        this.FirstName = FirstName;
        this.LastName = LastName;
    }

    getName()
    {
        return this.FirstName + " " + this.LastName;
    }
}

class Student extends Person
{
    constructor(FirstName, LastName, Id, Grades) {
        super(FirstName,LastName);
        this.Id = Id;
        this.Grades = Grades;
    }

    getAverageGrade()
    {
        let tmp=0;
        for(let i =0;i< this.Grades.length;i++)
        {
            tmp += this.Grades[i];
        }
        return tmp/this.Grades.length;
    }
}

let test = new Student("abc", "cba", 69, [4,4,4,5,6,4,4,4]);
test.setName("sus", "amogus");
console.log(test.getName());
console.log(test.getAverageGrade());