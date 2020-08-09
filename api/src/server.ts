import app from './app'

async function bootstrap() {
    app.listen(8080)
    console.log("Server is up and running on port 8080!")
    
    app.get('/', (req, res) => {
        return res.send("Proffy API - #NLW2.0")
    })
}

bootstrap()