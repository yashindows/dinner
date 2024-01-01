import TemplateView from './TemplateView.js'

export default class extends TemplateView {
  constructor() {
    super()
    this.setTitle('Главная')
  }

  async getHtml() {
    return `<div class="recipe-card-wrapper">
                <div class="recipe-card">
                    <a data-item="link" href="/soups" class="recipe-forward"></a>
                    <img class="recipe-img" src="./static/img/icons/soup.png"/>
                    <div class="recipe__title">
                        Супы
                    </div>
                </div>
                <div class="recipe-card">
                    <a data-item="link" href="/salads" class="recipe-forward"></a>
                    <img class="recipe-img" src="./static/img/icons/salad.png"'/>
                    <div class="recipe__title">
                        Салаты
                    </div>
                </div>
                <div class="recipe-card">
                    <a data-item="link" href="/main-course" class="recipe-forward"></a>
                    <img class="recipe-img" src="./static/img/icons/mainCourse.png"/>
                    <div class="recipe__title">
                        Вторые блюда
                    </div>
                </div>
                <div class="recipe-card">
                    <a data-item="link" href="/drinks" class="recipe-forward"></a>
                    <img class="recipe-img" src="./static/img/icons/drink.png"/>
                    <div class="recipe__title">
                        Напитки
                    </div>
                </div>
            </div>`
  }
}
