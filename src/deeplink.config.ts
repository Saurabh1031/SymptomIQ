export default function VALIDATEDDEEPLINK(url: any) {
  let pathurl = url.pathname.toLowerCase();
  let pathstring = url.pathname;

  const ALLOWEDURLS = [
    `${process.env.REACT_APP_HOMEPAGE}/homescreen`,
    `${process.env.REACT_APP_HOMEPAGE}/appointments`,
    `${process.env.REACT_APP_HOMEPAGE}/me`,
    `${process.env.REACT_APP_HOMEPAGE}/doctor/appointment/`,
  ];
  const ALLOWEDSTRINGS = [];

  let ISALLOWEDSEGMENTS = ALLOWEDSTRINGS.find((val: string) => {
    //val = val.toLowerCase();
    return pathstring.includes(val);
  })
    ? true
    : false;

  let ISALLOWEDURL = ALLOWEDURLS.find((val: string) => {
    val = val.toLowerCase();
    return pathurl.includes(val);
  })
    ? true
    : false;

  // console.log("path", path)
  // console.log("ISRESTRICTEDURLS", ISRESTRICTEDURLS)
  // console.log("ISBLOCKEDSEGMENTS", ISBLOCKEDSEGMENTS)

  if (ISALLOWEDURL) {
    return true;
  } else {
    return false;
  }
}
