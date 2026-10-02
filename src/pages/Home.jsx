import React from 'react';
// home function 
function Home() {
    return (
    <div style={{padding: '15px', textAlign: 'center'}}>
        {/* Home page details */}
        <h1>Welcome to my Portfolio</h1>
        <h3>I am Tristin Forbes, a student in a software engineering program</h3>
        <div style={{margin: '30px 0'}}>
            {/* Mission statement  */}
            <h4> My Mission</h4>
            <p>My goal is to create a functional react website</p>
        </div>
        <button style={{padding: '10px 25px', cursor: 'pointer'}}>
            {/* button to about me */}
            Learn More About Me
        </button>
    </div>
    );
}
export default Home;