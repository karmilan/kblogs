const Home = () => {

    const click = (e) =>{
        console.log('hi ',e);
}

    const hclick = (name,e) =>{
            console.log('hello ' +name, e.target);
    }

    return (
        <div className="home">
            <button onClick={click}>click</button>

            <button onClick={(e) => {hclick('kar',e)}}>click here</button>
            
        </div>
    );
}
 
export default Home;