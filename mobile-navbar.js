class MobileNavbar{
    constructor(mobileMenu,navLists,navLinks){
        this.mobileMenu=document.querySelector(mobileMenu);
        this.navList=document.querySelector(navLists);
        this.navLink=document.querySelector(navLinks);
        this.activateClass="active";

        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.navList.classList.toggle(this.activateClass);
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click",this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }


}

const mobileNavbar= new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();
