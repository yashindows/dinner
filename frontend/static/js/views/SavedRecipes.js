import TemplateView from "./TemplateView.js";

export default class extends TemplateView {
    constructor(){
        super();
        this.setTitle('Мои рецепты');
    }

    async getHtml(){
        return `<h1>Сохраненные рецепты</h1>`;
    }
}