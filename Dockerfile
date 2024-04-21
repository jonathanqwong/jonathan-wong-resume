# from https://medium.com/@JeffyJeff/how-to-deploy-a-dockerized-react-app-using-azure-devops-pipelines-75c7ea083701
# Step 1: Build the React application
FROM node:14 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# Step 2: Serve the application using Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# # Stage 1: Build the React application
# FROM node:14 as build

# # Set the working directory in the container
# WORKDIR /usr/src/app

# # Copy the current directory contents into the container at /usr/src/app
# COPY package*.json ./

# # Install any needed packages specified in package.json
# RUN npm install

# # Bundle app source inside Docker image
# COPY . /usr/src/app

# # Build the React app
# RUN npm run build

# # Stage 2: Serve the React application from Nginx
# # FROM nginx:alpine

# # copy nginx configuration
# # COPY nginx/nginx.conf /etc/nginx/nginx.conf

# # Copy the build output to replace the default nginx contents.
# # COPY --from=build /usr/src/app/build /usr/share/nginx/html

# # Expose port 80 to the outside world
# EXPOSE 8080

# # Start Nginx and keep it running in the foreground
# CMD ["npm", "start"]

