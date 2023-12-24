//@ts-nocheck
import { useRef, useState } from "react";
import SearcIcon from "@app/assets/icons/search-icon";
import { SearchIcon } from "@app/assets/icons";
import { AddSymptomsButtonCont, AddSymptomsContainer, AddSymptomsHeader, Button, Container, IconDiv, Input, InputContainer, NotFoundContainer, NotFoundPara, SearchNotFound, SelectedContainer, SelectedSymptom, Suggestion, SuggestiveDiv } from "./searchbar-components";
import CrossSymbol from "@app/assets/icons/cross-symbol";
import NotFound from "@app/assets/images/notfound.png"
import BlueCross from "@app/assets/icons/blueCross";
const SearchBar = ({ symptomsList, setSearchBarSymptoms, searchBarSymptoms, disabled, fromPage }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [notFound, setNotFound] = useState<boolean>(false);
    const [showAddSymptom, setShowAddSymptom] = useState<boolean>(false);
    const inputRef = useRef(null);
    // const [searchBarSymptoms, setSearchBarSymptoms] = useState([]);

    // Mock data for suggestions (replace this with actual data source or API call)
    // const mockSuggestions = [
    //     "Apple",
    //     "Banana",
    //     "Cherry",
    //     "Orange",
    //     "Pineapple",
    //     "Strawberry"
    // ];
    const mockSuggestions = symptomsList && symptomsList.map((symptom) => (symptom.value));

    //console.log("mockSuggestions: ", mockSuggestions);
    //console.log("searchBarSymptoms: ", searchBarSymptoms);
    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);

        // Show suggestions only after the minimum 3 letters are input
        if (value.length > 3) {
            setNotFound(false);
            setShowAddSymptom(true);
            //setNotFound(true);
            const filteredSuggestions = mockSuggestions.filter((suggestion) =>
                suggestion.toLowerCase().includes(value.toLowerCase())
            );
            if (filteredSuggestions.length) {
                setShowAddSymptom(false);
                // setNotFound(false);
            }
            setSuggestions(filteredSuggestions);
        } else {
            setShowAddSymptom(false);
            setNotFound(false);
            setSuggestions([]);
        }
        if (inputRef?.current) {
            setTimeout(() => {
                inputRef.current.scrollIntoView();
            }, 100)
        }
    };
    const handleAddSymptom = (symptomName: any) => {
        const hasOnlyLetters = /^[A-Za-z\s]*$/.test(symptomName);
        const lowercaseSymptomName = symptomName.toLowerCase();
        if (!searchBarSymptoms.some(existingSymptom => existingSymptom.toLowerCase() === lowercaseSymptomName) && hasOnlyLetters) {
            setSearchBarSymptoms((prevsearchBarSymptoms) => [
                ...prevsearchBarSymptoms,
                symptomName
            ]);
        }
        setSearchTerm("");
        setSuggestions([]);
        setShowAddSymptom(false);
        setNotFound(false);
    };

    const handleRemoveOption = (option) => {
        setSearchBarSymptoms((prevsearchBarSymptoms) =>
            prevsearchBarSymptoms.filter((item) => item !== option)
        );
    };
    const handleNoClick = () => {
        setNotFound(true);
        setSuggestions([]);
        setShowAddSymptom(false);
    }

    return (
        <Container ref={inputRef}>
            <InputContainer>
                <div>{SearchIcon()}</div>
                <Input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search heartburn, stomach cramps etc."
                    disabled={disabled}
                />
            </InputContainer>
            {(suggestions.length && !showAddSymptom) ?
                <SuggestiveDiv>
                    {suggestions.map((suggestion, idx) => (
                        <Suggestion key={idx} onClick={() => handleAddSymptom(suggestion)}>
                            {suggestion}
                        </Suggestion>
                    ))}
                </SuggestiveDiv> : null}
            {(showAddSymptom && !suggestions.length && !notFound) ?
                <AddSymptomsContainer>
                    <AddSymptomsHeader>
                        This {fromPage == "SymptomsPage" ? "symptom" : "condition"} does not exist in the system. Do you want to add "{searchTerm}" as a {fromPage == "SymptomsPage" ? "symptom" : "condition"}?
                    </AddSymptomsHeader>
                    <AddSymptomsButtonCont>
                        <Button onClick={() => handleNoClick()}>No</Button>
                        <Button onClick={() => handleAddSymptom(searchTerm)}>Yes</Button>
                    </AddSymptomsButtonCont>
                </AddSymptomsContainer> : null}
            {(notFound && !suggestions.length && !showAddSymptom) ?
                <div>
                    <NotFoundContainer>
                        <img src={NotFound} alt="sorry, not found" />
                        <SearchNotFound>Search not found</SearchNotFound>
                        <NotFoundPara>We couldn’t find what you searched for. Try again.</NotFoundPara>
                    </NotFoundContainer>
                </div> : null}
            {(searchBarSymptoms.length && !suggestions.length && !notFound && !showAddSymptom) ?
                <SelectedContainer>
                    {searchBarSymptoms.map((option, idx) => (
                        <SelectedSymptom key={idx} onClick={() => handleRemoveOption(option)}>
                            {option}
                            <IconDiv>
                                {BlueCross()}
                            </IconDiv>
                        </SelectedSymptom>
                    ))}
                </SelectedContainer> : null}
        </Container>
    );
};

export default SearchBar;
