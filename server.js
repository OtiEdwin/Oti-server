// const http = require('http')
// const user = {
//     name:'john doe',
//     class:'middle-class'
// }
// const server = http.createServer((req, res)=>{
//     console.log(req.url)
//     res.setHeader('Content-Type','application/json')
//     res.end(JSON.stringify(user))
// })

// server.listen(8080)

const express = require('express')
const { password } = require('pg/lib/defaults')
const bodyParser = require('body-parser')

const app = express()

app.use( bodyParser.urlencoded({ extended : false }) )

const data_base = [
    {
        firstname : 'johnny',
        email : 'kingman@gmail.com',
        password : 'heyhey'
    },

    {
        firstname : 'eddie',
        email : 'servantman@gmail.com',
        password : 'password'
    }
]

const greeting = () => {console.log('hey, how are you')}
const sign_in = (res, req) => {
    const in_database = data_base.filter( value => { return value.firstname === req.body.firstname && value.email === req.body.email } )

    if(in_database){
        console.log('you logged in to', res.body)
        res.send('success')
    }
}
const registrar = () => {}




app.get( '/', greeting )

app.post( '/signin', sign_in )

app.post( '/signup', ( res, req ) => {
    const { firstname, email, password } = req.body
    data_base.push(
        {
            firstname : firstname,
            email : email,
            password : password
        }
    )
})


app.listen( 8080, greeting )

// /signin --> post
// /home --> post
// /login --> post
// 
// 