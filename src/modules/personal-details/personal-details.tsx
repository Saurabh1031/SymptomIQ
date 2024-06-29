import React from "react";
import { useHistory } from "react-router";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
    ErrorText,
    FormContainer,
    Heading,
    Span,
    StyledButton,
} from "./personal-details-components";
import styled from "styled-components";
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const StyledField = styled(Field)`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
`;
const StyledFieldSelect = styled.select`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
`;
function PersonalDetails() {
    const history = useHistory();
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        dob: Yup.date()
            .required("Date of Birth is required")
            .max(new Date(), "Date of Birth cannot be in the future"),
        gender: Yup.string().required("Gender is required"),
    });
    return (
        <>

            <FormContainer>
                <Heading><Span>Let's get started!</Span> We need some details from you.</Heading>
                <Formik
                    initialValues={{ name: "", dob: "", gender: "" }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values);
                        localStorage.setItem('name', values.name);
                        localStorage.setItem('gender', values.gender);
                        localStorage.setItem('dob', values.dob);
                        setSubmitting(false);
                        history.push({ pathname: "/home" });
                    }}
                >
                    {({ isSubmitting }) => (
                        <StyledForm>
                            <StyledField type="text" name="name" placeholder="Name" />
                            <ErrorMessage name="name" component={ErrorText} />

                            <StyledField type="date" name="dob" placeholder="YYYY-MM-DD" />
                            <ErrorMessage name="dob" component={ErrorText} />

                            <Field as={StyledFieldSelect} name="gender">
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </Field>
                            <ErrorMessage name="gender" component={ErrorText} />

                            <StyledButton type="submit" disabled={isSubmitting}>
                                Let's go!
                            </StyledButton>
                        </StyledForm>
                    )}
                </Formik>
            </FormContainer>
        </>
    );
}

export default PersonalDetails;
