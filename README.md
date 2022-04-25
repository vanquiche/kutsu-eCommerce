This project started off as an experiment in building a simple pattern in managing the global state of an app, and turned into an eCommerce mock site to represent a real world application. My goals for this project were simple: create a site that is fast and has a state that is accessible across the app, while also creating a great user-experience and a polished design.

check it out [here](https://kutsu-shop.netlify.app)

## Tech Stack

### Framework
I bootstrapped this project with create-react-app for quick start-up and deployment. For routing, I used React Router for easy implementation (even more so with the latest version 6) and performance. As for programming language I chose Typescript. TS requires a little work up-front, but the tooling and live validation pays massive dividends throughout development.

### State
The first problem to solve in the project was creating a data-model that could easily manage the state of a users’ shopping cart. This project was relatively simple and I wanted to avoid complexities like introducing a state management library like Redux. React’s context and reducer hooks were sufficient for this use case. React context allowed me to easily pass state across the app, while React reducer was used to set and update the state. This combination resulted in less code, better readability, and was easy to maintain, making me a happy programmer. For state persistence I continued with the theme of simplicity and used localStorage. I wholeheartedly believe that sometimes the simplest solution is the best solution.

### Money
The second problem to solve was performing the arithmetic operations on money and formatting it. When dealing with money it’s a bad idea to use floating-point numbers i.e. decimal values (if you don’t know why then learn about it [here](https://stackoverflow.com/a/3730040)). Thankfully there is already a great library to handle money manipulation called Dinero.js. Dinero provides easy-to-use methods for calculating, parsing, and formatting money, making my life as simple as 2 + 2.

## Conclusion

This project was merely meant to mimic an eCommerce store, although it wouldn’t be too difficult to implement the necessary aspects to set up a real working shop template. Additionally, I believe it wouldn’t require too much work to change in the existing code for this transition to happen. In the end, what was most challenging (and time consuming) was designing the site to be aesthetically pleasing while resembling a genuine brand. I hope you enjoy exploring the project as much as I did building it.