import Main from "./views/Main.js";
import SavedRecipes from "./views/SavedRecipes.js";
import AddRecipe from "./views/AddRecipe.js";
import Salads from "./views/Salads.js";
import Soups from "./views/Soups.js";
import SecondCourse from "./views/SecondCourse.js";
import Drinks from "./views/Drinks.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        {path: '/', view: Main},
        {path: '/my-recipes', view: SavedRecipes},
        {path: '/add', view: AddRecipe},
        {path: '/salads', view: Salads},
        {path: '/soups', view: Soups},
        {path: '/main-course', view: SecondCourse},
        {path: '/drinks', view: Drinks},
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });
    let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);

    if(!match){
        match = {
            route: routes[0],
            isMatch: true
        }
    }
    const view = new match.route.view();
    document.getElementById('container').innerHTML = await view.getHtml();
}

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    router();
})
document.addEventListener('click', e => {
    const link = e.target.dataset.item;
    if(link == 'link'){
        e.preventDefault();
        navigateTo(e.target.href);
    }
});