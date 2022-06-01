/*

Per la pagina ‘Chi siamo’ del nostro sito aziendale, dobbiamo 
sviluppare la sezione “Il nostro team”.
Definiamo un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card: 
Nome, Ruolo e Foto.
Milestone 1:
stampare in console l’elenco dei membri del team, scrivendo separatamente
i dettagli di ciascun componente.
Milestone 2:
stampare i dati all’interno di un contenitore nella pagina html
in modo dinamico, creando per ciascun membro del team un elemento html
che conterrà i suoi dati.

*/

// creo l'array con i membri del team
const ourTeam = [
    {
        name: "Pippo Volandri",
        position: "Founder & CEO",
        photo: "img/wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Pluto Aldair",
        position: "office manager",
        photo: "img/walter-gordon-office-manager.jpg"
    },

    {
        name: "Minni Ramos",
        position: "Graphic Designer",
        photo: "img/barbara-ramos-graphic-designer.jpg"
    },

    {
        name: "Paolo Maldini",
        position: "Developer",
        photo: "img/scott-estrada-developer.jpg"
    },

    {
        name: "Feliciana Lopez",
        position: "Social Media Manager",
        photo: "img/angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Andy Carroll",
        position: "Chief Editor",
        photo: "img/angela-caroll-chief-editor.jpg"
    },
]

// stampo in console l'elenco dei membri con il relativo ruolo
for (let i = 0; i < ourTeam.length; i++) {
    console.log(ourTeam[i].name + " - " + ourTeam[i].position);
}

// prendo il container html su cui stamperò la lista dei membri
const teamContainer = document.querySelector(".team-container");


// ciclo nell'array per stampare ogni membro nell'html
for (let j = 0; j < ourTeam.length; j++) {
    teamContainer.innerHTML += `
                                <div class="team-card">
                                    <div class="card-image">
                                    <img 
                                        src="${ourTeam[j].photo}"
                                        
                                    />
                                    </div>
                                    <div class="card-text">
                                    <h3>${ourTeam[j].name}</h3>
                                    <p>${ourTeam[j].position}</p>
                                    </div>
                                </div>
                                `
}