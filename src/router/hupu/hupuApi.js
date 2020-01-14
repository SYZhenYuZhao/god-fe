import { post } from 'utils/axios'
import { REPTITLE_HUPU_URL } from 'constants/url'

export const getAllData = async (params) => {
    let res = await post(REPTITLE_HUPU_URL, params).then(res => {
        return res.data
    })
    return res
}