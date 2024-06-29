import SideNav from "../side-nav/side-nav";
import { ButtonContainer, CloseTest, Container, Description, Header, RetakeTest, SideContainer, SidenavContainer } from "./leaving-popup-component";

const LeavingMidway = ({ onclose }: any) => {
    const userId = localStorage.getItem("userid") || "";
    const handleOnLeaveClick = () => {
        sessionStorage.clear();
        window.location.href = `${process.env.REACT_APP_HOST}app/svaasportal/homescreen?profile=${userId}`;
    }
    return <>
        <SidenavContainer>
            <SideNav
                className="closeClassName"
                maxHeight="100%"
                minHeight="70%"
                isSpaceNeeded={false}
                onClose={() => {
                    onclose(false);
                }}
                title=""
                closeClassName={"open"}>
                <Container>
                    <SideContainer>
                        <Header>Leave BodyCheck</Header>
                        <Description>
                            Are you sure you want to leave? <br />
                            Changes you made will not be saved.
                        </Description>
                    </SideContainer>
                    <ButtonContainer>
                        <RetakeTest onClick={() => onclose(false)}>Continue</RetakeTest>
                        <CloseTest onClick={handleOnLeaveClick}>Leave</CloseTest>
                    </ButtonContainer>
                </Container>
            </SideNav>
        </SidenavContainer>
    </>;
}
export default LeavingMidway;