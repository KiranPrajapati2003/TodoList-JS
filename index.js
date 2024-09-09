const express = require('express');
const port = 8089;
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

let todoList = []

app.get('/', (req, res) => {
    return res.render('form', {
        todoList
    });
})

app.post('/insertdata',(req,res)=>{
    todoList.push(req.body);
    return res.redirect('/')
})
app.get('/deleteData/:id',(req,res)=>{
    let {id} = req.params
    console.log(id);
    
    let data = todoList.filter((list)=>{
        return list.id !== id
    })
    todoList = data
    return res.redirect('/')
})
app.listen(port, (err) => {
    if (err) {
        console.log("server not start");
        return false;
    }
    console.log("server start on port http://localhost:" + port);

})