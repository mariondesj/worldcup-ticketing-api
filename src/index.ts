import { app } from './app'//👉 Tu importes ton application

export default {
  port: 3000,//Le serveur va tourner sur :http://localhost:3000
  fetch: app.fetch,//Ça relie ton serveur à ton app
}