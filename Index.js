
const express = require("express");
const app = express();

let list = [
    {
        "Name": "Lukman",
        "Task": "Accounting Record",
        "Deliverables": " Get account details, Creae, account ,account holder first nam,last name,other name,Streetname,account number,BVN,Nin"
    },
    {
        "Name": "Tobi",
        "Task": "Accounting Record",
        "Deliverables": " Get account details, Creae, account ,account holder first nam,last name,other name,Streetname,account number,BVN,Nin"
    },
    {
        "Name": "Rita",
        "Task": "Accounting Record",
        "Deliverables": " Get account details, Creae, account ,account holder first nam,last name,other name,Streetname,account number,BVN,Nin"
    },
    {
        "Name": "Joseph",
        "Task": "Compile all the Projects",
        "Deliverables": "Compile all the Projects"
    },
    {
        "Name": "Teslim",
        "Task": "Developer Project",
        "Deliverables": "CRUD, Get Stat"
    },
    {
        "Name": "Esther",
        "Task": "Developer Project",
        "Deliverables": "CRUD, Get Stat"
    },
    {
        "Name": "Louisa",
        "Task": "Loan Management System",
        "Deliverables": "Customer Table, How much is owed, what has been paid, the balance,Min,max,avg of loan"
    },
    {
        "Name": "Joy",
        "Task": "Loan Management System",
        "Deliverables": "Customer Table, How much is owed, what has been paid, the balance,Min,max,avg of loan"
    },
    {
        "Name": "Temitayo",
        "Task": "Student Result Profile",
        "Deliverables": "Firstname,lastName,Courses,Grades"
    },
    {
        "Name": "Justice",
        "Task": "Student Result Profile",
        "Deliverables": "Firstname,lastName,Courses,Grades"
    },
    {
        "Name": "John",
        "Task": "Student Result Profile",
        "Deliverables": "Firstname,lastName,Courses,Grades"
    },
    {
        "Name": "Favour",
        "Task": "Transpose",
        "Deliverables": "Get entiretext, transpose text,split by space"
    },
    {
        "Name": "Michael",
        "Task": "Transpose",
        "Deliverables": "Get entiretext, transpose text,split by space"
    },
    {
        "Name": "Muyiwa",
        "Task": "GPS coordinate conversion, ",
        "Deliverables": "Get Transform-From Country -State-LGA-Street-Houses"
    },
    {
        "Name": "Jubril",
        "Task": "GPS coordinate conversion, ",
        "Deliverables": "Get Transform-From Country -State-LGA-Street-Houses"
    },
    {
        "Name": "Amarachi",
        "Task": "Product Sales",
        "Deliverables": "Give all he information about the product, Quantity,Quantity,Min,Max,Avg"
    },
    {
        "Name": "OreOluwa",
        "Task": "Product Sales",
        "Deliverables": "Give all he information about the product, Quantity,Quantity,Min,Max,Avg"
    },
    {
        "Name": "David",
        "Task": "Product Sales",
        "Deliverables": "Give all he information about the product, Quantity,Quantity,Min,Max,Avg"
    }
]

app.get('/', (req, res) => {
    res.send(list)
})

app.get('/:name/:key?', (req, res) => {
   let name = req.params.name
   let key = req.params.key
   const student = list.find(item => {
        return item["Name"] == name
    })
    if(key){
       return res.send(student[key])
    }
    return res.send(student)
})
const port = 3000
app.listen(port, () => {

})
