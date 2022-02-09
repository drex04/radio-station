import axios from "axios";

// Read all blogposts from serverless Cloud Functions API & Cloud Firestore
export function readAllBlogposts(setStateVar, mounted) {
  axios
    .get(`https://europe-west2-radio-tnp-dev.cloudfunctions.net/blogApi/api`)
    .then((res) => {
      if (mounted) {
        setStateVar(res.data);
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
