const axios = require("axios");
const {
  API_ENDPOINT,
  companyName,
  clientID,
  rollNo,
  clientSecret,
  ownerName,
  ownerEmail,
} = require("../constants");

// Function to make an API call
exports.apiCall = async (url) => {
  try {
    let jwt = await getJWT(); // Get JWT token
    const res = await axios.get(`${API_ENDPOINT}/train/${url}`, {
      // Make GET request to API endpoint
      headers: {
        Authorization: `Bearer ${jwt}`, // Include JWT token in the Authorization header
      },
    });
    return res.data; // Return the response data
  } catch (error) {
    console.log(error); // Log any errors
    return error; // Return the error
  }
};

// Function to get JWT token
const getJWT = async () => {
  try {
    const res = await axios.post(`${API_ENDPOINT}/train/auth`, {
      // Make POST request to API endpoint
      companyName,
      clientID,
      clientSecret,
      ownerName,
      ownerEmail,
      rollNo,
    });
    return res.data.access_token; // Return the access token from the response data
  } catch (error) {
    console.log(error); // Log any errors
    return error; // Return the error
  }
};
