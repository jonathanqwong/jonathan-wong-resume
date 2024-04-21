# from https://www.googlecloudcommunity.com/gc/Community-Blogs/No-servers-no-problem-A-guide-to-deploying-your-React/ba-p/690760
# Use the slim version of the node 14 image as our base
# FROM node:14-slim

# # Create a directory for our application in the container 
# RUN mkdir -p /usr/src/app

# # Set this new directory as our working directory for subsequent instructions
# WORKDIR /usr/src/app

# # Generate a new .env file from all existing environment variables that begin with "REACT_APP"
# RUN printenv | grep ^REACT_APP > .env

# # Copy all files in the current directory into the container
# COPY . .

# # Set the PYTHONPATH environment variable, which is occasionally necessary for certain node packages
# # 'PWD' is an environment variable that stores the path of the current working directory
# ENV PYTHONPATH=${PYTHONPATH}:${PWD}

# # Set the environment variable for the application's port
# # (Be sure to replace '4200' with your application's specific port number if different)
# ENV PORT 8080


# # Install 'serve', a static file serving package globally in the container
# RUN npm install -g serve

# # Install all the node modules required by the React app
# RUN npm install
# # Build the React app
# RUN npm run build

# EXPOSE 8080
# # Serve the 'build' directory on port 4200 using 'serve'
# CMD ["serve", "-s", "-l", "8080", "./build"]

##################
# Stage 1: Build the React application
FROM node:14 as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install
RUN npm install -g serve

# Bundle app source inside Docker image
COPY . /usr/src/app

# Build the React app
RUN npm run build

# Stage 2: Serve the React application from Nginx
# FROM nginx:alpine

# copy nginx configuration
# COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Copy the build output to replace the default nginx contents.
# COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 8080


# Start Nginx and keep it running in the foreground
# CMD ["serve", "-s", "build", "-p", "8080"]

CMD = ["npm", "start"]