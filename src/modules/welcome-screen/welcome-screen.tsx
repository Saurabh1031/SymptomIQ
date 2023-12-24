import {
    BoldContent,
    Content,
    ContentHeading,
    ContentSubHeading,
    DoctorImage,
    DoctorImageContainer,
    HiText,
    MainContainer,
    Name,
    WelcomeHeading,
} from "./welcome-screen-components";
import doctorPatientImage from "../../assets/images/doctorPatient.png";
import HealthLogo from "../../assets/images/healthlogo.jpeg";
import { camelCase } from "@app/utils/general"

const WelcomeScreen = ({ name }) => {
    return (
        <MainContainer>
            <Content>
                <WelcomeHeading>
                    <HiText>Hey there!</HiText>
                    <br />
                    <Name>{camelCase(name)}</Name>
                </WelcomeHeading>
                <DoctorImageContainer>
                    <DoctorImage src={HealthLogo} alt="Health logo" />
                </DoctorImageContainer>
                <ContentHeading>
                    Welcome to the <BoldContent>SymptomIQ!</BoldContent>
                    <ContentSubHeading>
                        Please answer the following questions to find out what might be
                        causing your symptoms
                    </ContentSubHeading>
                </ContentHeading>
            </Content>
        </MainContainer>
    );
}

export default WelcomeScreen;