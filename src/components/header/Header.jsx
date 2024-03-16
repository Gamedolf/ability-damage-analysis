import { StyledHeader } from "./Header.styles"

function Header({ image }) {
    return (
        <StyledHeader
            className="bg-center bg-cover relative z-10 h-64 md:h-96 mt-10 lg:mt-0"
        />
    )
}

export default Header