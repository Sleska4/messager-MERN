const express = require('express');
const mongoose = require('mongoose');
const http = require('http');

const app = express();
const server = http.createServer(app);

const io = require('socket.io')(http);


const PORT = process.env.PORT || 5000;

app.use(express.json({extended: true}));
app.use('/api/auth', require('./routs/auth.rout'));
app.use('/api/todo', require('./routs/todos.routs'));

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://Sleska4:Aleksey1209@cluster0.eile7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true,
        })
        io.on('connection', (socket) => {
            console.log('a user connected');
            socket.on('disconnect', () => {
              console.log('user disconnected');
            });
          });

        server.listen(PORT, () => {
            console.log(`Server started on port ${PORT}...`)
        })
    } catch(err) {console.log(err)}
}

start()