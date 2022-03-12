# CRIANDO UM GERADOR DE MEMES COM DOCKER

Configurações basicas para inicialização de container docker para execução dos codigos JS

## Dependences

- [Meme-maker](https://www.npmjs.com/package/@erickwendel/meme-maker)

## Dev dependencies

- [Nodemon](https://www.npmjs.com/package/nodemon)

## Image Dependences

- [GraphicsMagick](http://www.graphicsmagick.org/)
  - [Github GM](https://github.com/aheckmann/gm)
- [ImageMagick](https://imagemagick.org/index.php)

## Docker

- Inicializando container:

```
docker-compose up --build
```

Isso já é suficiente para criar o container docker e inicializar o servidor node para execução do codigo.

## Manipulando as imagens de dentro para fora do container

- Acessando o terminado do docker dentro do container

```
docker exec -it <nome_do_container> bash
```

- Convertendo a imagem para monocromatico

```
gm -convert "image/sorry.jpeg" -monochrome sorry.jpeg
```
