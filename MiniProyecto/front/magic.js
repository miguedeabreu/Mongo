class Professional
{
    constructor(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired,
                nationality, oscarsNumber, profession, photo, _id)
    {
        this.name         = name;
        this.age          = age;
        this.genre        = genre;
        this.weight       = weight;
        this.height       = height;
        this.hairColor    = hairColor;
        this.eyeColor     = eyeColor;
        this.race         = race;
        this.isRetired    = isRetired;
        this.nationality  = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession   = profession;
        this.photo        = photo;
        this._id          = _id
    }
}

function getPotter() 
{
    let id = document.getElementById("id").value
    let mostrar = document.getElementById("mostrar")
    let url = "http://localhost:5000/professional"

    if (id != "") 
    {
        url += `?id=${id}`
    }

    let param =
    {
        headers: { "content-type": "application/json; charset= UTF-8" },
        method: "GET"
    }
    fetch(url, param)
    .then(function (data) 
    {
        return data.json()
    })
    .then(function (result) 
    {
        console.log(result)
        if (id != "")
        {
            console.log(result);

                mostrar.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                                    <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="${result.photo}" class="img-fluid rounded-start" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                        <h5 class="card-title">${result.name}</h5>
                                        <p class="card-text">Edad: ${result.age}</p>
                                        <p class="card-text">Genero: ${result.genre}</p>
                                        <p class="card-text">Peso: ${result.weight} kg.</p>
                                        <p class="card-text">Altura: ${result.height} cm.</p>
                                        <p class="card-text">Color de pelo: ${result.hairColor}</p>
                                        <p class="card-text">Color de ojos: ${result.eyeColor}</p>
                                        <p class="card-text">Casa: ${result.race}</p>
                                        <p class="card-text">Fallecido: ${result.isRetired}</p>
                                        <p class="card-text">Nacionalidad: ${result.nationality}</p>
                                        <p class="card-text">Orden de Merlín: ${result.oscarsNumber}</p>
                                        <p class="card-text">Profesión: ${result.profession}</p>
                                        <p class="card-text"><small class="text-muted">Su ID es: ${result._id}</small></p>
                                        </div>
                                    </div>
                                    </div>
                                </div>`
        }
        else if (id === "") 
        {
            for (let id = 0; id < result.length; id++) 
            {
                mostrar.innerHTML += `<div class="card mb-3" style="max-width: 540px;">
                                    <div class="row g-0">
                                    <div class="col-md-4 photo">
                                        <img src="${result[id].photo}" class="img-fluid rounded-start" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                        <h5 class="card-title">${result[id].name}</h5>
                                        <p class="card-text">Edad: ${result[id].age}</p>
                                        <p class="card-text">Genero: ${result[id].genre}</p>
                                        <p class="card-text">Peso: ${result[id].weight} kg.</p>
                                        <p class="card-text">Altura: ${result[id].height} cm.</p>
                                        <p class="card-text">Color de pelo: ${result[id].hairColor}</p>
                                        <p class="card-text">Color de ojos: ${result[id].eyeColor}</p>
                                        <p class="card-text">Casa: ${result[id].race}</p>
                                        <p class="card-text">Fallecido: ${result[id].isRetired}</p>
                                        <p class="card-text">Nacionalidad: ${result[id].nationality}</p>
                                        <p class="card-text">Orden de Merlín: ${result[id].oscarsNumber}</p>
                                        <p class="card-text">Profesión: ${result[id].profession}</p>
                                        <p class="card-text"><small class="text-muted">Su ID es: ${result[id]._id}</small></p>
                                        </div>
                                    </div>
                                    </div>
                                </div>`
            }
        }
        else
            showToast("ERROR: el usuario con id: " + id + " no existe", "bg-danger")
    })
    .catch(function (error) {
        showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger")
        console.log(error)
    })
    mostrar.innerHTML = "";
}

function postPotter()
{
    let professional = new Professional (
                        document.getElementById("name").value,
                        document.getElementById("age").value,
                        document.getElementById("genre").value,
                        document.getElementById("weight").value,
                        document.getElementById("height").value,
                        document.getElementById("hairColor").value,
                        document.getElementById("eyeColor").value,
                        document.getElementById("race").value,
                        document.getElementById("isRetired").value,
                        document.getElementById("nationality").value,
                        document.getElementById("oscarsNumber").value,
                        document.getElementById("profession").value,
                        document.getElementById("photo").value)
    
    const url = "http://localhost:5000/professional";

    if (validar(professional))
    {
        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(professional),
                method: "POST"
            }

        fetch(url, param)
        .then(function(data)
        {
            return data.json()
        })
        .then(function(result)
        {
            if (result == "-1")
                showToast("ERROR: Error al insertar el dato" , "bg-danger")
            else
                showToast("Mago/Criatura creado con id: " + result, "bg-success")

            console.log(result)
        })
        .catch(function(error)
        {
            showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger")
            console.log(error)
        })
    }
}

function putPotter()
{   
    let professional = new Professional (
                    document.getElementById("name").value,
                    document.getElementById("age").value,
                    document.getElementById("genre").value,
                    document.getElementById("weight").value,
                    document.getElementById("height").value,
                    document.getElementById("hairColor").value,
                    document.getElementById("eyeColor").value,
                    document.getElementById("race").value,
                    document.getElementById("isRetired").value,
                    document.getElementById("nationality").value,
                    document.getElementById("oscarsNumber").value,
                    document.getElementById("profession").value,
                    document.getElementById("photo").value,
                    document.getElementById("_id").value)

    const url = "http://localhost:5000/professional";
    console.log(professional)
    
    if (validarPut(professional))
    {
        let bodyPut = {};

        for (atributo in professional)
        {
            if (professional[atributo] != "")
                bodyPut[atributo] = professional[atributo]
        }

        let param =
        {
            headers: { "Content-type": "application/json; charset= UTF-8" },
            body: JSON.stringify(bodyPut),
            method: "PUT"
        }
        fetch(url, param)
        .then(function (data) 
        {
            return data.json()
        })
        .then(function (result) 
        {
            console.log(result);
            if (result != "-1") 
            {
                // showToast("Introduce un id", "bg-danger")
            }
            else 
            {
                showToast("Mago/Criatura actualizada correctamente", "bg-success")
            }
        })
        .catch(function (error) 
        {
            showToast("ERROR: Fallo en la comunicacion con el API REST", "bg-danger")
            console.log(error)
        })
    }
}

function deletePotter() 
{
    let id = document.getElementById("_id").value;

    if (id != ""){

        id= String(id);
        let professional = new Professional ("","","","","","","","","","","","","", id);
        
        const url = "http://localhost:5000/professional";

        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(professional),
                method: "DELETE"
            }
    
        fetch(url, param)
        .then(function(data)
        {
            return data.json()
        })
        .then(function(result)
        {
            if (!result.error){
                showToast("Mago/Criatura eliminada correctamente", "bg-success")
            }   
            else{
                showToast("El ID no existe", "bg-danger")
            }    
        })
        .catch(function(error)
        {
            console.log(error)
        })
    } 
    else {
        showToast("Introduce un ID", "bg-danger")
    }
}

//////////

function validar(professional)
{
    resultado = false
    if (professional.name == "" || professional.name == "null")
    {
        showToast("AVISO: Campo nombre no informado", "bg-warning")
    }
    else if (professional.age == "" || professional.age == "null")
    {
        showToast("AVISO: Campo edad no informado", "bg-warning")
    }
    else if (professional.genre == "" || professional.genre == "null")
    {
        showToast("AVISO: Campo genero no informado", "bg-warning")
    }
    else if (professional.weight == "" || professional.weight == "null")
    {
        showToast("AVISO: Campo peso no informado", "bg-warning")
    }
    else if (professional.height == "" || professional.height == "null")
    {
        showToast("AVISO: Campo altura no informado", "bg-warning")
    }
    else if (professional.hairColor == "" || professional.hairColor == "null")
    {
        showToast("AVISO: Campo color de pelo no informado", "bg-warning")
    }
    else if (professional.eyeColor == "" || professional.eyeColor == "null")
    {
        showToast("AVISO: Campo color de ojos no informado", "bg-warning")
    }
    else if (professional.race == "" || professional.race == "null")
    {
        showToast("AVISO: Campo casa no informado", "bg-warning")
    }
    else if (professional.isRetired == "" || professional.isRetired == "null")
    {
        showToast("AVISO: Campo fallecimiento no informado", "bg-warning")
    }
    else if (professional.oscarsNumber == "" || professional.oscarsNumber == "null")
    {
        showToast("AVISO: Campo Orden de Merlín no informado", "bg-warning")
    }
    else if (professional.profession == "" || professional.profession == "null")
    {
        showToast("AVISO: Campo profesión no informado", "bg-warning")
    }
    else if (professional.photo == "" || professional.photo == "null")
    {
        showToast("AVISO: Campo URL de foto no informado", "bg-warning")
    }
    else
        resultado = true

    return resultado;
}

function validarPut(professional)
{
    resultado = false
    if (professional._id == "" || professional._id == "null")
    {
        showToast("AVISO: Debe introducir un ID", "bg-warning")
    }
    else
        resultado = true

    return resultado;
}

function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement  = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}