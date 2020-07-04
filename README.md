# water-environment-easy

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### docker部署

```sh

# 构建
docker build . -t my-app

# 运行 http://127.0.0.1:8000/login
docker run -d -p 8000:80 my-app

```