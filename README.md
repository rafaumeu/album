

[![GitHub license](https://img.shields.io/github/license/rafaumeu/album)](https://github.com/rafaumeu/album/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/rafaumeu/album)](https://github.com/rafaumeu/album/issues)
[![GitHub stars](https://img.shields.io/github/stars/rafaumeu/album)](https://github.com/rafaumeu/album/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/rafaumeu/album)](https://github.com/rafaumeu/album/network)
![GitHub last commit](https://img.shields.io/github/last-commit/rafaumeu/album)
![GitHub contributors](https://img.shields.io/github/contributors/rafaumeu/album)


# Álbum de Imagens 
[![2024-01-07_08-49](https://github.com/rafaumeu/album/assets/30784471/f53c50e6-7bd4-46d5-b123-9431dfafa602)](https://sage-halva-1b9caf.netlify.app)
clique na foto para ser redirecionado a aplicação

 Bem-vindo ao Álbum de Imagens, uma aplicação React simples que permite explorar e visualizar imagens da API do Unsplash.  

## Funcionalidades  
- Exibição de imagens em um layout de álbum. - Input de busca para encontrar imagens específicas. - Select para filtrar imagens por categoria.

## Configuração

### Pré-requisitos  
- Node.js e npm instalados.  
### Instalação 

1. Clone o repositório:     
```bash    
git clone https://github.com/rafaumeu/album.git
```

2.  Navegue até o diretório do projeto:
    
    ```bash
    cd album
    ```
    
3.  Instale as dependências:
    
    Instalação com npm

    ```bash
    `npm install`
    ```
    
    Instalação com yarn
     
    ```bash
    `yarn`
    ```
    
    
4.  Configure as variáveis de ambiente:
    
    *   Crie um arquivo `.config.js` na raiz do projeto.
        
    *   Obtenha uma chave de API do Unsplash Developer e adicione-a ao arquivo `.config.js`:
        
        ```js
            const config = {
              'REACT_APP_UNSPLASH_ACCESS_KEY': 'SUA_ACCESS_KEY_AQUI'
            }
            export default config;

        ```
        

Uso
---

1.  Inicie a aplicação:
    
    ```node
    npm run dev
    ```
    
2.  Abra o navegador e acesse http://localhost:5173/
    
3.  Explore o álbum de imagens, utilize o campo de busca e o seletor de categorias para personalizar a visualização por categorias.
    

Contribuição
------------

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Abra uma issue ou envie um pull request.

Licença
-------

Este projeto está licenciado sob a Licença MIT.

