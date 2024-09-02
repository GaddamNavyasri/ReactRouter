import react from 'react';
import {useNavigate} from 'react-router-dom'

function Home() {
    const Navigate = useNavigate();
    return(
        <>
         <h1>Home page</h1>
         <button onClick={() =>{Navigate('order-summary',{replace : true})}}>Place Order</button>
        </>
    );
}

export default Home;