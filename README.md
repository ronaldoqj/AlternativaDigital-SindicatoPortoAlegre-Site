# sind-poa-site (sindicato-porto-alegre-site)

Site of Syndicate of Porto Alegre

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development SSR mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev -m ssr
# or the longer form:
quasar dev --mode ssr
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Build the SSR app for production

```bash
quasar build -m ssr
# or the longer form:
quasar build --mode ssr
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

### Erros
### Caso não carregue o site e apresente apenas uma tela em branco, possivelmente o windows não está conseguindo se conectar com o WSL, para solucionar acesse o site por algum dos endereços:
Pelo IP do WSL (Mais garantido): http://172.28.92.249:9100/
Pelo IP local direto: http://127.0.0.1:9100/