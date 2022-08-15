

window.onload = main ;

function main(){

    let add = document.getElementById('add')

    add.addEventListener('click',function(){
        let input = document.getElementById('input').value
        let demo = document.getElementById('demo')

        let p = document.createElement('p')
        p.innerHTML = input
        p.style.fontSize = '16px'
        p.classList.add('flex')

        let r = document.createElement('h2')
        r.innerHTML = '-'
        r.style.color = '#FF725E'
        p.appendChild(r)
        demo.appendChild(p)
        

        r.addEventListener('click',function(){
            p.innerHTML = ''
        })
    })

    

}