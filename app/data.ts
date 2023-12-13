export type Product = {
    id: number;
    title: string;
    type: string;
    desc: string;
    img: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
    {
        "id": 1,
        "title": "Cantonese Fried Rice",
        "type": "Main Dish",
        "desc": "A symphony of flavors with a mix of fresh vegetables, juicy pork, tender beef, and a special mix of BBQ pork and delicate shrimps, all interwoven into our Cantonese fried rice.",
        "img": "/img/cantonese_fried_rice.png",
        "price": 18.5,
        "options": [
            {
                "title": "Regular",
                "additionalPrice": 0
            },
            {
                "title": "With Extra Toppings",
                "additionalPrice": 3
            }
        ]
    },
    {
        "id": 2,
        "title": "Cantonese Rice Bowl",
        "type": "Main Dish",
        "desc": "Experience the rich culinary heritage with our Cantonese Rice Bowl, offering a choice of exquisite toppings to cater to your taste.",
        "img": "/img/cantonese_rice_bowl.png",
        "price": 16.0,
        "options": [
            {
                "title": "Vegetarian",
                "additionalPrice": 0
            },
            {
                "title": "With Meat",
                "additionalPrice": 4
            }
        ]
    },
    {
        "id": 3,
        "title": "Braised Pork Belly",
        "type": "Side Dish",
        "desc": "Indulge in the deep umami flavor of our slowly stewed Braised Pork Belly, prepared with a secret recipe for maximum tenderness.",
        "img": "/img/braised_pork_belly.png",
        "price": 22.0,
        "options": [
            {
                "title": "Regular",
                "additionalPrice": 0
            },
            {
                "title": "Extra Sauce",
                "additionalPrice": 2
            }
        ]
    },
    {
        "id": 4,
        "title": "Sweet and Sour Pork",
        "type": "Side Dish",
        "desc": "A perfect blend of sweet and sour, our dish features tender pork drenched in a vibrant sauce, tantalizing your taste buds.",
        "img": "/img/sweet_sour_pork.png",
        "price": 19.5,
        "options": [
            {
                "title": "Regular",
                "additionalPrice": 0
            },
            {
                "title": "Extra Pork",
                "additionalPrice": 3
            }
        ]
    },
    {
        "id": 5,
        "title": "Char Siu",
        "type": "Side Dish",
        "desc": "Savor the unique taste of our Char Siu with its subtle smoky flavor and sweet and spicy glaze, a true feast for the palate.",
        "img": "/img/char_siu.png",
        "price": 21.0,
        "options": [
            {
                "title": "Regular",
                "additionalPrice": 0
            },
            {
                "title": "With Extra Glaze",
                "additionalPrice": 2.5
            }
        ]
    }
]
