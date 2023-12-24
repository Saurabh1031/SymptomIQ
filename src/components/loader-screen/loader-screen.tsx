import { useEffect, useState } from "react";
import AnalyzingImage from "../../assets/images/Analyzing.png";
import { HeaderText, Image, ImageContainer, ProgressBar, ProgressContainer } from "./loader-screen-components";
const LoaderScreen = ({ startAnalyze, progress, setStartAnalyze, setProgress }) => {

    useEffect(() => {
        const interval = setInterval(() => {
            if (startAnalyze && progress < 95) {
                setProgress(progress + 1);
            }
        }, 300);

        return () => clearInterval(interval);
    }, [startAnalyze, progress]);

    return <>
        <ImageContainer>
            <Image src={AnalyzingImage} alt="analyzing image" />
            <ProgressContainer>
                <ProgressBar style={{ width: `${progress}%` }}></ProgressBar>
            </ProgressContainer>
            <HeaderText>Analyzing your symptoms</HeaderText>
        </ImageContainer>
    </>;
}
export default LoaderScreen;