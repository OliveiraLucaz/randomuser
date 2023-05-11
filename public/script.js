


// seleciona o elemento HTML onde o texto será exibido
const statusElement = document.getElementById("tbody");

// exibe o texto "Carregando dados..." enquanto a conexão é feita

statusElement.innerHTML = `<div class="d-flex justify-content-center">
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
  
</div>
<p>Carregando Dados...</p>
</div>`;

// faz a conexão fetch à API
fetch("https://randomuser.me/api/?results=50&nat=br")
    .then(response => {
        // verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error("Erro ao carregar os dados da API");
        }
        // converte a resposta em um objeto JSON
        return response.json();
    })
    .then(data => {
        // exibe os dados retornados pela API na tabela HTML
        let tableHTML = ""; // variável para armazenar os elementos HTML da tabela
        data.results.sort((a, b) => a.name.first.localeCompare(b.name.first));

        for (const i in data.results) {
            const aaa = parseInt(i) + 1;
            const user = data.results[i];
            const dataISO = data.results[i].dob.date;
            const datas = new Date(dataISO);
            const dia = datas.getDate().toString().padStart(2, '0');
            const mes = (datas.getMonth() + 1).toString().padStart(2, '0');
            const ano = datas.getFullYear().toString();
            const dataFormatada = `${dia}/${mes}/${ano}`;
            let gender = user.gender === "male" ? "Masculino" : "Feminino";
            let country = user.location.country === "Brazil" ? "Brasil" : user.location.country;
            
            // concatenando os elementos HTML da tabela na variável tableHTML
            tableHTML += `<tr data-bs-toggle="modal" data-bs-target="#modal${aaa}">
                              
                               <td class="nome">${user.name.first} ${user.name.last}</td>
                               
                               <td class="email">${user.email}</td>
                               
                               
                               
                               
                               <td class="cidade">${user.location.city}</td>
                              
                               <td class="telefone">${user.phone}</td>
                               <td class="celular">${user.cell}</td>
                               <td><img class="profile_picture_list" src="${user.picture.thumbnail}"</td>
                               <td>
                               <button type="button" class="detalhes btn btn-sm btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#modal${aaa}">
        Mais Detalhes
    </button>
    <div class="modal fade" id="modal${aaa}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cliente ${aaa}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                <img class="profile_picture" src="${user.picture.large}" />
                            </div>

                        </div>
                    </div>

                    <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                <div class="mb-3 text-start">
                                    <label for="disabledTextInput" class="form-label">Nome</label>
                                    <input type="text" id="disabledTextInput" class="form-control disable"
                                        placeholder="${user.name.first} ${user.name.last}" disabled>
                                </div>
                            </div>
                            <div class="col">
                                <div class="mb-3 text-start">
                                    <label for="disabledTextInput" class="form-label">E-mail</label>
                                    <input type="text" id="disabledTextInput" class="form-control disable"
                                        placeholder="${user.email}" disabled>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="mb-3 text-start">
                                    <label for="disabledTextInput" class="form-label">Data de nascimento</label>
                                    <input type="text" id="disabledTextInput" class="form-control disable"
                                        placeholder="${dataFormatada}" disabled>
                                </div>
                            </div>
                            <div class="col">
                                <div class="mb-3 text-start">
                                    <label for="disabledTextInput" class="form-label">Idade</label>
                                    <input type="text" id="disabledTextInput" class="form-control disable"
                                        placeholder="${user.dob.age} anos" disabled>
                                </div>
                            </div>
                            
                            
                        </div>
                        <div class="row">
                        <div class="col">
                                <div class="mb-3 text-start">
                                    <label for="disabledTextInput" class="form-label">CPF</label>
                                    <input type="text" id="disabledTextInput" class="form-control disable"
                                        placeholder="${user.id.value}" disabled>
                                </div>
                            </div>
                        <div class="col">
                                <div class="mb-3 text-start">
                                    <label for="disabledTextInput" class="form-label">Gênero</label>
                                    <input type="text" id="disabledTextInput" class="form-control disable"
                                        placeholder="${gender}" disabled>
                                </div>
                            </div>
                            </div>

                        <div class="row">
                            <div class="col col-4">
                                <div class="mb-3 text-start">
                                    <label for="disabledTextInput" class="form-label">Naturalidade</label>
                                    <input type="text" id="disabledTextInput" class="form-control disable"
                                        placeholder="${user.nat}" disabled>
                                </div>
                            </div>
                            <div class="col">
                                <div class="mb-3 text-start">
                                    <label for="disabledTextInput" class="form-label">País</label>
                                    <input type="text" id="disabledTextInput" class="form-control disable"
                                        placeholder="${country}" disabled>
                                </div>
                            </div>
                            <div class="col">
                                <div class="mb-3 text-start">
                                    <label for="disabledTextInput" class="form-label">Estado</label>
                                    <input type="text" id="disabledTextInput" class="form-control disable"
                                        placeholder="${user.location.state}" disabled>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="mb-3 text-start">
                                    <label for="disabledTextInput" class="form-label">Cidade</label>
                                    <input type="text" id="disabledTextInput" class="form-control disable"
                                        placeholder="${user.location.city}" disabled>
                                </div>
                            </div>
                            <div class="col">
                                <div class="mb-3 text-start">
                                    <label for="disabledTextInput" class="form-label">Rua</label>
                                    <input type="text" id="disabledTextInput" class="form-control disable"
                                        placeholder="${user.location.street.name}" disabled>
                                </div>
                            </div>
                            <div class="col col-3">
                                <div class="mb-3 text-start">
                                    <label for="disabledTextInput" class="form-label">Número</label>
                                    <input type="text" id="disabledTextInput" class="form-control disable"
                                        placeholder="${user.location.street.number}" disabled>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="mb-3 text-start">
                                    <label for="disabledTextInput" class="form-label">Telefone Fixo</label>
                                    <input type="text" id="disabledTextInput" class="form-control disable"
                                        placeholder="${user.phone}" disabled>
                                </div>
                            </div>
                            <div class="col">
                                <div class="mb-3 text-start">
                                    <label for="disabledTextInput" class="form-label">Celular</label>
                                    <input type="text" id="disabledTextInput" class="form-control disable"
                                        placeholder="${user.cell}" disabled>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">fechar</button>
                </div>
            </div>
        </div>
    </div>
                               </td>
                             </tr>`;
        }
        
        // inserindo os elementos HTML na tabela
        document.getElementById("tbody").innerHTML = tableHTML;

    })
    .catch(error => {
        // trata erros durante a conexão
        console.error(error);
        statusElement.innerText = "Erro ao carregar os dados da API";
    });