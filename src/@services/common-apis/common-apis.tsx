import { service } from "../interceptor";
import axios from "axios";
const baseURL = process.env.REACT_APP_BACKEND_BASE_URL;
const appService = axios.create({ baseURL });
const userId = localStorage.getItem("userid");
const svaasToken = localStorage.getItem("svaasToken");
export const create_chat = (body?: any) => {
  let url = `/api/chat/create_chat`;
  return appService
    .post(url, body)
    .then((res: any) => res)
    .catch((err: any) => err)
}
export const get_symptoms = () => {
  let url = `/api/chat/get_symptoms/`;
  return appService
    .get(url)
    .then((res: any) => res)
    .catch((err: any) => err)
}
export const get_symptoms_attributes = (body: any) => {
  let url = `/api/chat/get_symptoms_attributes/`;
  return appService
    .post(url, body)
    .then((res: any) => res)
    .catch((err: any) => err)
}
export const update_symptoms = (body: any) => {
  const chatid = localStorage.getItem("chatid") || "";
  let url = `/api/chat/update_symptoms/${chatid}`;
  return appService
    .post(url, body)
    .then((res: any) => res)
    .catch((err: any) => err)
}
export const update_other_symptoms = (body: any) => {
  const chatid = localStorage.getItem("chatid") || "";
  let url = `/api/chat/update_other_symptoms/${chatid}`;
  return appService
    .post(url, body)
    .then((res: any) => res)
    .catch((err: any) => err)
}
export const get_pre_conditions = () => {
  let url = `/api/chat/get_preconditions/`;
  return appService
    .get(url)
    .then((res: any) => res)
    .catch((err: any) => err)
}
export const update_pre_conditions = (body: any) => {
  const chatid = localStorage.getItem("chatid") || "";
  let url = `/api/chat/update_pre_conditions/${chatid}`;
  return appService
    .post(url, body)
    .then((res: any) => res)
    .catch((err: any) => err)
}
export const update_smoker = (body: any) => {
  const chatid = localStorage.getItem("chatid") || "";
  let url = `/api/chat/update_smoker/${chatid}?body=${body}`;
  return appService
    .post(url)
    .then((res: any) => res)
    .catch((err: any) => err)
}
export const update_alcohol = (body: any) => {
  const chatid = localStorage.getItem("chatid") || "";
  let url = `/api/chat/update_alcohol/${chatid}?body=${body}`;
  return appService
    .post(url)
    .then((res: any) => res)
    .catch((err: any) => err)
}
export const get_chat_results = () => {
  const chatid = localStorage.getItem("chatid") || "";
  let url = `/api/chat/get_chat_results/${chatid}`;
  return appService
    .get(url)
    .then((res: any) => res)
    .catch((err: any) => err)
}

