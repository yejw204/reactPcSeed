/**
 * Created by K0240001 on 2017/7/17.
 */
exports.response = function (req, res) {
    return {
         "data": [
        {
            "name": '2011年',
            "type": 'bar',
            "data": [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
            "name": '2012年',
            "type": 'bar',
            "data": [19325, 23438, 31000, 121594, 134141, 681807]
        },
    ],
    }
}

