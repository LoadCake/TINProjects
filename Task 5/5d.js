function Student(FirstName, LastName, Id, Grades)
{
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Id = Id;
    this.Grades = Grades;

    this.getInfo = () =>
    {
        let tmp=0;
        for(let i=0;i<Grades.length;i++)
        {
            tmp += Grades[i]
        }

        return this.FirstName + " " + this.LastName + " " + (tmp/Grades.length).toString();
    }

    this.setName = (FirstName, LastName) =>
    {
        this.FirstName = FirstName;
        this.LastName = LastName;
    }

    this.getName = () =>
    {
        return this.FirstName + " " + this.LastName;
    }

    this.getAverageGrade = () =>
    {
        let tmp=0;
        for(let i =0;i< this.Grades.length;i++)
        {
            tmp += Grades[i];
        }
        return tmp/this.Grades.length;
    }

}

let test = new Student("abc", "cba", 69, [4,4,4,5,6,4,4,4]);
test.setName("sus", "amogus");
console.log(test.getName());
console.log(test.getAverageGrade());