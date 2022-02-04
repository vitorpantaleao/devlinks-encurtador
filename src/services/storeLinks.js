// Busca links salvos
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || []

    return linksSaves
}

// Salva link no localStorage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key)

    // Se já existir link nao deixa duplicar
    const hasLink = linksStored.some( link => link.id === newLink.id)

    if(hasLink){
        console.log('link já existe')
        return
    }

    // adiciona o novo link na lista
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('link salvo com sucesso')
}

// Deleta link
export function deleteLink(links, id){
    let myLinks = links.filter( item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
    // alert('Link ' + id + ' deletado com sucesso!')

    return myLinks
}