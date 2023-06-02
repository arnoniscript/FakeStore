<h1 align="center">FakeStore - FrontEnd </h1>

- Projeto realizado no Rethink Academy - Turma Yoda 2023.1

![Badge_finalizado](http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=GREEN&style=for-the-badge)

<h2>Atenção:</h2>
<p>Este projeto requer a conexão com o backend, que pode ser baixado neste <a href="https://github.com/arnonirethink/Back-end---FakeStore">repositório</a>.</p>

<h2>Como rodar?</h2>
<ul>
  <li>Siga as instruções para rodar o backend antes de rodar este repositório.</li>
  <li>Dê o comando <code>npm i</code> para instalar todos os componentes e bibliotecas necessários.</li>
  <li>Dê o comando <code>npm start</code> e o acesso será liberado em <code>localhost:3000</code>.</li>
</ul>

<h2>Rotas implantadas:</h2>
<ul>
  <li><code>localhost:3000/</code> - Homepage</li>
  <li><code>/products</code> - Retorna todos os produtos do DB</li>
  <li><code>/products/:id</code> - Retorna o produto pelo ID</li>
  <li><code>/products/categories</code> - Retorna todas as categorias de produtos</li>
  <li><code>/products/categories/:category</code> - Retorna todos os produtos de uma determinada categoria</li>
  <li><code>/products/insertproduct</code> - Formulário de adição de produto</li>
  <p> O campo "categoria" puxa automaticamente as categorias cadastradas no backend através do endpoint "/products/categories"<p>
  <p> Ao adicionar a URL da imagem é aberto um campo de preview. </p>
  <p> Ao clicar em "cancelar" uma lightbox de confirmação é exibida </p>
  <p> Ao adicionar com sucesso um produto, uma caixa de diálogo é apresentada no centro da tela por 2 segundos confirmando o nome e a categoria do produto inserido </p>
  
  
  <img width="400" alt="Captura de tela 2023-06-02 094132" src="https://github.com/arnonirethink/FakeStore---Rethink/assets/124932698/7631db23-5370-4d5e-bb4e-886fe55d8e23">
<img width="335" alt="Captura de tela 2023-06-02 094147" src="https://github.com/arnonirethink/FakeStore---Rethink/assets/124932698/df7433b8-9de7-4627-a0ae-6d2f7af2633d">
  <img width="740" alt="Captura de tela 2023-06-02 101125" src="https://github.com/arnonirethink/FakeStore---Rethink/assets/124932698/552875e2-24c1-4443-978f-5fac2a6dae60">
<img width="740" alt="Captura de tela 2023-06-02 102438" src="https://github.com/arnonirethink/FakeStore---Rethink/assets/124932698/edfd8e35-96d2-44a5-8917-08e8c235799a">


</ul>

<h2>Componentes principais:</h2>
<ul>
  <li><code>ProductCardDetails</code> - É o card puxado por todas as páginas que apresentam produtos, utilizando uma imagem <code>{imageURL}</code>, um título <code>{title}</code> e o preço <code>{price}</code>.</li>
  <li><code>SearchBar</code> - É a barra de pesquisa por nome de produto. Para que o resultado seja apresentado em tempo real, ou seja, atualizado a cada letra inserida no campo de busca, é necessária a presença do componente <code>SearchBarResultsList</code> na mesma página.</li>
  <li><code>CategoriesBar</code> - É a barra de pesquisa por nome de categorias. Possui a mesma função da <code>SearchBar</code>.</li>
  

<img width="940" alt="Captura de tela 2023-06-02 093506" src="https://github.com/arnonirethink/FakeStore---Rethink/assets/124932698/1cc3734e-1104-4a1e-a0ec-5f5100949563">


  <li><code>ShowTopSellingItems</code> - Configura a apresentação de 3 produtos retornados do endpoint <code>topselling</code> de maior métrica "count", usando o componente <code>CardProductDetails</code>.</li>
  <img width="940" alt="Captura de tela 2023-06-02 092641" src="https://github.com/arnonirethink/FakeStore---Rethink/assets/124932698/a806388e-b305-4cea-b2ce-094b00c3fb9c">

  
</ul>




  
