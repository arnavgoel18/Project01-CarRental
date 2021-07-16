import Signup from './container/signup/Signup'
import Login from './container/login/Login'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import HomePage from './containers/HomePage/HomePage'


function App() {
  return (
  <>
      <div className="App">
        <Signup />
        <Login />
      </div>
    
      <Navbar />
      <HomePage/>
      <Footer/>
</>
  );
}

export default App;
