import { post } from 'utils/axios'
import { ALL_URL } from 'constants/url'

export const getAllData = async (params) => {
    let res = await post(ALL_URL, params).then(res => {
        return res.data
    })
    return res
}