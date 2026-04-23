
# Dockerised To-Do API with CI/CD on AWS EC2
    Foundation of this project is — infra + automation
A simple Node.js REST API (to-do list — just a todo route). You Dockerise it, push it to GitHub, connect a GitHub Actions workflow that auto-deploys to an EC2 instance on every push, with NGINX sitting in front as a reverse proxy.
## Tech Stack

This project used following tech stack:

- Node.js
- Docker
- GitHub Actions
- AWS EC2
- NGINX
- Ubuntu
## Arhchitectural Diagram of the system:

"https://github.com/user-attachments/assets/bd91f3ad-c1de-427c-bab2-cab3edf23039"



## GitHub Action Pipeline:

"https://github.com/user-attachments/assets/b39e300b-3283-43a8-a6c1-744eae2308e7"


## Live API response using EC2 public IP:

"https://github.com/user-attachments/assets/bd5393c0-d167-4361-826c-fc8b9873d05c"
## DockerFile Explained


```bash
FROM node:18-alpine                // Use base image with node.js
WORKDIR /app                       // Set /app as the working directory inside the container
COPY package*.json ./              // Copy package.json file 
RUN npm install --production       // Installs only production dependencies
COPY . .                           // Copies the rest of your project files into /app
EXPOSE 4000                        // Tells Docker the app runs on port 4000
CMD ["node", "index.js"]           // Runs my Node.js app using these commands

```
## Commands to Run Dockerfile 

```bash
docker build -t todo-api .
docker run -p 3000:3000 todo-api
```



 
