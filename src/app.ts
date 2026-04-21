import { Hono } from 'hono'

export const app = new Hono()

app.get('/', (c) => // route principale (entrée)
  //par default : return c.text('Hello Hono!') 
  c.json({
    success : true,
    message : "World Cup Ticketing API"
  })
)
app.get('/health', (c) =>// route health
  c.json({
    status : "ok"
  })
)


