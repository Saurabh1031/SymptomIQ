// @ts-nocheck
import styled from "styled-components";
const LoaderExternal = "./animated/loader.gif";
type Props = {
    size?: string;
    position?: string;
    Svassreq?: boolean;
};

export default function SvassLoginLoader({ position, Svassreq }: Props) {
    const GifContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    animation: fadeIn 5s;
    -webkit-animation: fadeIn 5s;
    -moz-animation: fadeIn 5s;
    -o-animation: fadeIn 5s;
    -ms-animation: fadeIn 5s;
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    img {
      height: 100%;
    }
    p {
      position: absolute;
      top: 56%;
      font-size: 14px;
      font-weight: 500;
      font-family: italic;
      min-width: 135px;
      max-width: 150px;
      text-align: center;
    }
    span {
	/* color: transparent; */
	animation: blur 2s ease-out ;
	-webkit-animation: blur 10s ease-out ;
}

span:nth-child(1) {
	animation-delay: 0.1s;
	-webkit-animation-delay: 0.1s;
}
span:nth-child(2) {
	animation-delay: 0.2s;
	-webkit-animation-delay: 0.2s;
}
span:nth-child(3) {
	animation-delay: 0.3s;
	-webkit-animation-delay: 0.3s;
}
span:nth-child(4) {
	animation-delay: 0.4s;
	-webkit-animation-delay: 0.4s;
}
span:nth-child(5) {
	animation-delay: 0.5s;
	-webkit-animation-delay: 0.5s;
}
span:nth-child(6) {
	animation-delay: 0.6s;
	-webkit-animation-delay: 0.6s;
}
span:nth-child(7) {
	animation-delay: 0.7s;
	-webkit-animation-delay: 0.7s;
}
span:nth-child(8) {
	animation-delay: 0.8s;
	-webkit-animation-delay: 0.8s;
}
span:nth-child(9) {
	animation-delay: 0.9s;
	-webkit-animation-delay: 0.9s;
}

@keyframes blur {
	0%		{text-shadow:  0 0 100px #fff; opacity:0;}
	5%		{text-shadow:  0 0 90px #fff;}
	15%		{opacity: 1;}
	20%		{text-shadow:  0 0 0px #fff;}
	80%		{text-shadow:  0 0 0px #fff;}
	85%		{opacity: 1;}
	95%		{text-shadow:  0 0 90px #fff;}
	100%	{text-shadow:  0 0 100px #fff; opacity:0;}
}
  `;
    const LoaderOuter = styled.div`
    position: ${position ? position : "absolute"};
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    color: #494e9d;
    font-weight: 600;
    flex-direction: column;
    align-items: center;
    pointer-events: none;
    justify-content: center;
  `;
    const SvaasLogo = styled.div`
  background-image: url(${LoaderExternal});
  background-repeat: no-repeat;
  height: 70px;
  width: 70px;
  background-position: center;
  background-size: contain;
`;
    return (
        <LoaderOuter>
            {/* <Loader /> */}
            {/* {Svassreq ? "svass" : ""} */}

            <GifContainer>
                <SvaasLogo />
                <p>
                    <span>Please</span> {" "}
                    <span>wait</span> <span>while</span> <span>we</span>{" "}
                    <span>set</span>{" "}
                    <span>it</span>{" "}
                    <span>up</span>{" "}
                    <span>for</span> <span>you.</span>
                </p>

            </GifContainer>

            {/* Svass */}
        </LoaderOuter>
    );
}
