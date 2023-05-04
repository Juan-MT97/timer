import './App.css';
import { Timer } from './components/Timer';

function App() {
  return (
    <div className="App">
      <Timer />
      <div className="py-4 px-4 bg-grey-darker flex items-center">
        <div className="w-1/2 h-full flex flex-col items-center">
          <div className="w-1/3 flex justify-around items-center text-grey">
            {/* BOTON ALEATORIO */}
            <svg className="w-5 h-5 fill-current hover:text-grey-lightest block" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.58578644,12.8284271 L4.41028736,15.0039262 C3.83091964,15.5832939 2.81955537,16 2.00104344,16 L0,16 L0,14 L2.00104344,14 C2.29046199,14 2.79273472,13.7930517 2.9960738,13.5897126 L5.17157288,11.4142136 L6.58578644,12.8284271 L6.58578644,12.8284271 Z M16,6 L13.9998075,6 C13.7100858,6 13.2055579,6.20865568 13.0039262,6.41028736 L10.8284271,8.58578644 L10.8284271,8.58578644 L9.41421356,7.17157288 L11.5897126,4.9960738 C12.1666986,4.41908781 13.1800499,4 13.9998075,4 L16,4 L16,1 L20,5 L16,9 L16,6 Z M16,16 L13.9998075,16 C13.1800499,16 12.1666986,15.5809122 11.5897126,15.0039262 L2.9960738,6.41028736 C2.79273472,6.20694828 2.29046199,6 2.00104344,6 L0,6 L0,4 L2.00104344,4 C2.81955537,4 3.83091964,4.41670608 4.41028736,4.9960738 L13.0039262,13.5897126 C13.2055579,13.7913443 13.7100858,14 13.9998075,14 L16,14 L16,11 L20,15 L16,19 L16,16 Z"></path>
            </svg>
            {/* BOTON RETROCEDER */}
            <svg className="w-5 h-5 fill-current hover:text-grey-lightest block" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M4,5 L7,5 L7,15 L4,15 L4,5 Z M16,5 L7,10 L16,15 L16,5 Z"></path>
            </svg>
            {/* BOTON PLAY */}
            <span className="block border border-solid border-grey-lightest hover:text-grey-lightest rounded-full p-2">
              <svg className="w-5 h-5 fill-current block" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <polygon id="Rectangle-161" points="4 4 16 10 4 16"></polygon>
              </svg>
            </span>
            {/* BOTON AVANZAR */}
            <svg className="w-5 h-5 fill-current hover:text-grey-lightest block" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M13,5 L16,5 L16,15 L13,15 L13,5 Z M4,5 L13,10 L4,15 L4,5 Z"></path>
            </svg>
            {/* BOTON RESET? */}
            <svg className="w-5 h-5 fill-current hover:text-grey-lightest block" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.99201702,4 C3.8918564,4 3,4.88670635 3,5.99810135 L3,12 L0,12 L4,16 L8,12 L5,12 L5,6 L12,6 L14,4 L4.99201702,4 Z M15,8 L12,8 L16,4 L20,8 L17,8 L17,14.0018986 C17,15.1054196 16.0998238,16 15.007983,16 L6,16 L8,14 L15,14 L15,8 Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
