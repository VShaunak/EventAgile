import React from 'react';

function Header()
{
    return(
    <div>
    <ul>
        <li><a class="active" href="main.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="Event.html">Event</a></li>

        <li style="float:right"><a href="#about">Login</a></li>
        <li style="float:right"><a href="#about">SignUp</a></li>
    </ul>
    </div>
    );
}
export default Header;