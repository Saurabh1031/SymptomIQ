import { useLocation as move, validateSession } from "@app/utils";
import { Routes } from "@app/routes";
import { Redirect, Route, useHistory } from "react-router";
import {
  Container,
  PageContainer,
  PageContent,
} from "./layout-components";
import NewHeader from "../../components/svaas-header"
import Stepper from "../stepper/Stepper";
import { useEffect, useState } from "react";
export default function Layout() {
  const history = useHistory();
  const session = validateSession();
  const steps = ["About", "Symptoms", "History", "Outcome"];
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [completedStep, setCompletedStep] = useState(false);
  // useEffect(() => {
  //   return history.listen((location) => {
  //     // netcorePageBrowseEvent();
  //     console.log("location: ", location);
  //   });

  // }, [history]);
  return (
    <Container>
      <PageContainer>
        <PageContent className="layoutcontent">
          {/* <Redirect to="/home" /> */}
          <Route
            exact
            path="/"
            render={() => <Redirect to="/details" />}
          />
          {/* <Route
            exact
            path="/bridge"
            render={() => <Redirect to="/home" />}
          /> */}
          <Routes />
        </PageContent>
      </PageContainer>
    </Container>
  );
}
