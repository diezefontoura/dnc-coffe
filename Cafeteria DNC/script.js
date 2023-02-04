const pedido = document.querySelector("#botao")
const modal = document.querySelector("dialog")
const pedidofechar =document.querySelector("dialog #button")

botao.onclick = function () {
    modal.showModal()
}

pedidofechar.onclick = function () {
    modal.close()
}