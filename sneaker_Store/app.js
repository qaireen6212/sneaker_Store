const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 219,
        colour: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",   
            },
        ],
    },
    {
        id: 2,
        title: "Jordan",
        price: 179,
        colour: [
            {
                code: "light gray",
                img: "./img/Product/jordan.png",
            },
            {
                code: "green",
                img: "./img/Product/jordan2.png",  
            },
            ],
    },
    {
        id: 3, 
        title:"Blazer",
        price: 149,
    colour: [
        {
            code: "light gray",
            img: "./img/Product/blazer.png",
        },
        {
            code: "green",
            img: "./img/Product/blazer2.png",   
        },
    ]
},
{


    id: 4,
    title: "Carter",
    price: 190,
    colour: [
        {
            code: "black",
            img: "./img/Prodcut/carter.png",
        },
        {
            code: "light gray",
            img: "./img/Product/carter2.png",   
        },
    ],
},
{
    id: 5,
    title: "Hippie",
    price: 135,
    colour: [
        {
            code: "gray",
            img: "./img/Product/hippie.png",
        },
        {
            code: "black",
            img: "./img/Product/hippie2.png",   
        },
    ],
 }
]

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColours = document.querySelector(".colours");
const currentProductSizes = document.querySelector(".size");


menuItems. forEach((item,index) => {
    item.addEventListener("click",() => {
        //change the current slide 
        wrapper.style.transform = 'translateX(${-100 * index}vw)';

        //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});