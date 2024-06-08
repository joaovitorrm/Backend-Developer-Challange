import axios from "axios"
import { JSDOM } from "jsdom"

// Asynchronous function that makes a request to amazon using axios with a string interpolation
export async function getAmazonResultsWithKeyword(keyword) {
    // Using try and catch to get errors printed out
    try {
        const response = await axios.get(`https://www.amazon.com/s?k=${keyword}`);
        // Return only the data of the response
        return response.data;
    } catch (err) {
        console.error(err);
    }
}

// Function that receives a html data and use JSDOM to make it easier to select specific elements
export function getElementsWithJSDOM(data) {
    const dom = new JSDOM(data).window.document;
    const itens = dom.querySelectorAll(".s-result-item");
    
    let elements = {};
    // A loop for each element thas had the class "s-result-item" which are the ones that have products in it
    [...itens].forEach((el, id) => {
        // A queryselector is made with specific classes that are kinda unique for the products main elements
        // It is not perfect because sometimes it might have more than one element with the classes,
        // but it is not common, and when it happens the others variables usually are undefined
        elements[id] = {
            img: el.querySelector("img.s-image")?.getAttribute("src"),
            name: el.querySelector("span.a-text-normal.a-color-base")?.innerHTML,
            stars: el.querySelector("span.a-icon-alt")?.innerHTML,
            rating: el.querySelector("span.a-size-base.s-underline-text")?.innerHTML,
        }

        // Check if any value is empty and removes that object if it is
        if (!elements[id].img || !elements[id].name || !elements[id].stars || !elements[id].rating) {
            delete elements[id];
        }

    });

    return elements;
}