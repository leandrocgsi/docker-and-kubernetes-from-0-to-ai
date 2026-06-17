FROM node:14.15.0
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]