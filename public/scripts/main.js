export default function sendId(){
    const id = document.getElementById("#btn")
    
    return window.localStorage.setItem('imob', 'id')

}