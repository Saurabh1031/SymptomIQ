import ErrorScreen from "@app/assets/images/unableProcess.png"
import { BottomContainer, ButtonContainer, CloseTest, Container, Content, ErrorContainer, Heading, RetakeTest } from "./error-component";
import { useHistory } from "react-router";
import { useState } from "react";
import LeavingMidway from "../leaving-popup/leaving-popup";

const ErrorPage = () => {
    const history = useHistory();
    const [leavingMidway, setLeavingMidway] = useState<boolean>(false);
    const handleRetakeTest = () => {
        history.push({
            pathname: "/home"
        })
    }
    const handleCloseClick = () => {
        setLeavingMidway(true);
    }
    return <>
        <Container>
            <ErrorContainer>
                <img src={ErrorScreen} />
            </ErrorContainer>
            <Heading>Unable to Process</Heading>
            <Content>Please try again later or seek medical advice for your symptoms</Content>
            <BottomContainer>
                <ButtonContainer>
                    <RetakeTest onClick={handleRetakeTest}>Retake Test</RetakeTest>
                    <CloseTest onClick={() => { }}>Close</CloseTest>
                </ButtonContainer>
            </BottomContainer>
        </Container>
        {leavingMidway ?
            <LeavingMidway onclose={setLeavingMidway} />
            : null}
    </>
}
export default ErrorPage;