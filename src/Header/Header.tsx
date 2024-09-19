import { Form, Link, useMatch } from "react-router-dom";
import { ImgPath, LogoBox, LogoImage, Menu, MenuBox, NavContainer, SearchIcon, SearchInput, StatusLine, Svg, UtilityBox } from "./HeaderStyles";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import netflixLogo from "../common/logo/net-logo.png"



function Header() {

    const homeMatch = useMatch("");
    const tvMatch = useMatch("tv");

    const [searchOpen, setSearchOpen] = useState(false);


    const xValue = searchOpen
        ? window.innerWidth <= 650
            ? -155
            : -188
        : 0;



    const searchToggle = () => {
        setSearchOpen((prev) => !prev)
    };

    const searchTransition = {
        type: "linaer",
        duration: 0.3
    }

    return (
        <NavContainer>
            <LogoBox>
                <LogoImage src={netflixLogo} />
            </LogoBox>

            <MenuBox>
                <Link to={""}><Menu>
                    {homeMatch ? <StatusLine layoutId="line" /> : null}
                    <h4>Home</h4>
                </Menu></Link>
                <Link to={"tv"}>
                    <Menu>
                        {tvMatch ? <StatusLine layoutId="line" /> : null}
                        <h4>Tv Show</h4>
                    </Menu></Link>
            </MenuBox>

            <UtilityBox>
                <Form>
                    <SearchIcon
                        onClick={searchToggle}
                        animate={{ x: xValue }}
                        transition={searchTransition}
                        icon={faSearch} />
                    <SearchInput
                        animate={{ scaleX: searchOpen ? 1 : 0, opacity: searchOpen ? 1 : 0 }}
                        transition={searchTransition}
                    />
                </Form>
            </UtilityBox>
        </NavContainer>
    );
};


export default Header;