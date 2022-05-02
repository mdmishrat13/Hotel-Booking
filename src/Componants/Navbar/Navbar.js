import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-container'>
                <span> HotelBooking</span>
                <div className="nav-items">
                    <button className='nav-buttons'>Register</button>
                    <button className='nav-buttons'>login</button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;