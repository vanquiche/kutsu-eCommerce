import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className='about-container'>
      <Link to='/' className='home-link'>
        Kutsu
      </Link>
      <h5>About</h5>
      <p>
        This project started off as an experiment in building a simple pattern
        in managing the global state of an app, and turned into an eCommerce
        mock site to represent a real world application. My goals for this
        project were simple: create a site that is fast and has a state that is
        accessible across the app, while also creating a great user-experience
        and a polished design.
      </p>
      <h5>Tech Stack</h5>
      <h6>Framework</h6>
      <p>
        I bootstrapped this project with <strong>create-react-app</strong> for
        quick start-up and deployment. For routing, I used{' '}
        <strong>React Router </strong>for easy implementation (even more so with
        the latest version 6) and performance. As for programming language I
        chose <strong>Typescript</strong>. TS requires a little work up-front
        but the tooling and live validation pays massive dividends throughout
        development.
      </p>

      <h6>State</h6>
      <p>
        The first problem to solve in the project was creating a data-model that
        could easily manage the state of a users’ shopping cart. This project
        was relatively simple and I wanted to avoid complexities like
        introducing a state management library like Redux. React’s
        <strong> context</strong> and<strong> reducer</strong> hooks were
        sufficient for this use case. React context allowed me to easily pass
        state across the app, while React reducer was used to set and update the
        state. This combination resulted in less code, better readability, and
        was easy to maintain, making me a happy programmer. For state
        persistence I continued with the theme of simplicity and used
        <strong> localStorage</strong>. I wholeheartedly believe that sometimes
        the simplest solution is the best solution.
      </p>
      <h6>Money</h6>
      <p>
        The second problem to solve was performing the arithmetic operations
        on money and formatting it. When dealing with
        money it’s a bad idea to use floating-point numbers i.e. decimal values
        (if you don’t know why then learn about it
        <a href='https://stackoverflow.com/a/3730040' target='_blank'>
          {' '}
          here
        </a>
        ). Thankfully there is already a great library to handle money
        manipulation called <strong>Dinero.js</strong>. Dinero provides easy-to-use methods for calculating, parsing, and formatting money, making my
        life as simple as 2 + 2.
      </p>
      <h5>Conclusion</h5>
      <p>
        This project was merely meant to mimic an eCommerce store, although it
        wouldn’t be too difficult to implement the necessary aspects to set up a
        real working shop template. Additionally, I believe it wouldn’t require
        too much change in the existing code for this transition to happen. In
        the end, what was most challenging (and time consuming) was designing
        the site to be aesthetically pleasing while resembling a genuine brand.
        I hope you enjoy exploring the project as much as I did building it.
        Feel free to check out the
        <a href='https://github.com/vanquiche/kutsu-eCommerce' target='_blank'>
          {' '}
          code
        </a>
      </p>
    </div>
  );
};

export default About;
