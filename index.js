const bottom = document.getElementById("bottom")
const input = document.getElementById("input")

async function myfunction(){
    let search = input.value;
    console.log(search)
    bottom.innerHTML=""
    const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    const data = await resp.json()
    console.log(data.meals)
    data.meals.map ((ele)=>{
        var img = ele.strMealThumb
        bottom.innerHTML+=`  <div class="inner">
        <img src="${img}" alt="">
    </div>
        `
    }) 
}
