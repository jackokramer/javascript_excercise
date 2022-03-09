import logo from './logo.svg';
//mport reactlogo from './reactlogo'
import './App.css';

function Header(){
  return (
    <div>
            <p>Support Ukraine 🇺🇦
              <a href="https://opensource.facebook.com/support-ukraine"> Help Provide Humanitarian Aid to Ukraine.</a>
          </p>
      <nav>
          <img src={logo} className="App-logo" width="200px" />
              <ul className="list-items">
                <li><a href="https://">About</a></li>
                <li><a href="https://">Pricing</a></li>
                <li><a href="https://">More Info</a></li>
              </ul>
      </nav>
                    <h1>Fun facts about React</h1>
    </div>
  )
}

function Main(){
 return(
    <ul>
                    <li>Was realeased in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powered by thousands of Enterprise apps, including mobile apps</li>
                </ul>
 )
}

function Footer(){
  return(
     <footer>
            <small>© 2022 Kramer development. All rights reserved.</small>
        </footer>
        )
}

function App() {
  return (
    <div className="App">
        <Header/>
        <Main />
        <Footer />
    </div>
  );
}

export default App;
