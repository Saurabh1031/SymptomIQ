//@ts-nocheck
import { useEffect, useState } from "react";
import { Container } from "./checkbox-component";
import Tick from "@app/assets/icons/tick";

const CheckBox = ({ isChecked, setIsChecked }) => {
    const handleOnClickCheckbox = () => {
        setIsChecked(!isChecked);
    }
    return (
        <Container isChecked={isChecked} onClick={() => handleOnClickCheckbox()}>
            {isChecked ? <>
                <Tick />
            </> : null}
        </Container>
    );
}
export default CheckBox;