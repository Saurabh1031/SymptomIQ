import { useContext } from "react";
import { __RouterContext as RouterContext } from "react-router";

export function useLocation() {
  const { location, history } = useContext(RouterContext);

  function navigate(to: string, { replace = false } = {}) {
    if (replace) {
      history.replace(to);
    } else {
      history.push(to);
    }//@ts-nocheck

  }

  return {
    location,
    navigate,
  };
}

export function checkLocation(setShowPopUp: any) {
  if (!navigator.geolocation) {
    //console.log("Geolocation API not supported by this browser.");
  } else {
    navigator.geolocation.getCurrentPosition(
      (success) => {},
      (error) => {
        setShowPopUp(true);
      }
    );
  }
}

export function getGeoLocationAccess() {
  //if ( permission === 'granted' || permission === 'prompt' || permission === 'denied' )
  let location: any = navigator.permissions;
  if (location && location.query) {
    return navigator.permissions
      .query({ name: "geolocation" })
      .then((result) => {
        return result;
      });
  } else {
    return { state: "No-GEO-Support" };
  }
}

export async function checkGEOLocationAccess(): Promise<any> {
  if (
    sessionStorage.getItem("GEOAccess") &&
    sessionStorage.getItem("isBridgeAccess")
  ) {
    return { geoAccess: true, data: true };
  } else {
    try {
      let position = await getGeoLocationPromise();
      sessionStorage.setItem("GEOAccess", "true");
      return { geoAccess: true, data: position };
    } catch (err) {
      return { geoAccess: 0, data: err };
    }
  }
}

export function getGeoLocationPromise() {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
}
