function calculateGrade(marks) {

    if (marks.length === 0) {
        return "Array is empty";
    }


    let totalMarks = 0;

    for (let i = 0; i < marks.length; i++) {
        totalMarks = totalMarks + marks[i];
    }

    const averageMarks = totalMarks / marks.length;


    let grade;
    if (averageMarks >= 91) {
        grade = "A Grade";
    } else if (averageMarks >= 81) {
        grade = "B Grade";
    } else if (averageMarks >= 71) {
        grade = "C Grade";
    } else {
        grade = "D Grade";
    }

    return { totalMarks, averageMarks, grade };

}


const marks = [85, 92, 78, 90, 88];
const result = calculateGrade(marks);
console.log("Total Marks:", result.totalMarks);
console.log("Average Marks:", result.averageMarks);
console.log("Grade:", result.grade);
