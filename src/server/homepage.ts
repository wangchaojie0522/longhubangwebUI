/*
 * @Author: chaojiewang chaojiewang@deepglint.com
 * @Date: 2023-07-10 09:57:21
 * @LastEditors: chaojiewang chaojiewang@deepglint.com
 * @LastEditTime: 2023-08-30 14:24:06
 * @FilePath: /longhubangWebUI/src/server/homepage.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import  axios from '@/axios/axios';
const Gupiao_url = '/api/gupiao/'
const GupiaoRL_url = '/api/gupiao/reload/'
const Gupiao_API = {
    Get(params={}) {
        return axios.get(Gupiao_url, {params})
    },
    Post(params={}) {
        return axios.post(Gupiao_url,params)
    },
    Put(params={}) {
        return axios.put(Gupiao_url, params)
    },
    Delete(params={}) {
        return axios.delete(Gupiao_url , {params})
    },
}
const GupiaoRL_API = {
    Post() {
        return axios.post(GupiaoRL_url)
    }
}
export {
    Gupiao_API,
    GupiaoRL_API,
}