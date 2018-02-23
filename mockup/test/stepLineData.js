/**
 * Created by K0240001 on 2017/7/17.
 */
exports.response = function (req, res) {
    return {
        "data" : [
            {
                "name": 'Step Start',
                "type": 'line',
                "step": 'start',
                "data": [120, 132, 101, 134, 90, 230, 210]
            },
            {
                "name": 'Step Middle',
                "type": 'line',
                "step": 'middle',
                "data": [220, 282, 201, 234, 290, 430, 410]
            },
            {
                "name": 'Step End',
                "type": 'line',
                "step": 'end',
                "data": [450, 432, 401, 454, 590, 530, 510]
            },
        ],
    }
}

