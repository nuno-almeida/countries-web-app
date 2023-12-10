# Countries Angular App

This app displays countries per continent from the REST Countries API. Each country card contains one button to mark the country as visited and other button to mark it as wish to visit. Detailed info about the API here: https://gitlab.com/restcountries/restcountries <br />
It contains the following pages:<br />

<ul>
    <li> Login: it allows the user to login. It just checks if the used login/password are saved in the localStorage.
    </li>
    <li> Register: it allows to create a user account. It is simple stored in the localStorage.
    </li>
    <li> Home: Displays one card per continent with counters of visited and wished countries of the continent. Clicking on the card opens the /countries/:continentId path.
    </li>
    <li> /countries/:continentId: Displays the countries of the continent.
    </li>
    <li>Visited: this path is available when the used is loggedIn. It displays the countries marked as visited.</li>
    <li>Wish: this path is available when the used is loggedIn. It displays the countries marked as wished.</li>
</ul>

## GitHub Page

This app is deploy in GithHub Pages and may be accessed in: <br /> https://nuno-almeida.github.io/countries-web-app/

### Run locally

Runs the app in the development mode with `npm run start` command.\
Open [http://localhost:4200](http://localhost:4200) to view it in your browser.
