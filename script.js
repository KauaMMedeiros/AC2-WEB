
function addProduct() {
  const productTitle = document.getElementById("productTitle").value;
  if (!productTitle) return;

  // URL de imagem única usando um ID aleatório da API Picsum
  const imageUrl = `https://picsum.photos/seed/${Math.random()}/300/200`;

  const card = document.createElement("div");
  card.className = "card m-3 product-card";
  card.style.width = "18rem";
  card.innerHTML = `
      <img src="${imageUrl}" class="card-img-top" alt="Produto">
      <div class="card-body">
          <h5 class="card-title">${productTitle}</h5>
          <button class="btn btn-danger" onclick="deleteProduct(this)">Apagar</button>
      </div>
  `;

  document.getElementById("productCards").appendChild(card);
  document.getElementById("productTitle").value = "";
}

function deleteProduct(button) {
  button.closest(".card").remove();
}

function deleteAll() {
  document.getElementById("productCards").innerHTML = "";
}
