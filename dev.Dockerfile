FROM node:18

WORKDIR /usr/src/app

COPY  . .

RUN npm i

ENV API_URL=http://localhost:4000/

CMD ["npm", "run", "dev", "--", "--host"]