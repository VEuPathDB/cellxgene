FROM ubuntu:focal

ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive TZ=Etc/UTC  apt-get install -y build-essential libxml2-dev python3-dev python3-pip zlib1g-dev python3-requests python3-aiohttp git jq npm cpio

WORKDIR /project_home

COPY [".", "/project_home/cellxgene"]

WORKDIR /project_home/cellxgene

RUN make build

WORKDIR /project_home/cellxgene/build

RUN pip3 install .

#ENTRYPOINT ["cellxgene"]
