/*
You will create a constructor to generate an employee object which will be rendered in the main section from your app.js file.
Employee ID
Full Name
Department: 
Administration
Marketing
Development
Finance
Level: 
Junior
Mid-Senior
Senior
Image URL
Salary


You will create a function for calculating the 
salary using the provided table by generating 
a random number between the minimum and 
maximum salary for each level, 
use the below table to calculate the salary depends on the employee level.

*/

function Employee(id, fullN , dep , lev , image=""){
    this.ID=id;
    this.Full_name=fullN;
    this.Department=dep;
    
    this.Level=lev;

  

    this.Salary=salaryCounting(lev);
    this.Image_URL=image;
}

let employee1=new Employee(1000 , "Ghazi samer" , "Administration" , "Senior" );
let employee2=new Employee(1001 , "Lana Ali" , "Finance" , "Senior" );
let employee3=new Employee(1002 , "Tamara Ayoub" , "Marketing" , "Senior" );
let employee4=new Employee(1003 , "Safi Walid" , "Administration" , "Mid-Senior" );
let employee5=new Employee(1004 , "Omar Zaid" , "Development" , "Senior" );
let employee6=new Employee(1005 , "Rana Saleh" , "Development" , "Junior" );
let employee7=new Employee(1006 , "Hadi Ahmad" , "Finance" , "Mid-Senior" );



//Math.random() * (max - min) + min;
function salaryCounting(level){
let minSal;
let maxSal;
let salary;
    if(level == "Senior"){
minSal=1500;
maxSal=2000;
         salary =Math.floor(Math.random() * (maxSal - minSal) + minSal);
    }

    else  if(level == "Mid-Senior"){
        minSal=1000;
        maxSal=1500;
                 salary = Math.floor(Math.random() * (maxSal - minSal) + minSal);
            }
    else if(level == "Junior"){
        minSal=500;
        maxSal=1000;
                 salary = Math.floor(Math.random() * (maxSal - minSal) + minSal);
            }
return salary;
}
render();

function render(){
    console.log("Name : " + employee1.Full_name + " , Salary =" + employee1.Salary) ;
    console.log("Name : " + employee2.Full_name + " , Salary =" + employee2.Salary) ;
    console.log("Name : " + employee3.Full_name + " , Salary =" + employee3.Salary) ;
    console.log("Name : " + employee4.Full_name + " , Salary =" + employee4.Salary) ;
    console.log("Name : " + employee5.Full_name + " , Salary =" + employee5.Salary) ;
    console.log("Name : " + employee6.Full_name + " , Salary =" + employee6.Salary) ;
    console.log("Name : " + employee7.Full_name + " , Salary =" + employee7.Salary) ;
}

//// DOM task
let Employees =[employee1 ,employee2, employee3 ,employee4,employee5 , employee6 , employee7]
let main = document.getElementById("main");

let table = document.createElement("table");
let headers = ["Employee ID" , "Full Name" , "Department" , "Level" , "Salary"]
let tableheads= document.createElement("thead");
let th;
let tr=document.createElement("tr");

for(let t=0 ; t<5;t++)
{
    th = document.createElement("th");
    let header = document.createTextNode(headers[t]);
    th.appendChild(header);
tr.appendChild(th);
}

table.appendChild(tr);

for(let r = 0 ; r<7 ; r++){
    createRow(r);
}

function createRow(num){
    let tr = document.createElement("tr");
let i=0;
    for (let x in Employees[num]) {
        let tData=document.createElement("td");
        let data = document.createTextNode(Employees[num][x]);
        tData.appendChild(data);
        tr.appendChild(tData);
        i++;
        if(i > 5)
        tData.remove();
          }
          
      
    
          table.appendChild(tr);
}


main.appendChild(table);