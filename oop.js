#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    constructor(name) {
        this.name = name;
    }
    ;
}
;
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
    ;
}
;
const person = new Person();
const programStart = async (person) => {
    console.log(chalk.bold.green("welcome guest"));
    do {
        const ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "which person do you want to talk?",
            choices: ["Rida", "Student"]
        });
        if (ans.select === "Rida") {
            console.log(`You are chatting with ${chalk.bold.green("Rida")}`);
            console.log("Hope you are doing well!");
        }
        if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                type: "input",
                name: "student",
                message: "Which student do you want to talk?"
            });
            const student = person.students.find((val) => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                person.addStudent(name);
                console.log(`I am ${chalk.bold.green(name.name)}, and I am fine.`);
                console.log(person.students);
            }
            if (student) {
                console.log(`I am ${chalk.bold.green(student.name)}, and I am fine.`);
                console.log(person.students);
            }
            ;
        }
        ;
    } while (true);
};
programStart(person);
