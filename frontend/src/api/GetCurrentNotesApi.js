import axios from "axios";

const GetCurrentNotesApi = async ({ courseId, type = "course" }) => {
  try {
    console.log("🚀 Calling notes API with courseId:", courseId, "type:", type);
    
    // URL encode the courseId to handle special characters in encrypted URLs
    const encodedCourseId = encodeURIComponent(courseId);
    console.log("📝 Encoded courseId:", encodedCourseId);
    
    const backendResponse = await axios.get(
      `http://localhost:5000/api/v1/notes/get-notes/${encodedCourseId}?type=${type}`,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(
      "backendApiResponse for GetCurrentNotesApi: ",
      backendResponse
    );

    return {
      status: backendResponse.status,
      data: backendResponse.data.data, // Return the full data object
    };
  } catch (err) {
    console.log("Err in Getting Current Notes Api: ", err.message);
    return {
      status: err.response?.status || 500,
      data: err.response?.data || {},
      message: err.message,
    };
  }
};

export { GetCurrentNotesApi };
