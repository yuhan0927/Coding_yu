import express from 'express'
import morgan from 'morgan'
import path from 'path'
import socketIO from 'socket.io'
import { Server, Socket } from 'net';
// import { request } from 'http';

const app = express()

app.set('views',path.resolve(__dirname,'views'))
app.set('view engine','ejs')

app.use(morgan('dev'))

app.get('/',(request, response) => {
    response.render('index')
})

let server = app.listen(3000, () => {
    console.log('Listen port: 3000')
})

let io = socketIO(server)

io.on('connection', (socket) => {
    console.log('connected')
})