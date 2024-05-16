FROM node:18-alpine as base
WORKDIR /usr/src/fiap-fase3-app
COPY ./package.json .
COPY prisma ./prisma/
RUN npm i && npm i -g typescript

FROM base as build
WORKDIR /usr/src/fiap-fase3-app
COPY . .
COPY --from=base /usr/src/fiap-fase3-app/node_modules ./node_modules
RUN tsc

FROM base as prod
WORKDIR /usr/src/fiap-fase3-app
COPY --from=build /usr/src/fiap-fase3-app/dist ./dist
ENV DATABASE_URL=mysql://admin:og2m3z7W,2Yz@fiap-rds-api-db.cyjnswqfrmiw.us-east-1.rds.amazonaws.com:3306/fiap-api
CMD ["node", "dist/main/server.js"] 