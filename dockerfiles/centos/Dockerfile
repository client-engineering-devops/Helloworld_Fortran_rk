#HelloWorld_Fortran
 
# start by building the basic container
FROM centos:latest
MAINTAINER Jessica Kelly <jkelly@urban.org>
RUN yum update -y
RUN yum install -y gcc-gfortran gdb make curl
 
# build the hello world code
COPY Makefile run_fortran.sh HelloWorld.f90 HelloAgainInput.txt /fortran/
WORKDIR /fortran/
RUN make HelloWorld
 
# NodeJs
#RUN curl -sL https://rpm.nodesource.com/setup_16.x | bash -
RUN yum install -y nodejs
RUN yum clean all
 
#COPY package.json package-lock.json server.js users.json ./
COPY package.json package-lock.json server.js users.json ./
RUN npm install
 
# configure the container to run the hello world executable by default
# CMD ["./HelloWorld"]
ENTRYPOINT ["./run_fortran.sh"]
