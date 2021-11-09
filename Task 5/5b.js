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
}

let test = new Student("abc", "cba", 69, [4,4,4,5,6,4,4,4])
console.log(test.getInfo())