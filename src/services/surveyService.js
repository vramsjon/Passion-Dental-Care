import surveyRepository from '../repositories/surveyRepository'

async function getQuestionsByUserId(uuid) {
  try {
    return await surveyRepository.getQuestionsByUserId(uuid)
  } catch (error) {
    console.error('Error fetching user questions:', error)
    throw new Error('Could not retrieve question data')
  }
}

async function submitSurveyAnswers(uuid, answers, questionBank) {
  try {
    const res = await surveyRepository.submitSurveyAnswers(uuid, answers, questionBank)
    return res.data?.value // rata-rata rating
  } catch (error) {
    console.error('Error submitting survey answers:', error.response?.data || error.message)
    throw new Error(
      error.response?.data?.message || error.message || 'Could not submit survey answers',
    )
  }
}


export default {
  getQuestionsByUserId,
  submitSurveyAnswers,
}
