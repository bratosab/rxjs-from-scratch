export function print(value) {
    const element = document.createElement('p')
    element.innerText = value
    document.getElementById("main").append(element)
}