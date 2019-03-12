import axios from 'axios'

const fetchCommon = (fetchObj: any) => async (dispatch: any, getState: any) => {
  console.warn('--fetchObj--', fetchObj)
  console.warn(dispatch, getState)
  try {
    const result = await axios(fetchObj)
    console.warn(result)
  } catch (error) {

  }
}

export default fetchCommon