export const getFindSpecialitiesDoc = async (params: any) => {
  let paramsInfo = `query GetDoctors($limit: Int, $index: Int, $query: String, $advanceQuery: String, $advanceSortMode: Boolean,
    $distanceQuery: String,$sort:String) {
    getDoctors(limit:$limit,index:$index, query: $query, advanceQuery: $advanceQuery, advanceSortMode:
    $advanceSortMode, distanceQuery: $distanceQuery,sort:$sort) {
    info {
    count
    }
    data {
    id
    erxDoctorId
    firstName
    lastName
    middleName
    description
    baseCity
    gender
    erxServiceProvider
    consultationType
    primarySpecialization
    qualifications
    yearOfExperience
    languages
    placeholder1
    eConsultation {
    consultationFee
    catalogueConsultationFee
    followUpFee
    }
    places {
      isActive
    catalogueFollowUpFee
    catalogueConsultationFee
    consultationFee
    id
    state
    city
    address
    erxBranchId
    placeType
    branchId
    branchName
    pincode
    location {
    lat
    lon
    }
    }
    _score
    isActive
    }
    }
    }`;
  return service
    .post(`/doctor/search/v2/mdm?patientId=${userId}`, {
      query: paramsInfo,
      variables: {
        advanceQuery: `{"bool":{ "filter":{"bool":{"must":[{"match":{"languages":"English"}}]}}, "must": [{"multi_match":{"query":"cardiology","type": "phrase_prefix", "fields":["primarySpecialization","firstName","lastName"]}},{"match":{"isActive":true}},{"match":{"places.isActive":true}}]}}`,
        advanceSortMode: true,
        sort: '{"_score": -1 }',
        limit: 100,
        index: 1,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      //console.log(error);
    });
};

export const getDoctorUsingFetch = async (specialization: any) => {
  //const userId = "SVEMP-472d82b5-fba3-4224-92a2-069495b62bdc";
  const userId = localStorage.getItem("userid");
  //const apiUrl = `https://dev.svaas.com/`;
  const apiUrl = process.env.REACT_APP_API_URL;
  const authToken = svaasToken;
  //const authToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IlBKYWxSRDhyeXM5TEdUWTMtTHo2NnEtOWV4RFdSZkREdENGbms4ZkVLLTgiLCJ0eXAiOiJKV1QifQ.eyJzdWIiOiIyMWE4ZjRjNC1kNjkxLTRhODQtYWY2NC0zOTQyZDRlNGExNjQiLCJzaWduSW5OYW1lcy5waG9uZU51bWJlciI6Iis5MTg2Mzk0MzUyMjYiLCJuYW1lIjoiODYzOTQzNTIyNiIsImVtYWlsIjoic2F1cmFiaHRpd2FyaUBzdmFhc3dlbGxuZXNzLmNvbSIsInRpZCI6IjQ5MTUyNzdkLWJhNGYtNGI5Ny1iNzE5LTIyMzIxZDg2NGMwMiIsInRmcCI6IkIyQ18xQV9TVkFBU19TaWduVXBPclNpZ25JbldpdGhQaG9uZV9WMi4wLjAiLCJub25jZSI6IjhkNjRmMzc3LWZjYWYtNDFjOS1iZmU0LTNjOGI5ZjUyYzhkNSIsInNjcCI6IlNWQUFTX0JBQ0tFTkQuQUNDRVNTIiwiYXpwIjoiYjFlODUxMzQtYTA2Yy00ZjU5LWJmY2ItZTEzMTU3MjRjNDYyIiwidmVyIjoiMS4wIiwiaWF0IjoxNjkyMjU2MDYxLCJhdWQiOiI3Mjg3ZTM3MC1lNDliLTQxZGQtYmQ2OS1iYzIzMGZjMDlhMzkiLCJleHAiOjE2OTIyNTk2NjEsImlzcyI6Imh0dHBzOi8vaWRlbnRpdHktdGVzdC5zdmFhcy5jb20vNDkxNTI3N2QtYmE0Zi00Yjk3LWI3MTktMjIzMjFkODY0YzAyL3YyLjAvIiwibmJmIjoxNjkyMjU2MDYxfQ.jW4TVEUf5EcM8Kh43WquP_doRHBfT_rG1mLMG1TwgW5UsK9l6ZDDo71TLuFuP4Sx7tk_oXWg6Njvr_fECYc0RepJpYEal4vua2xeEgMb6l18Sbb9o-NuiUWTMvQkXjVwsCm4tlw31QubDxi33WeIZcYOruZmZyNGOWINDa4xUiQ4qIew5i6E0sQyZ3K9cBr48QpURqBpI0acwWy3XGU4-e5yFzxZ6VfImg1j1oa4dIBRpo1GZTHW-0dh9jy14l878DgFEkSwbCRVq4UI5ncCEKmEOm5s4fpRY1FsS32CtevwXgez4rM0PMNaBK5aeMD1qXujAifIsJjFdYTwwYufLg";

  const paramsInfo = {
    query: `query GetDoctors($limit: Int, $index: Int, $query: String, $advanceQuery: String, $advanceSortMode: Boolean,
      $distanceQuery: String,$sort:String) {
      getDoctors(limit:$limit,index:$index, query: $query, advanceQuery: $advanceQuery, advanceSortMode:
      $advanceSortMode, distanceQuery: $distanceQuery,sort:$sort) {
      info {
      count
      }
      data {
      id
      erxDoctorId
      firstName
      lastName
      middleName
      description
      baseCity
      gender
      erxServiceProvider
      consultationType
      primarySpecialization
      qualifications
      yearOfExperience
      languages
      placeholder1
      eConsultation {
      consultationFee
      catalogueConsultationFee
      followUpFee
      }
      places {
        isActive
      catalogueFollowUpFee
      catalogueConsultationFee
      consultationFee
      id
      state
      city
      address
      erxBranchId
      placeType
      branchId
      branchName
      pincode 
      location {
      lat
      lon
      }
      }
      _score
      isActive
      }
      }
      }`,
    variables: {
      advanceQuery: JSON.stringify({
        bool: {
          filter: {
            bool: {
              must: [
                { match: { languages: "English" } }
              ]
            }
          },
          must: [
            {
              multi_match: {
                query: specialization,
                type: "phrase_prefix",
                fields: ["primarySpecialization", "firstName", "lastName"]
              }
            },
            { match: { isActive: true } },
            { match: { "places.isActive": true } }
          ]
        }
      }),
      advanceSortMode: true,
      sort: '{"_score": -1 }',
      limit: 100,
      index: 1,
    }
  };

  try {
    const response = await fetch(`${apiUrl}doctor/search/v2/mdm?patientId=${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`
      },
      body: JSON.stringify(paramsInfo),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    //console.log(error);
  }
};
