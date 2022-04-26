# Pluto
An Online Judge for AKGEC Students. 

## Installation
The installation has been well tested to work on Ubuntu 20.04. (Can have issues on installation with windows due to Docker Inabilities.)
* Install latest version of docker in your system.
* Please pull two images `stepik/epicbox-gcc:6.3.0` and `python:3.6.5-alpine` using `docker pull <image_name>`
* Clone this project; actually you only require the `docker-stack.yml` file and the three `*.env` files : )
* Change the env variables in `worker.env`, `frontend.env` and `server.env` as per your required variables. Note the frontend service will start on port `80` only due to image.
* Run the command in terminal `docker swarm init` to initialize a docker swarm.
* Execute `docker stack deploy -c docker-stack.yml cp` to compile Docker images for all four services.
* All the four services will start running after some time.
* You can check for running service by command `docker service ls`


## Features
* Micro-service based architecture makes it super simple to scale. Docker images can be found at https://hub.docker.com/h1teshtr1path1/pluto


