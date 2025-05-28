"use strict";
const StudentObj = {
    name: "Pratik",
    marks: [90, 98, 86],
    calculateAverage() {
        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    },
    getGrade(averageMarks) {
        if (averageMarks >= 90 && averageMarks <= 100)
            return "A";
        else if (averageMarks >= 80 && averageMarks < 90)
            return "B";
        else if (averageMarks >= 70 && averageMarks < 80)
            return "C";
        else if (averageMarks >= 60 && averageMarks < 70)
            return "D";
        else if (averageMarks >= 35 && averageMarks < 60)
            return "E";
        else
            return "F";
    },
    printStudentReport() {
        const avg = this.calculateAverage();
        const grade = this.getGrade(avg);
        console.log(`Name: ${this.name}`);
        console.log(`Scores: ${this.marks.join(", ")}`);
        console.log(`Average: ${avg.toFixed(2)}`);
        console.log(`Grade: ${grade}`);
    },
};
StudentObj.printStudentReport();
