FROM node:lts-alpine

ADD . /app/
WORKDIR /app

RUN npm install \
    && npm run build

EXPOSE 3000

COPY docker/next/docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

ENTRYPOINT [ "docker-entrypoint" ]
CMD [ "npm", "run", "start" ] 