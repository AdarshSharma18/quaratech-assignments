const readline = require('readline')

const express = require('express')
const app = express()

const db = require('./models')

const {User}= require('./models')

const inquirer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


app.get("/select",(req,res)=>{
    User.findAll().then((users)=>{
        res.send(users)
    }).catch((err)=>{
        console.log(err);
    })
})

app.get("/insert",(req,res)=>{
    inquirer.question("What is your name ?", name=>{
        inquirer.question("Enter your Last name ?",last =>{
            inquirer.question("Enter your Age :", user_age=>{
                inquirer.question("Enter your Roll No.", user_roll=>{
                    inquirer.question("Enter Your Gender",user_gender=>{
                        if(name===''||last===''||user_age===''||user_roll===''||user_gender===''){
                            console.log('Invalid Inputs')
                        }
                        else{
                            User.create({
                                firstName:name,
                                lastName:last,
                                age:user_age,
                                roll_no:user_roll,
                                gender:user_gender,
                        
                            }).catch((err)=>{
                                if(err){
                                    console.log(err);
                                }
                            });
                            inquirer.close();
                        }
                    })
                })
    
            })
        })
        
    });
    res.send('Value has been inserted');
})

app.get("/update",(req,res)=>{
    inquirer.question("Enter the Name of the person that you want to update ",name=>{
        if(name===''){
            console.log('you have not entered the value :')
        }
        else{
            inquirer.question("enter the value you want to update",user_roll=>{
                User.update({roll_no:user_roll},{
                    where:{firstName:name}
                });
                inquirer.close()
            })
        }

    })
    res.send('updated');
})

app.get("/delete",(req,res)=>{
    inquirer.question("Enter the firstname of person that you want to delete ", name=>{
        if(name===''){
            console.log('You Have not entered the name')
        }
        else{
            User.destroy({where:{firstName:name}});
            inquirer.close();
        }
    })
    res.send('delete')
})

db.sequelize.sync().then((req)=>{
    app.listen(3001,()=>{
        console.log('server running');
    })
})