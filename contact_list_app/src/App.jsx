import './App.css'
import ContactForm from "./components/ContactForm.jsx";
import ContactList from "./components/ContactList.jsx";
import {Provider} from "react-redux";
import store from "./store.js";


function App() {

    return (
        <Provider store={store}>
            <div>
                <ContactForm />
            </div>
            <div>
                <ContactList />
            </div>
        </Provider>
    )
}

export default App
