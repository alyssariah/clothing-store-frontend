# Simply Basic Clothing Store
This project is a mock up of a clothing store. It has a navigation bar with a drop down menu for items in the store and a search bar. It also has a login option and a shopping cart above the navigation bar. The welcome page features popular items and a user can click on a category in the navbar to be redirected to that page. When a user clicks on an item, they are redirected to a page that displays full item details and an option to add it to their cart. The shopping cart displays all the added items and provides the option to checkout. When a user logs in, they can see their previous orders and the items they saved in their cart. This project is made with a React frontend and a Django backend with PostgreSQL.

## Deployment
-Deployment of frontend to netlify: https://clothingstore-simplybasic.netlify.app/
-Deployment of backend to heroku: https://alyssariah-clothing-store.herokuapp.com/

## Motivation
I want to freelance and have templates and examples I can show clients. This projects is obviously not a real clothing store but a mock up to show clients the design and functionality of the site. 

## Code Style
-For the backend I used Python in Django
-For the frontend I used JSX in React with MDBootstrap 

## Screenshot
![Preview of Project](Screenshot.png "Preview of Project")

## Tech/framework used
-React
-MDBootstrap
-Python
-Django
-PostgreSQL


## Features
Search bar:  A user can type in a word into the search field and the backend will search through the titles and categories to find a matching word. The frontend then will display those products that have the matching term.

Add to cart: When a user adds an item to their cart, a popup shows that they have added an item to their cart. They have an option to view their cart or the popup will timeout in 3 seconds.

Shopping cart functionality: A user can edit the quantity of the products in their shopping cart, which also automatically updates price. A user can also delete and item from the cart and a number near the cart icon keeps track of how many items are in the cart.

## Code Example 
Javascript for adding item to cart on the front end
```
const addToCart = async() => {
        if(!props.user){
            setAlert(true)
        }
        else {
            await makeCartItem(input, props.user.token)
            props.updateCart()
            setViewCart(true)
            setTimeout(() => setViewCart(false), 3000)
        }
    }
```
Python for Order model on the backend

```
class Order(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    items = models.ManyToManyField(CartItem)
    created_at = models.DateTimeField(auto_now_add=True)
    total = models.IntegerField(default=0)
```

## How to use?
Login or create your own account on the site. You can then checkout the links under your account tab(profile and orders).
Treat the website like a normal clothing store website. Shop around, view different types of clothing, pick your sizes and quantities, and add to your cart. 

## Contribute 
Here are some following guidelines to contribute to Simply Basic. Fork and clone and run npm install. 

### Write detailed information
Detailed information is very helpful to understand an issue.

For example:
* How to reproduce the issue, step-by-step.
* The expected behavior (or what is wrong).
* Screenshots for issues.
* The application version.
* The operating system.


### Pull Requests
Pull Requests are always welcome. 

1. When you edit the code, please run `npm run test` to check the formatting of your code before you `git commit`.
2. Ensure the PR description clearly describes the problem and solution.


## License

Simply Basic © Alyssa Jackson

