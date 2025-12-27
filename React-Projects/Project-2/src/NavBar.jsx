const NavBar = () => {
    const age = 20;

    return (
        <div>
            {age >= 18 ? "Eligble" : "Not Eligible"}
        </div>
    )
}

export default NavBar