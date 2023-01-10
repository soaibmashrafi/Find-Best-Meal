const loadMeal = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals));
}
const displayMeal = meals => {
    
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML =``;
    for(const meal of meals){
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
                    
                    <div class="card h-100">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${meal.strMeal}</h5>
                                <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
                            </div>
                    </div>
        `;
        mealContainer.appendChild(mealDiv);
    }
}

const searchFood =() =>{
    
    const searchItem = document.getElementById('searchField');
    const searchValue = searchItem.value;
    loadMeal(searchValue);
    // console.log('Searching', searchValue);
    searchItem.value = '';
}  
loadMeal('a');