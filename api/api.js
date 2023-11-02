const URL = "https://wallet-api-production-2ad4.up.railway.app/v1";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ2aXNpdG9yLmRldkBnbWFpbC5jb20iLCJpYXQiOjE2OTg5Mzg3NzYsImV4cCI6MTY5OTAyNTE3Nn0.qS4o43BUJTT_wEEBSSk_y2YskhVmd2z2gyhBrWlBnmg";

export function getDataApi() {
  return {
    url: `${URL}/dash?id=3`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${TOKEN}`,
      },
    },
  };
}
