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


/*              <div class="tabs-container">
						<div class="tabs-link tabs-link-selected" data-tab="1">Pre-Construction</div>
						<div class="tabs-link" data-tab="2">Construction</div>
						<div class="tabs-link" data-tab="3">Design Build</div>
						<div class="tabs-link" data-tab="4">Sustainability</div>
                </div> */
                

  class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.tabsContentLeft = document.querySelector(`.tabs-content-left[data-tab="${this.data}"]`);
      this.tabsContentRight = document.querySelector(`.tabs-content-right[data-tab="${this.data}"]`);
      this.tabItem = new TabItem(this.tabsContentLeft, this.tabsContentRight);
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
    constructor(tabsContentLeft, tabsContentRight) {
      this.tabsContentLeft = tabsContentLeft;
      this.tabsContentRight = tabsContentRight;
    }
    select() {
      const leftContent = document.querySelectorAll('.tabs-content-left');
      const rightContent = document.querySelectorAll('.tabs-content-right');
      leftContent.forEach(item => item.classList.remove('tabs-content-selected'));
      rightContent.forEach(item => item.classList.remove('tabs-content-selected'));
      this.tabsContentLeft.classList.add('tabs-content-selected');
      this.tabsContentRight.classList.add('tabs-content-selected');
    }
  }

  links = document.querySelectorAll('.tabs-link').forEach( link => new TabLink(link));