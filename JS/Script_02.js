//Programacion de beneficios
const tabs2 = document.querySelectorAll('.tab-2')
const panels2 = document.querySelectorAll('.panelN2')

tabs2.forEach((tab2)=> tab2.addEventListener('click', onTabClick) )

function onTabClick(e){
    //Desactivate all tabs
    tabs2.forEach((tab2)=>{
        tab2.children[0].classList.remove(
            'border-Naranaja',
            'border-b-4',
            'lg:border-b-0'
        )
    })
    //Hide all panels
    panels2.forEach((panel2 => panel2.classList.add('hidden') ))

    //Activate a new tab and apnel based on the target
    e.target.classList.add('border-Naranaja', 'border-b-4')

    const classString = e.target.getAttribute('data-target')
    document.getElementById('panels-2')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden')

}