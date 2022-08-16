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

let employee1=new Employee(1000 , "Ghazi samer" , "Administration" , "Senior" , "https://randomuser.me/api/portraits/men/1.jpg" );
let employee2=new Employee(1001 , "Lana Ali" , "Finance" , "Senior"  , "https://randomuser.me/api/portraits/women/9.jpg" );
let employee3=new Employee(1002 , "Tamara Ayoub" , "Marketing" , "Senior" , "https://randomuser.me/api/portraits/women/2.jpg"  );
let employee4=new Employee(1003 , "Safi Walid" , "Administration" , "Mid-Senior"  , "https://randomuser.me/api/portraits/men/2.jpg" );
let employee5=new Employee(1004 , "Omar Zaid" , "Development" , "Senior"  , "https://randomuser.me/api/portraits/men/3.jpg" );
let employee6=new Employee(1005 , "Rana Saleh" , "Development" , "Junior" , "https://randomuser.me/api/portraits/women/3.jpg"  );
let employee7=new Employee(1006 , "Hadi Ahmad" , "Finance" , "Mid-Senior" , "https://randomuser.me/api/portraits/men/4.jpg"  );



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
let Employees =[employee1 ,employee2, employee3 ,employee4,employee5 , employee6 , employee7]



//// DOM task



render(Employees);

function render(emp){
    for(let i=0 ; i<emp.length; i++)
    console.log("Name : " + emp[i].Full_name + " , Salary =" + emp[i].Salary) ;
}


// event task

    let id = document.getElementById("id");
    let full_n = document.getElementById("full_n");
    let imgUrl = document.getElementById("imgUrl").value;
    let department = document.getElementById("department");
    let level = document.getElementById("level") ;

   
let subBtn = document.getElementById("subBtn");
let new_employees = [];

document.forms[0].addEventListener("submit" , function(e){
    e.preventDefault()
    let random=Math.floor(Math.random() * (99 - 1) + 1);
    
    if(imgUrl =="")
    imgUrl="https://randomuser.me/api/portraits/women/"+random+".jpg";
     

let new_emp= new Employee(parseInt( id.value) , full_n.value, department.value , level.value , imgUrl);

new_employees.push(new_emp);

localStorage.setItem("Employees" , JSON.stringify(new_employees))
makeCard(new_emp);


});


let cardsSec = document.getElementById("cardsSec");
for(let i=0; i <Employees.length ; i++){
makeCard(Employees[i]);
}
for(let i=0; i <new_employees.length ; i++){
    makeCard(new_employees[i]);
    }

// makeCard();

function makeCard(cards){
let div = document.createElement("div");
div.setAttribute("id" , "card")
cardsSec.appendChild(div);

let img = document.createElement("img");
img.setAttribute("src" , cards.Image_URL);

let cardName = document.createElement("p");
cardName.appendChild(document.createTextNode("Name : "+cards.Full_name));

let cardID = document.createElement("p");
cardID.appendChild(document.createTextNode("ID : "+cards.ID));

let carddep = document.createElement("p");
carddep.appendChild(document.createTextNode("Department : "+cards.Department));

let cardLevel = document.createElement("p");
cardLevel.appendChild(document.createTextNode("Level : "+cards.Level));

let cardSalary = document.createElement("p");
cardSalary.appendChild(document.createTextNode("Salary : "+cards.Salary));


// add img to the div 
div.appendChild(img);

// add paragraphes to the div 
div.appendChild(cardName);
div.appendChild(cardID);
div.appendChild(carddep);
div.appendChild(cardLevel);
div.appendChild(cardSalary);
}

