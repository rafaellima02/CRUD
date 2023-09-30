var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Recupere os dados

function readFormData() {
    var formData = {};
    formData["clube"] = document.getElementById("clube").value;
    formData["regiao"] = document.getElementById("regiao").value;
    formData["datafundacao"] = document.getElementById("datafundacao").value;
    formData["estadio"] = document.getElementById("estadio").value;
    return formData;
}

//inserir a data

/*function insertNewRecord(data) {
    {
        const sql = `INSERT INTO registro (clube, regiao, datafundacao, estadio) 
                     VALUES ('${data.clube}', '${data.regiao}', '${data.datafundacao}', '${data.estadio}')`;
        connection.query(sql, (err, result) => {
          if (err) throw err;
          console.log('Registro inserido com sucesso!');
        });
        // Restante do código
      }
      
    var table = document.getElementById("clubelist").getElementsByTagName('thead')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.clube;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.regiao;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.datafundacao;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.estadio;
}

function createButton(buttonName, action, element) {
            const button = document.createElement("button");
            button.innerText = buttonName;
            button.addEventListener("click", action);
            element.appendChild(button);
          }
*/



        

/*
//Edite a data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("clube").value = selectedRow.cells[0].innerHTML;
    document.getElementById("regiao").value = selectedRow.cells[1].innerHTML;
    document.getElementById("datafundacao").value = selectedRow.cells[2].innerHTML;
    document.getElementById("estadio").value = selectedRow.cells[3].innerHTML;
}

    function updateRecord(formData) {
        const sql = `UPDATE registro SET 
                     clube = '${formData.clube}', 
                     regiao = '${formData.regiao}', 
                     datafundacao = '${formData.datafundacao}', 
                     estadio = '${formData.estadio}' 
                     WHERE id = ${selectedRow.cells[4].innerText}`;
        connection.query(sql, (err, result) => {
          if (err) throw err;
          console.log('Registro atualizado com sucesso!');
        });
        // Restante do código
      
      
    selectedRow.cells[0].innerHTML = formData.clube;
    selectedRow.cells[1].innerHTML = formData.regiao;
    selectedRow.cells[2].innerHTML = formData.datafundacao;
    selectedRow.cells[3].innerHTML = formData.estadio;
}

//Delete a data
function onDelete(td) {
    if (confirm('Quer mesmo deletar?')) {
        row = td.parentElement.parentElement;
        document.getElementById('clubelist').deleteRow(row.rowIndex);
        resetForm();
    }
}
*/
//Resete a data
function resetForm() {
    document.getElementById("clube").value = '';
    document.getElementById("regiao").value = '';
    document.getElementById("datafundacao").value = '';
    document.getElementById("estadio").value = '';
    selectedRow = null;
}

const AnoMinimo = 1820;
const AnoMaxímo = 2023;
const Ano = new Date().getFullYear();

const select = document.getElementById("datafundacao");

for (let DATA = AnoMinimo; DATA <= AnoMaxímo; DATA++) {
    const option = document.createElement("option");
    option.value = DATA;
    option.text = DATA;
    if (DATA === Ano) {
        option.selected = true;
    }
    select.add(option);
}