import 'module-alias/register'
import { prismaClient } from '@/infrastructure/repositories/prismaClient'
import env from './config/env'

prismaClient.$connect()
  .then(async () => {
    const { setupApp } = await import('./config/app')
    const app = setupApp()
    app.listen(env.PORT, () => process.stdout.write(`Server running at ${env.PORT}`))
  })
  .catch(console.error)

/*
mysql -h fiap-rds-api-db.cyjnswqfrmiw.us-east-1.rds.amazonaws.com -u admin -p
og2m3z7W,2Yz
*/
