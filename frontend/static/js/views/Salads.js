import TemplateView from './TemplateView.js'

export default class extends TemplateView {
  constructor() {
    super()
    this.setTitle('Салаты')
  }

  async getHtml() {
    return `<div class="recipe-card-wrapper">
                    <div class="recipe-card">
                        <a data-item="link" href="/" class="recipe-forward"></a>
                        <button data-action="save" class="recipe-save">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Heart_01"> <path id="Vector" d="M12 7.69431C10 2.99988 3 3.49988 3 9.49991C3 15.4999 12 20.5001 12 20.5001C12 20.5001 21 15.4999 21 9.49991C21 3.49988 14 2.99988 12 7.69431Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                        </button>
                        <img class="recipe-img"/>
                        <div class="recipe__title">
                            Название блюда
                        </div>
                    </div>
                </div>`
  }
}
