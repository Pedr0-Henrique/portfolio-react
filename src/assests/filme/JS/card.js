function showDetails(card) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var modalInfo = document.getElementById("modal-info");

    var imgSrc = card.querySelector("img").src;
    var cardTitle = card.querySelector(".info h2").textContent;
    var cardDetails = card.querySelector(".info p").textContent; // Selecionar o texto dentro da tag <p>

    modal.style.display = "flex";
    modalImg.src = imgSrc;
    modalInfo.innerHTML = `<h2>${cardTitle}</h2><p>${cardDetails}</p>`;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}


