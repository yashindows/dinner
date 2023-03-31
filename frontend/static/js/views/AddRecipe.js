import TemplateView from "./TemplateView.js";

export default class extends TemplateView {
    constructor(){
        super();
        this.setTitle('Добавление рецепта');
    }

    async getHtml(){
        return `<div class="form">
                    <h2 class="add__title">Добавление рецепта</h2>
                    <input type="text" class="add__field" placeholder="Название"/>
                    <input type="text" class="add__field" placeholder="Ингредиенты"/>
                    <input type="text" class="add__field" placeholder="Тип"/>
                    <input type="text" class="add__field" placeholder="Вид обработки блюда, время готовки"/>
                    <div class="btns">
                    <input type="file" id="file"/>
                    <label for="file" class="add-img__field">
                        <img src="./static/img/icons/upload.svg"/>
                        <p>Загрузить изображение</p>
                    </label>
                        <input type="submit" class="btn" value="Отправить рецепт"/>
                    </div>
                </div>`;
    }
}