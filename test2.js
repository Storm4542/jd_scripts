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

const $ = new Env('share')
const https = require('https');
const bean = ['olmijoxgmjutzhqtdcpctdmuglb7lszrvuz3uzq', 'cc7z63mcvhbj676szck73nj2ntjy27s7puyiu4q', 'olmijoxgmjutzyme3eelxzcl3o2h5yfpxyhctgq', 'b2zjxbljwtawvatmcnwjgtaownntgqh2srmdmlq'];
const pet = ['MTAxODc2NTEzMzAwMDAwMDAwNzQ0NDIzMw==', 'MTAxODc2NTEzMjAwMDAwMDAwNTI2NDUxMw==', 'MTAxODc2NTEzMTAwMDAwMDAwNzUzMDYwMw==', 'MTAxODc2NTEzMDAwMDAwMDAxMzc5MjEyNw=='];
const farm = ['f9fc34ec2f214819bd9b33927f25c7ac', '551ce880b3554bc6af1250329eddb37a', '78262e1e45ff41f495fe3849e3d9ddf8', '7d557d2182c8499c80e83f0be84f31f3'];
const jdFactory = ['P04z54XCjVWnYaS5m9cZ2au2ioclYcl6-sKyQ0', 'P04z54XCjVWnYaS5m9cZ2aqi34Yk9n0nM2q98I', 'P04z54XCjVWnYaS5nJcTTSGuCAcxP8kZ0Q-', 'P04z54XCjVWnYaS5nJcXii5jzg84pfonf_d'];
const jxFactory = ['j0TLAjroou5W19YWExJgLA==', '0eyZM20kWXPj3KVmJlYgdg==', 'noghBKlnMTX7okfP799QFw==', 'ODJzUDFUJEW8hRhput3uUg=='];
const zz = ['AUWE5mfuXm2MIC2P-jn5JlA', 'AUWE5mf_Gz2cOC2f-3H5KxA', 'ATGETy9P1kWNZTwCSvSs', 'ATGEA1-zCiUN_TQC7gTw'];


for (let i = 0; i < zz.length; i++) {
    let url = 'https://code.chiang.fun/api/v1/jd/jdzz/create/' + zz[i]
    $.get(url, (err, res, data) => {
        if (err) {
            console.log('zz失败');
        } else {
            if (data) {
                console.log('zz成功');
            }
        }
    })

}

for (let i = 0; i < bean.length; i++) {
    let url = 'http://api.turinglabs.net/api/v1/jd/jxfactory/create/' + jxFactory[i]
    $.get({
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
    $.get({
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
    $.get({
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
    $.get({
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


function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, o) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                o = o ? 1 * o : 20, o = e && e.timeout ? e.timeout : o;
                const [r, h] = i.split("@"), a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: o
                    },
                    headers: {
                        "X-Key": r,
                        Accept: "*/*"
                    }
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    o = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let o = t;
            for (const t of i)
                if (o = Object(o)[t], void 0 === o) return s;
            return o
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), o = s ? this.getval(s) : "";
                if (o) try {
                    const t = JSON.parse(o);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e), r = this.getval(i), h = i ? "null" === r ? null : r || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, o, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const r = {};
                    this.lodash_set(r, o, t), s = this.setval(JSON.stringify(r), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }) : this.isQuanX() ? $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: o,
                    body: r
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: o,
                    body: r
                }, r)
            }, t => e(t)) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                    this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: o,
                    body: r
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: o,
                    body: r
                }, r)
            }, t => e(t)))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = "POST", $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: o,
                    body: r
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: o,
                    body: r
                }, r)
            }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: o,
                        body: r
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: o,
                        body: r
                    }, r)
                }, t => e(t))
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", o) {
            const r = t => {
                if (!t || !this.isLoon() && this.isSurge()) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, r(o)) : this.isQuanX() && $notify(e, s, i, r(o)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
