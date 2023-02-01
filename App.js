const express = require('express')
const app = express()
app.use(express.json()) 
const port = process.env.PORT || 3002

app.post('/emp', (req, res) => {
    console.log("Request::::",req.body);
  res.json({
      "EmployeeId" : "11010",
      "BasicSalary" : 100000
  })
})

app.post('/tax', (req, res) => {
    res.json({
        "EmployeeId" : req.body.EmployeeId,
        "Tax" : 1000
    })
  })

app.get('/test', (req, res) => {
    res.send('test string!!!');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})