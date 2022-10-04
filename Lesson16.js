//1)
function day (ms,str) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (str)
        }, ms);
    })
}

const shedul = async () =>{
    try {
        const wakeup = await day(1000, 'Подъем')
        console.log(wakeup)
        const charger = await day(2000, 'Зарядка')
        console.log(charger)
        const work = await day(1000, 'Работа')
        console.log(work)
        const relax = await day(1000, 'Отдых')
        console.log(relax)
    } catch (error) {
        console.log('Ошибка', error)
    }
    
}
shedul()


//2)
//1вариант
function generationRandom(min, max) {
    let a = [];
    for(let i =0; i<10; i++){
        let b =  Math.round(min + Math.random() * (max - min));
        a.push(b)
    }
    return a
}
console.log(generationRandom(10,30))


//2вариант
function* generationRandom2(min, max) {
    for(let i =0; i<10; i++){
        yield Math.round(min + Math.random() * (max - min));
        
    }
}
for (let i of generationRandom2(10,30)){
    console.log(i)
}





