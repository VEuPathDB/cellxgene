FROM ubuntu:focal

ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive TZ=Etc/UTC  apt-get install -y \
    build-essential \
    libxml2-dev \
    python3-dev \
    python3-pip \
    python3.8-venv \
    zlib1g-dev \
    python3-requests \
    python3-aiohttp \
    git \
    jq \
    npm \
    cpio \
    && rm -rf /var/lib/apt/lists/*

RUN pip3 install numpy==1.22

COPY [".", "/project_home/cellxgene"]

WORKDIR /project_home/cellxgene

RUN make build

WORKDIR /project_home/cellxgene/build

RUN pip3 install .

# gateway

# below grabs a wheel of the gateway that includes prometheus metrics.
# It can be done more properly if
# https://github.com/Novartis/cellxgene-gateway/pull/72 is ever accepted

RUN pip install https://software.apidb.org/cellxgene_gateway-0.3.10-py3-none-any.whl

ENV CELLXGENE_DATA=/cellxgene-data
ENV CELLXGENE_LOCATION=/usr/local/bin/cellxgene
ENV GATEWAY_EXTRA_SCRIPTS=[\"static/paintGene.js\"]

CMD ["cellxgene-gateway"]



COPY ["scripts/paintGene.js", "/usr/local/lib/python3.8/dist-packages/server/common/web/static/paintGene.js"]

#ENTRYPOINT ["cellxgene"]
