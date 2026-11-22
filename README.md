# Oi Project

oi

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/55c7ad11-a3ac-42d9-96ae-3f49f40f8eee).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Configuração do site

Todos os dados editáveis ficam em `src/config/site.ts`:

- **`site.whatsapp`** — número só com dígitos, com DDI e DDD (ex.: `5511999999999`). Vazio: o formulário apenas monta o pedido e oferece "Copiar pedido"; nada é enviado.
- **`pacotes[].preco`** — `null` exibe "Sob consulta". Ex.: `"R$ 300/mês"`.
- **`site.formacao`**, **`objetivos`** — textos da apresentação e opções do formulário.
- **Fotos** — as imagens em `src/assets/treino-*.jpg` são ilustrativas e não retratam a Bruna. Substitua os arquivos (mesmo nome) ou altere `fotos` no config.

O formulário de aula experimental nunca confirma reserva: com WhatsApp configurado ele abre a conversa com a mensagem pronta para a pessoa enviar.

Testes: `bunx vitest run`.
