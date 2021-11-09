student  = { courses: ["APBD", "PPJ", "PJC", "RBD"]}

function createStudent(FirstName, LastName, Id)
{
    let object = Object.create(student, Object.getOwnPropertyDescriptors(student));
    object.FirstName = FirstName;
    object.LastName = LastName;
    object.Id = Id;
    return object;
}

let studentus = createStudent("abc","cba", 5);
console.log(studentus);