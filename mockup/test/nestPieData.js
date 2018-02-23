/**
 * Created by K0240001 on 2017/7/17.
 */
exports.response = function (req, res) {
    return {
         "pieInnerData": [
             { "value": 335, "name": '直达', "selected": true },
             { "value": 679, "name": '营销广告' },
             { "value": 1548, "name": '搜索引擎' }
             ],
        "pieOutData":[
            { "value": 335, "name": '直达' },
            { "value": 310, "name": '邮件营销' },
            { "value": 234, "name": '联盟广告' },
            { "value": 135, "name": '视频广告' },
            { "value": 1048, "name": '百度' },
            { "value": 251, "name": '谷歌' },
            { "value": 147, "name": '必应' },
            { "value": 102, "name": '其他' },
        ]

    }
}

