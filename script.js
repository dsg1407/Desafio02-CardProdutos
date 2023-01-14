function addToCart() {
  alert("Item adicionado ao carrinho!")
}

function handleImgCard() {
  const imgWrapper = document.getElementById("img-wrapper")
  const productImg = document.querySelector("#img-wrapper>img")
  const buttonImg = document.querySelector("#img-wrapper>button>img")

  if (imgWrapper.className === "active") {
    productImg.src = "./assets/imgs/chairImg.png"
    buttonImg.src = "./assets/imgs/360Vector.svg"
  } else {
    productImg.src = "./assets/imgs/chairGif.gif"
    buttonImg.src = "./assets/imgs/CloseVector.svg"
  }

  imgWrapper.classList.toggle("active")
}
