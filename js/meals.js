const  loadMeals = (search) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals =>{
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = ` `;
    meals.forEach(meal => {
        console.log(meal)
        const mealsDiv = document.createElement('div');
        mealsDiv.classList.add('col');
        mealsDiv.innerHTML= `

                  <div class="card">
                        <img src=" ${meal.strMealThumb} " class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title"> ${meal.strMeal} </h5>
                        <p class="card-text"> ${meal.strInstructions.slice(0, 200)} </p>
                        </div>
                  </div>

        
        `;
        mealsContainer.appendChild(mealsDiv);
    });
}

const searchFood = () =>{
    const serchField = document.getElementById('search-field');
    const serchText = serchField.value;
    loadMeals(serchText);
    serchField.value = '';
}

// loadMeals();