FROM ubuntu:focal

ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive TZ=Etc/UTC  apt-get install -y build-essential libxml2-dev python3-dev python3-pip zlib1g-dev python3-requests python3-aiohttp git jq npm cpio

RUN pip3 install numpy==1.22

WORKDIR /project_home

COPY [".", "/project_home/cellxgene"]

WORKDIR /project_home/cellxgene

RUN make build

WORKDIR /project_home/cellxgene/build

RUN pip3 install .

# gateway
RUN pip install cellxgene-gateway 'MarkupSafe<2.1'

ENV CELLXGENE_DATA=/cellxgene-data
ENV CELLXGENE_LOCATION=/usr/local/bin/cellxgene
ENV GATEWAY_EXTRA_SCRIPTS=[\"static/paintGene.js\"]

CMD ["cellxgene-gateway"]



COPY ["scripts/paintGene.js", "/usr/local/lib/python3.8/dist-packages/server/common/web/static/paintGene.js"]

#ENTRYPOINT ["cellxgene"]
