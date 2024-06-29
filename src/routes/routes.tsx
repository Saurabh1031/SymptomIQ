import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import PersonalDetails from "@app/modules/personal-details/personal-details";
import HomeScreen from "@app/modules/homescreen/homescreen";
import Symptoms from "@app/modules/symptoms/symptoms";
import SymptomsDuration from "@app/modules/symptoms-duration/symptoms-duration";
import SymptomsSeverity from "@app/modules/symptoms-severity/symptoms-severity";
import ExtraSymptoms from "@app/modules/extra-symptoms/extra-symptoms";
import MedicalHistory from "@app/modules/medical-history/medical-history";
import Habits from "@app/modules/habits/habits";
import Outcome from "@app/modules/outcome/outcome";
const routes = [
  {
    path: "/homescreen",  //will be deleted soon
    component: Home,
  }, {
    path: "/details",
    component: PersonalDetails,
  }, {
    path: "/home",
    component: HomeScreen,
  }, {
    path: "/symptoms",
    component: Symptoms
  },
  {
    path: "/duration",
    component: SymptomsDuration
  },
  {
    path: "/severity",
    component: SymptomsSeverity
  }, {
    path: "/extras",
    component: ExtraSymptoms
  }, {
    path: "/history",
    component: MedicalHistory
  }, {
    path: "/habits",
    component: Habits
  }, {
    path: "/outcome",
    component: Outcome
  }
];
export const AppRoutes = routes;
export default function Routes() {
  return (
    <Switch>
      {routes.map((route: any, i: number) => (
        <Route exact path={route.path} key={i.toString()}>
          <route.component />
        </Route>
      ))}
    </Switch>
  );
}
