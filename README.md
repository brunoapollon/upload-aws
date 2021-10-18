# upload-aws

## Tecnologias

- [Node](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/pt-br)
- [Typescript](https://www.typescriptlang.org)
- [aws-s3](https://aws.amazon.com/pt/free/)

## Projeto

Esse projeto é aplicação de um estudo sobre upload de arquivos para o serviço de armazenamento s3 da Amazon. Foi utilizado tecnologias importantes no mercado como o typescript e aws, o mongoDB serviu para gravação simples das urls e dos dados dos arquivos enviados para o s3.

## Instruções

- Para instalar todas as dependências utilizadas do projeto basta rodar o comando `yarn`
- O servidor pode ser iniciado com `yarn dev`, onde se tem acesso pelo `http://localhost:3333`
- Existe dois tipos de Storage o `local` e o `s3` deve ser informado na variável ambiente qual dos storages será utilizado.
- Caso o storage `local` seja selecionado, é importante verificar se as pastas onde os arquivos são armazenados estão criadas. Deve ter uma pasta `temp` e dentro dessa pasta, outra chamada `uploads` para que o funcionamento local não apresente problemas.

## Rotas da aplicação

- `http://localhost:3333/file/posts` a primeira rota é a de criação(`POST`) basta enviar o arquivo com o name `file`, caso esteja usando o insomnia será feito pelo multipart.
- `http://localhost:3333/file/listAll` essa rota é a que lista todos os arquivos que foram cadastrados.
- `http://localhost:3333/file/deleteFile/:file_id` essa rota que deleta os arquivos, basta passar o id do arquivo pela rota e ele será deletado.
