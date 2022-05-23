//// Products Page ==>> Product Details Page 
const detailPageDirector = () => {
    window.location.assign("./productDetail.html")
}

//// Categories Page ==>> Products Page 
const productPageDirector = () => {
    window.location.assign("./products.html")
}

//// Edit Bio
const editToSave = (e) => {
    console.log(e.innerHTML)
    if(e.innerHTML == "EDIT") {
        e.innerHTML = "SAVE"
        e.previousElementSibling.disabled = false
        e.previousElementSibling.className += " activeInput"
    }
    else {
        e.innerHTML = "EDIT"
        e.previousElementSibling.disabled = true
        e.previousElementSibling.classList.remove("activeInput")     
    }
}
