class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("h1");
        linkTitle.textContent = this.getAttribute("title");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/foto_default.png";
        newsImage.alt = this.getAttribute("descricao") || "imagem default";
        cardRight.appendChild(newsImage);
        
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot;
    }

    styles(){
        const styles = document.createElement("style");
        styles.textContent = `
            .card{
                width: 720px;
                display: flex;
                flex-direction: row;
                padding: 1px 1px 0 10px;
                margin-left: auto;
                margin-right: auto; 
                box-shadow: 8px 10px 13px -4px rgba(0,0,0,0.75);
                -webkit-box-shadow: 8px 10px 13px -4px rgba(0,0,0,0.75);
                -moz-box-shadow: 8px 10px 13px -4px rgba(0,0,0,0.75);
            }

            .card__left{
                display: flex;
                flex-direction: column;
                justify-content: center;  
            }

            .card__left > span{
            padding-bottom: 10px; 
            }

            .card__right > img{
                max-width: 20rem;
                max-height: 20rem;
                width: 100%;
                height: 99%;
            }
        `
        return styles;
    }
}

customElements.define('card-news', CardNews);

