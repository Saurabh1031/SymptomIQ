import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    //width: 44vh;
    /* height: 40px; */
    padding: 5px 16px 3px 8px;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1px solid var(--charcoal-light, #D6D6D6);
    background: var(--white, #FFF);
    margin-top: 8px;
    `;
export const Input = styled.input`
    color: #000;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    outline: none;
    border: none;
    width: 68vw;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 85vw;
`;
export const SuggestiveDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px;
    border-radius: 3px;
    max-height: calc(100vh - 601px);
    min-height: calc(19vh);
    overflow: auto;
    border: 1px solid var(--charcoal-light, #D6D6D6);
`;
export const SelectedSymptom = styled.div`
    display: inline-flex;
    /* height: 32px; */
    padding: 0.5vh 8px;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
    border-radius: 6px;
    background: #494E9D;
    color: #FFF;
    text-align: center;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
`;
export const SelectedContainer = styled.div`
display: flex;
    flex-wrap: wrap;
    gap: 4px; 
    margin-top: 5px;
    `;
export const IconDiv = styled.div`
    display: flex;
    align-items: center;
    svg {
        height: 11.25px;
        width: 11.25px;
    }
`;
export const Suggestion = styled.div`
    color: var(--black-secondary-313131, #313131);
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    padding: 2px 0px 6px 0px;
    `;

export const SearchNotFound = styled.div`
    color: #666BB8;
    text-align: center;
    font-family: Nunito Sans;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 35px;
    height: 50px;
`;
export const NotFoundPara = styled.div`
color: #6F6F6F;
    text-align: center;
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    height: 36px;
`
export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const AddSymptomsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 9px;
    border-radius: 0px 0px 4px 4px;
    margin-bottom: 20px;
    border: 1px solid #E8E8E8;
    background: var(--white-background-ffffff, #FFF);
    box-shadow: -1px 1px 30px 1px rgb(49 49 49 / 10%);
`;
export const AddSymptomsHeader = styled.div`
    color: #000;
    font-family: Nunito Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    padding: 10px;
    text-align: center;
`;
export const AddSymptomsButtonCont = styled.div`
    display: flex;
    gap: 13.5px;
    justify-content: center;
    padding-bottom: 16px;
`;
export const Button = styled.button`
    color: #494E9D;
    text-align: center;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    border-radius: 6px;
    border: 1px solid #8C90CA;
    background: #fff;
    display: inline-flex;
    padding: 8px 29px;
    align-items: flex-start;
`;