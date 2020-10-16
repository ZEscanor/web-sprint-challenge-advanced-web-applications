import {axiosWithAuth} from "../util/axiosWithAuth";

export const simple = () => {
axiosWithAuth()
  .get("/colors")
  .then((res)=> {
      console.log("ARE MY COLORS OK?",res.data)
     setColorList(res.data)
  })
  .catch((err)=> {
      console.log(err);
  })
}