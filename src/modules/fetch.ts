import axios from 'axios'

const fetchCommon = (fetchObj: any) => async (dispatch: any, getState: any) => {
  console.warn('--fetchObj--', fetchObj)
  try {
    const result = await axios(fetchObj)
  } catch (error) {
    
  }
}

export default fetchCommon
