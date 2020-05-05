import axios from 'axios'
const popHomeData = {
    "data": {
        "list": [{
            "img": "https://s5.mogucdn.com/mlcdn/c45406/200201_29e1bcb9c1cf13a9g8dk0bh6lkiik_1080x1611.jpg_600x800.v1cAC.81.webp",
            "title": '测试',
            "price": 88,
            "collectCount":20,
            "id": 1
        },{
            "img": "https://s5.mogucdn.com/mlcdn/c45406/200201_29e1bcb9c1cf13a9g8dk0bh6lkiik_1080x1611.jpg_600x800.v1cAC.81.webp",
            "title": '测试',
            "price": 88,
            "collectCount":20,
            "id": 2
        },{
            "img": "https://s5.mogucdn.com/mlcdn/c45406/200201_29e1bcb9c1cf13a9g8dk0bh6lkiik_1080x1611.jpg_600x800.v1cAC.81.webp",
            "title": '测试',
            "price": 88,
            "collectCount":20,
            "id": 1
        },{
            "img": "https://s5.mogucdn.com/mlcdn/c45406/200201_29e1bcb9c1cf13a9g8dk0bh6lkiik_1080x1611.jpg_600x800.v1cAC.81.webp",
            "title": '测试',
            "price": 88,
            "collectCount":20,
            "id": 2
        },{
            "img": "https://s5.mogucdn.com/mlcdn/c45406/200201_29e1bcb9c1cf13a9g8dk0bh6lkiik_1080x1611.jpg_600x800.v1cAC.81.webp",
            "title": '测试',
            "price": 88,
            "collectCount":20,
            "id": 1
        },{
            "img": "https://s5.mogucdn.com/mlcdn/c45406/200201_29e1bcb9c1cf13a9g8dk0bh6lkiik_1080x1611.jpg_600x800.v1cAC.81.webp",
            "title": '测试',
            "price": 88,
            "collectCount":20,
            "id": 2
        },{
            "img": "https://s5.mogucdn.com/mlcdn/c45406/200201_29e1bcb9c1cf13a9g8dk0bh6lkiik_1080x1611.jpg_600x800.v1cAC.81.webp",
            "title": '测试',
            "price": 88,
            "collectCount":20,
            "id": 1
        },{
            "img": "https://s5.mogucdn.com/mlcdn/c45406/200206_77k140aj3i4b0e0j2723l8592h3ld_810x1080.jpg_600x800.v1cAC.81.webp",
            "title": '测试',
            "price": 88,
            "collectCount":20,
            "id": 2
        },
    ]
    }

}
export function request(config) {
    // 创建axios实例
    const instance = axios.create({
        // baseURL: 'http://123.207.32.32:8000/api/h8',
        baseURL: 'http://106.54.54.237:8000/api/v1',
        timeout: 5000
    })
    // 拦截器请求拦截
    instance.interceptors.request.use(config => {
        return config
    }, err => {

    })

    // 响应拦截
    instance.interceptors.response.use(res => {
        if (config.url == "/home/data") {
            if (config.params.type == 'pop') {
                return popHomeData
            } else if (config.params.type == 'new') {
                return popHomeData
            } else if (config.params.type == 'sell') {
                return popHomeData
            }
        } else {
            return res.data
        }


    }, err => {
    })

    // 发送网络请求
    return instance(config);
}