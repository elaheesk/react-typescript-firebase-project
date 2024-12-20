import { IFormData } from "./types";

export const homepageText = [
    { title: "Products Page", route: "/products", description: "Displays products fetched from an external API. You can add and remove products to the checkout list and update quantities dynamically." },
    { title: "Checkout Page", route: "/checkout", description: "Shows the products added to the cart. Demonstrates managing state across pages and saving data to Firebase." },
    { title: "User Reviews Page", route: "/reviews", description: "Log in to leave a review of the app or rank your favorite feature. See all user-submitted reviews and rankings in one place" },
    { title: "Contact Page", route: "/contact", description: "Fill out a contact form and send a message to me. Get real-time feedback on whether your message was successfully submitted." },
    { title: "", route: "", description: "Feel free to explore the app and see how it all works. This application is built with React, TypeScript, TailwindCSS, and Firebase." }
];
export const routes = [{ title: "Products", route: "/products" }, { title: "Checkout", route: "/checkout" }, { title: "User Reviews", route: "/reviews" }, { title: "Contact", route: "/contact" }]
export const avatarUrl = "https://media.geeksforgeeks.org/wp-content/uploads/20230426115225/computer-image-660.jpg";

export const externalLinks = [
    { title: "Linkedin", url: "https://www.linkedin.com/in/elahe-eskandari/", svgPath: "M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" },
    { title: "Github", url: "https://github.com/elaheesk?tab=repositories", svgPath: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" },
    { title: "Resume", url: "https://elahes-resume-react.web.app/", svgPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" },
]
export const homeAvatarUrl = "https://th.bing.com/th/id/OIP.Q77-MX7pzKrTpk3p18aTqQHaFQ?w=289&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7";
export const categoryOptions = ["beauty", "fragrances", "furniture", "groceries"];
export const sortParameters = [{ title: "Most popular", value: "popular" }, { title: "Lowest price", value: "priceAsc" }, { title: "Highest price", value: "priceDesc" }, { title: "Reset", value: "reset" }];

export const loginDescription: string[] = [
    "If you're a first-time user, please sign up with your email and password.",
    "If you don't want to create an account, you can log in anonymously.",
    "If you've already signed up, just log in with your email and password."];

export const loginOptions = [
    { title: "Sign Up", value: "signup", bgColor: "bg-gray-500" },
    { title: "Email Login", value: "login", bgColor: "bg-gray-500" }
]

export const ratingValues = [
    { title: "Add Rating", value: "" },
    { title: "1", value: "1" },
    { title: "2", value: "2" },
    { title: "3", value: "3" },
    { title: "4", value: "4" },
    { title: "5", value: "5" }
]
export const tableHeadTitles: string[] = [
    "Product Name",
    "Category",
    "Price",
    "Rating"];


export const emptyFormData: IFormData = {
    name: { value: "", hasError: false, touched: false, errorMessage: "" },
    email: { value: "", hasError: false, touched: false, errorMessage: "" },
    message: { value: "", hasError: false, touched: false, errorMessage: "" },
}

export const validations: Record<keyof IFormData, (value: string) => { isValid: boolean; error: string }> = {
    name: (value: string) => ({
        isValid: /^[0-9A-Za-z\s]{3,16}$/.test(value),
        error: "Enter a valid username",
    }),
    email: (value: string) => ({
        isValid: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(value),
        error: "Please enter a valid email",
    }),
    message: (value: string) => ({
        isValid: value.trim() !== "",
        error: "Please fill in the empty field",
    }),
};