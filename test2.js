/** 种豆
 http://api.turinglabs.net/api/v1/jd/bean/create/互助码/
 http://api.turinglabs.net/api/v1/jd/bean/count/

 农场
 http://api.turinglabs.net/api/v1/jd/farm/create/互助码/
 http://api.turinglabs.net/api/v1/jd/farm/count/

 萌宠
 http://api.turinglabs.net/api/v1/jd/pet/create/互助码/
 http://api.turinglabs.net/api/v1/jd/pet/count/
 */

const {
    get
} = require("request");
const https = require('https');
const bean = ['olmijoxgmjutzhqtdcpctdmuglb7lszrvuz3uzq', 'cc7z63mcvhbj676szck73nj2ntjy27s7puyiu4q', 'olmijoxgmjutzyme3eelxzcl3o2h5yfpxyhctgq', 'b2zjxbljwtawvatmcnwjgtaownntgqh2srmdmlq'];
const pet = ['MTAxODc2NTEzMzAwMDAwMDAwNzQ0NDIzMw==', 'MTAxODc2NTEzMjAwMDAwMDAwNTI2NDUxMw==', 'MTAxODc2NTEzMTAwMDAwMDAwNzUzMDYwMw==', 'MTAxODc2NTEzMDAwMDAwMDAxMzc5MjEyNw=='];
const farm = ['f9fc34ec2f214819bd9b33927f25c7ac', '551ce880b3554bc6af1250329eddb37a', '78262e1e45ff41f495fe3849e3d9ddf8', '7d557d2182c8499c80e83f0be84f31f3'];
const jdFactory = ['P04z54XCjVWnYaS5m9cZ2au2ioclYcl6-sKyQ0', 'P04z54XCjVWnYaS5m9cZ2aqi34Yk9n0nM2q98I', 'P04z54XCjVWnYaS5nJcTTSGuCAcxP8kZ0Q-', 'P04z54XCjVWnYaS5nJcXii5jzg84pfonf_d'];
const jxFactory = ['j0TLAjroou5W19YWExJgLA==', '0eyZM20kWXPj3KVmJlYgdg==', 'noghBKlnMTX7okfP799QFw==', 'ODJzUDFUJEW8hRhput3uUg=='];
const zz = ['AUWE5mfuXm2MIC2P-jn5JlA', 'AUWE5mf_Gz2cOC2f-3H5KxA', 'ATGETy9P1kWNZTwCSvSs', 'ATGEA1-zCiUN_TQC7gTw'];


for (let i = 0; i < zz.length; i++) {
    let url = 'https://code.chiang.fun/api/v1/jd/jdzz/create/' + zz[i]
    https.get(url, res => {
        res.on('data', (d) => {
            console.log(`赚赚${i}请求成功`)
        });
    }).on('error', e => {
        console.log(`赚赚${i}请求失败`)
    })

}

for (let i = 0; i < bean.length; i++) {
    let url = 'http://api.turinglabs.net/api/v1/jd/jxfactory/create/' + jxFactory[i]
    get({
        url: url
    }, (err, res, data) => {
        if (err) {
            console.log('京喜工厂失败');
        } else {
            if (data) {
                console.log('京喜工厂成功');
            }
        }
    })

}

for (let i = 0; i < bean.length; i++) {
    let url = 'http://api.turinglabs.net/api/v1/jd/ddfactory/create/' + jdFactory[i]
    get({
        url: url
    }, (err, res, data) => {
        if (err) {
            console.log('东东工厂失败');
        } else {
            if (data) {
                console.log('东东工厂成功');
            }
        }
    })

}
for (let i = 0; i < bean.length; i++) {
    let url = 'http://api.turinglabs.net/api/v1/jd/farm/create/' + farm[i]
    get({
        url: url
    }, (err, res, data) => {
        if (err) {
            console.log('农场失败');
        } else {
            if (data) {
                console.log('农场成功');
            }
        }
    })

}

for (let i = 0; i < bean.length; i++) {
    let url = 'http://api.turinglabs.net/api/v1/jd/pet/create/' + pet[i]
    get({
        url: url
    }, (err, res, data) => {
        if (err) {
            console.log('萌宠失败');
        } else {
            if (data) {
                console.log('萌宠成功');
            }
        }
    })

}

for (let i = 0; i < bean.length; i++) {
    let url = 'http://api.turinglabs.net/api/v1/jd/bean/create/' + bean[i]
    get({
        url: url
    }, (err, res, data) => {
        if (err) {
            console.log('种豆得豆失败');
        } else {
            if (data) {
                console.log('种豆得成功');
            }
        }
    })

}
