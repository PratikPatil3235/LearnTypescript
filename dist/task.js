var StudentObj = {
    name: "Pratik",
    marks: [90, 98, 86],
    calculateAverage: function () {
        var total = this.marks.reduce(function (sum, mark) { return sum + mark; }, 0);
        return total / this.marks.length;
    },
    getGrade: function (averageMarks) {
        if (averageMarks >= 90 && averageMarks <= 100)
            return 'A';
        else if (averageMarks >= 80 && averageMarks < 90)
            return 'B';
        else if (averageMarks >= 70 && averageMarks < 80)
            return 'C';
        else if (averageMarks >= 60 && averageMarks < 70)
            return 'D';
        else if (averageMarks >= 35 && averageMarks < 60)
            return 'E';
        else
            return 'F';
    },
    printStudentReport: function () {
        var avg = this.calculateAverage();
        var grade = this.getGrade(avg);
        console.log("Name: ".concat(this.name));
        console.log("Scores: ".concat(this.marks.join(", ")));
        console.log("Average: ".concat(avg.toFixed(2)));
        console.log("Grade: ".concat(grade));
    }
};
StudentObj.printStudentReport();
