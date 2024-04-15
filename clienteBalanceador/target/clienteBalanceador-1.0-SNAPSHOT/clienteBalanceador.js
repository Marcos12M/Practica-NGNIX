/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

const balancerURL = 'http://localhost/'; // Cambia la URL si NGINX no está escuchando en el puerto 80

function sendRequest() {
    const options = {
        method: 'GET'
    };

    fetch(balancerURL, options)
        .then(response => {
            console.log(`StatusCode: ${response.status}`);
        })
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
        });
}

setInterval(sendRequest, 5000); // Envía una solicitud cada 5 segundos


