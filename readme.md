# Parc 8 - Dockerization
I have pushed the current application to the docker and opned a new container in docker and able to view the application in the port specified 
## Command to run the Docker file 
```
docker build -t <imagename> .
```
## Command to run the application using the image 
```
docker run -dp 3000:3000 <imagename>
```