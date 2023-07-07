function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    //pegar a tag img
   const img = document.querySelector("#profile img")
    
    // substituir a imagen 
    if(html.classList.contains('light')) {
        // se tiver mode, adicionar a imagem light
        img.setAttribute('src', "/assets/avatar2.png")
    } else {
        // se tiver sem light mode, manter a imagen normal
        img.setAttribute('src', "https://github.com/SjuniorDev.png")
    }
    
}