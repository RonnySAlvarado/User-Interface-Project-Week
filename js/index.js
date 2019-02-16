// JS goes here
      
class Dropdown {
    constructor(element) {
      this.element = element;
      this.button = this.element.querySelector('img'); //hamburger img
      this.content = this.element.querySelector('.dropdown-content'); //all of the dropdown links
      this.links = this.element.querySelectorAll('.dropdown-links'); //all links in navigation in case I need to use them later on
      this.button.addEventListener('click', () =>  {
        this.toggleContent();
      });
    }
    toggleContent() {
        this.content.classList.toggle('dropdown-hidden');

        if (this.button.getAttribute("src") === "img/nav-hamburger-close.png"){
            this.button.setAttribute("src", "img/nav-hamburger.png");
        }
        else this.button.setAttribute("src", "img/nav-hamburger-close.png");

        this.element.classList.toggle('header-container-expanded');
    }
  }
  let dropdowns = document.querySelectorAll('.header-container').forEach( dropdown => new Dropdown(dropdown));

/*------------------------------------------------------------------------------------------------------*/

  class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      this.tabItem = new TabItem(this.itemElement);
      this.element.addEventListener('click', () => this.select());
    };
    select() {
      const links = document.querySelectorAll('.tabs-link');
      links.forEach(link => link.classList.remove('tabs-link-selected'));
      this.element.classList.add('tabs-link-selected');
      this.tabItem.select();
    }
  }

  /*------------------------------------------------------------------------------------------------------*/
  class TabItem {
    constructor(element) {
      this.element = element;
    }
    select() {
      const items = document.querySelectorAll('.tabs-item');
      items.forEach(item => item.classList.remove('tabs-item-selected'));
      this.element.classList.add('tabs-item-selected');
    }
  }

  links = document.querySelectorAll('.tabs-link').forEach( link => new TabLink(link));