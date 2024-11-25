function goCompletadas() {
    document.getElementById('cartas_matriculadas').classList.add('d-none')
    
    const ctn1 = document.getElementById('ctn_1')
    ctn1.style.backgroundColor = ""
    ctn1.style.backgroundColor = "#e1e9c0"
}

function goMatriculadas(){
    document.getElementById('cartas_matriculadas').classList.remove('d-none')

    const ctn1 = document.getElementById('ctn_1')
    ctn1.style.backgroundColor = ""
    ctn1.style.backgroundColor = "#c1d47a"
}