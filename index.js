const cart = []; //tableau pour rentrer les trajets pas encore payés
const bookings =[] //tableau pour rentrer les trajets payés




// apres pas sure 

document.querySelector('#btn-search').addEventListener('click', function formCompleted (){ // fonction pour vérifier que tous les champs sont ok
    let departure = document.querySelector("#departure").value;
    let arrival = document.querySelector("#arrival").value;
    let date = document.querySelector("#date").value;

    if (departure && arrival && date){
        fetchTrips(departure, arrival, date)
        // document.querySelector('#right').innerHTML =`
        // <div id="notfound">
        // <img class="notfoundimage" src="notfound.png" />
        // <p id="message"> Not found</p>` // faire truc avec toutes les infos 
    } else {
        document.querySelector('#right').innerHTML =`
<div id="formnotcomp">
          <img class="notfoundimage" src="notfound.png" />
          <p id="messageformnotcomp">REMPLIS LE FORMULAIRE CORRECTEMENT!!</p>`
    }
})

function fetchTrips(departure, arrival, date) {
    console.log(JSON.stringify({
            departure, arrival, date
        }))
    fetch('http://localhost:3000/trip', {
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
            departure, arrival, date
        })
    }).then(response=>{
        if(!response.ok) {
            // throw new Error('Une erreur s\'est produite lors de la récupération des trajets.');
        }return response.json();
    }).then(data=>{handleTripResults(data)})
}

function handleTripResults(data){
    let message = document.querySelector('#right')
    console.log(data)
    if (data.allTrips.length>0){
        message.innerHTML = '<div class="voyagestrain">';
        data.allTrips.forEach(trip=>{
            message.innerHTML += `<div class="voyage">
            ${trip.departure}>${trip.arrival} ${trip.date} :  ${trip.price}€
            </div> 
            <button class="addtocart">Book</>`
        })
        message.innerHTML += `</div>`;
    }
}
// `
// <div class="row new-row">
//           <img class="avatar" src="images/avatar-2.jpg" />
//           <div class="text-container">
//             <h6>Lo La</h6>
//             <p>
//               ${message}
//             </p>
//           </div>
//           <span class="delete">✖</span>`
//       counter();
//       document.querySelector('#add-message').value="";
//       for (let i = 0; i < document.querySelectorAll('.delete').length; i++) {
//         document.querySelectorAll('.delete')[i].addEventListener('click',
//           function () {
//             this.parentElement.remove();
//             counter();
//           }
//         );
//        }
//     }
// fetch('route/vers/le/back', {
//     method: 'Post',
//     body: JSON.stringify()
// }).then (response => response.json())
// .then (data => resultats(data))

// function resultats (data){
//     let message = document.querySelector("#right")
//     if (data.length>0){ 
//         message.innerHTML+="trajets ok tous les trajets s'affichent"
//     } else {message.innerHTML+="pas de trajet trouvé"}
// }


//CHRIS//

// Récupérer tous les trajets
// fetch('../trips')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Une erreur s\'est produite lors de la récupération des trajets.');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Tous les trajets :', data);
//     // Utilisez les données récupérées pour afficher les trajets sur votre page
//   })
//   .catch(error => {
//     console.error('Erreur :', error.message);
//   });

// // Rechercher des trajets disponibles pour aujourd'hui
// fetch('../trips', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     departure: 'Paris',
//     arrival: 'Lyon'
//   })
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Une erreur s\'est produite lors de la recherche des trajets.');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Trajets disponibles pour aujourd\'hui :', data);
//     // Utilisez les données récupérées pour afficher les trajets disponibles sur votre page
//   })
//   .catch(error => {
//     console.error('Erreur :', error.message);
//   });