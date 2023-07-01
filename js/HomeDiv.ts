class HomeDiv{

    private homeDiv:HTMLDivElement;
    private carouselDiv:HTMLDivElement;
    private carouselIndicators:HTMLOListElement;
    private li1:HTMLLIElement;
    private li2:HTMLLIElement;
    private li3:HTMLLIElement;
    private carouselInner:HTMLDivElement;
    private carouselItemActive:HTMLDivElement;
    private carouselItem1:HTMLDivElement;
    private carouselItem2:HTMLDivElement;
    private image1:HTMLImageElement;
    private image2:HTMLImageElement;
    private image3:HTMLImageElement;
    private bodyDiv:HTMLDivElement;

    constructor() {
        this.bodyDiv = document.querySelector("#bodyDiv") as HTMLDivElement;

        let homeDiv = document.createElement("div");
        homeDiv.className = "container-fluid";
        homeDiv.id = "homeDiv";
        homeDiv.style.marginTop = "100px";
        this.homeDiv = homeDiv;

        let carouselDiv = document.createElement("div");
        carouselDiv.id = "carouselExampleIndicators1";
        carouselDiv.className = "alert-danger";
        carouselDiv.setAttribute("data-ride", "carousel");
        carouselDiv.style.backgroundColor = "grey";
        this.carouselDiv = carouselDiv;

        let carouselIndicators = document.createElement("ol");
        carouselIndicators.className = "carousel-indicators";
        this.carouselIndicators = carouselIndicators;

        let li1 = document.createElement("li");
        li1.setAttribute("data-target", "#carouselExampleIndicators1");
        li1.setAttribute("data-slide-to", "0");
        li1.className = "active";
        this.li1 = li1;

        let li2 = document.createElement("li");
        li2.setAttribute("data-target", "#carouselExampleIndicators1");
        li2.setAttribute("data-slide-to", "1");
        this.li2 = li2;

        let li3 = document.createElement("li");
        li3.setAttribute("data-target", "#carouselExampleIndicators1");
        li3.setAttribute("data-slide-to", "2");
        this.li3 = li3;

        let carouselInner = document.createElement("div");
        carouselInner.className = "carousel-inner";
        carouselInner.setAttribute("role", "listbox");
        this.carouselInner = carouselInner;

        let carouselItemActive = document.createElement("div");
        carouselItemActive.className = "carousel-item active";
        this.carouselItemActive = carouselItemActive;

        let carouselItem1 = document.createElement("div");
        carouselItem1.className = "carousel-item";
        this.carouselItem1 = carouselItem1;

        let carouselItem2 = document.createElement("div");
        carouselItem2.className = "carousel-item";
        this.carouselItem2 = carouselItem2;

        let image1 = document.createElement("img");
        image1.className = "d-block mx-auto";
        image1.alt = "First slide";
        image1.src = "images/Carousel_Placeholder.png";
        this.image1 = image1;

        let image2 = document.createElement("img");
        image2.className = "d-block mx-auto";
        image2.alt = "Second slide";
        image2.src = "images/Carousel_Placeholder.png";
        this.image2 = image2;

        let image3 = document.createElement("img");
        image3.className = "d-block mx-auto";
        image3.alt = "Third slide";
        image3.src = "images/Carousel_Placeholder.png";
        this.image3 = image3;

    }

    arrange():void{
        this.carouselIndicators.appendChild(this.li1);
        this.carouselIndicators.appendChild(this.li2);
        this.carouselIndicators.appendChild(this.li3);

        this.carouselItemActive.appendChild(this.image1);
        this.carouselItem1.appendChild(this.image2);
        this.carouselItem2.appendChild(this.image3);

        this.carouselInner.appendChild(this.carouselItemActive);
        this.carouselInner.appendChild(this.carouselItem1);
        this.carouselInner.appendChild(this.carouselItem2);

        this.carouselDiv.appendChild(this.carouselIndicators);
        this.carouselDiv.appendChild(this.carouselInner);

        this.homeDiv.appendChild(this.carouselDiv);
    }
}

function controller(){

    let loginButton = document.getElementById("loginButton") as HTMLButtonElement;
    loginButton.addEventListener("click", () => {
        let dd = new HomeDiv();
        dd.arrange();
    });
    let dd = new HomeDiv();
    dd.arrange();
}
