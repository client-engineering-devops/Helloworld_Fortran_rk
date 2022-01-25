#HelloWorld_Fortran

# start by building the basic container
FROM ubuntu:18.04
MAINTAINER R Kramer <kramerro@us.ibm.com>

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -yq git curl && \
    apt-get install --no-install-recommends -yq make cmake gfortran libcoarrays-dev libopenmpi-dev open-coarrays-bin nodejs npm && \
    apt-get clean -q && \
    rm -rf /var/lib/apt/lists/*

# build the hello world code
COPY Makefile run_fortran.sh HelloWorld.f90 HelloAgainInput.txt /fortran/
WORKDIR /fortran/
RUN make HelloWorld

COPY package.json package-lock.json server.js users.json ./
RUN npm install

# configure the container to run the hello world executable by default
# CMD ["./HelloWorld"]
ENTRYPOINT ["./run_fortran.sh"]
