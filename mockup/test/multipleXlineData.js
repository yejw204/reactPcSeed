/**
 * Created by K0240001 on 2017/7/17.
 */
exports.response = function (req, res) {
    return {
        "data" : [
            {
                "name": '2015 降水量',
                "type": 'line',
                "xAxisIndex": 1,
                "smooth": true,
                 "data": [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            },
            {
                "name": '2016 降水量',
                "type": 'line',
                "smooth": true,
                "data": [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7],
            },
        ]
    }
}

