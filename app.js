

require('dotenv').config()

const PORT = process.env.PORT


const server = () => {
        console.log('listening to port:', PORT)
}

server ()