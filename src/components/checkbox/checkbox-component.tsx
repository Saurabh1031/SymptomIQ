import styled from "styled-components";
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    border: 1px solid #494E9D;
    width: 17px;
    height: 17px;
    background: #fff;
    ${({ isChecked }: any) => {
        if (isChecked) {
            return `background: #494E9D;`;
        }
    }}
`;