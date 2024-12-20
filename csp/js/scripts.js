document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profile-form');
    const mealForm = document.getElementById('meal-form');
    const mealList = document.getElementById('meal-list');
    const caloriesConsumed = document.getElementById('calories-consumed');
    const recommendationList = document.getElementById('recommendation-list');

    let totalCalories = 0;
    let userProfile = {};

    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        userProfile = {
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value,
            height: document.getElementById('height').value,
            weight: document.getElementById('weight').value,
            activityLevel: document.getElementById('activity-level').value,
        };
        alert('Profile saved!');
        displayRecommendations();
    });

    mealForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const foodItem = document.getElementById('food-item').value;
        const calories = document.getElementById('calories').value;

        const listItem = document.createElement('li');
        listItem.textContent = `${foodItem} - ${calories} calories`;
        mealList.appendChild(listItem);

        totalCalories += parseInt(calories);
        caloriesConsumed.textContent = `Calories Consumed: ${totalCalories}`;

        mealForm.reset();
    });

    function displayRecommendations() {
        recommendationList.innerHTML = '';
        // Example logic for generating recommendations
        if (userProfile.activityLevel === 'sedentary') {
            recommendationList.innerHTML = '<p>Try to be more active, aim for at least 30 minutes of exercise daily.</p>';
        } else if (userProfile.activityLevel === 'active') {
            recommendationList.innerHTML = '<p>Keep up the good work! Maintain a balanced diet to support your activity level.</p>';
        } else {
            recommendationList.innerHTML = '<p>Maintain a balanced diet and stay consistent with your activity level.</p>';
        }
    }
});
