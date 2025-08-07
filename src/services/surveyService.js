import surveyRepository from "../repositories/surveyRepository";

export default {
    async getUser(id){
        try{
            const user = await surveyRepository.getUser(id);
            return user;
        }catch (error) {
            console.error("Error fetching user:", error);
            throw new Error("Could not retrieve user data");
        }
    },

    async sendSurvey(data) {
    try {
      return await surveyRepository.createSurvey(data)
    } catch (error) {
      console.error('🔥 DETAIL ERROR:', {
        response: error.response?.data,
        status: error.response?.status,
        message: error.message,
        full: error,
      })
      throw new Error("Could not send survey")
    }
  }
}