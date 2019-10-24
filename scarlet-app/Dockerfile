FROM mhart/alpine-node:12.13.0 AS builder
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "3000", "-s", "."]
  