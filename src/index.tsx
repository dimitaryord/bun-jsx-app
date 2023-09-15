import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'

import * as elements from 'typed-html'

import AppProvider from './loader'
import AppRouter from './app/router'

const app = new Elysia().use(html)


AppRouter.router.forEach(Route => {

  app.get(`${Route.path}`, ({ html }) => html(
    <AppProvider>
      <AppRouter.root>
        <Route.root />
      </AppRouter.root>
    </AppProvider>
  ))  
})

app.get('/main.js', () => Bun.file('src/client/main.js'))
app.get('/public/style.css', () => Bun.file('src/app/public/style.css'))
app.get('/store', () => Bun.file('src/client/store/index.js'))

app.listen(3000, () => {
  console.log(
    `App is running at ${app.server?.hostname}:${app.server?.port}`
  )
})

