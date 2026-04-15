FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
COPY node_modules ./node_modules
COPY . .
RUN node /app/node_modules/vite/bin/vite.js build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "server.js"]
