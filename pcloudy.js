const axios = require('axios');
const FormData = require('form-data');
var fs = require('fs');
const email = "rishabh.thakur@pwc.com";
const apiKey = "kt2j4tjjssy4sn4msmz4wpcg";

var authToken;

let pCloudy = async () => {
    let authData = await axios.get('https://rishabh.thakur@pwc.com:kt2j4tjjssy4sn4msmz4wpcg@device.pcloudy.com/api/access', {
    });
    authToken = authData.data.result.token;
    console.log(authToken);
    var data = new FormData();
    data.append('file', fs.createReadStream('/Users/rishabht970/Desktop/FlutterWorkshop/FlutterWidgetsAPI/flutter/api_demo/build/app/outputs/flutter-apk/app-release.apk'));
    data.append('source_type', 'raw');
    data.append('token', 'nct59n9ytfzr3mhn57rpb4tn');
    data.append('filter', 'all');

    var config = {
        method: 'post',
        url: 'https://device.pcloudy.com/api/upload_file',
        headers: {
            ...data.getHeaders()
        },
        data: data,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
    };

    axios(config)
        .then(function (response) {
            var bookingData = JSON.stringify({ "token": authToken, "duration": 30, "id": 319 });

            var bookingConfig = {
                method: 'post',
                url: 'https://device.pcloudy.com/api/book_device',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: bookingData
            };

            axios(bookingConfig)
                .then(function (response) {
                    // console.log(JSON.stringify(response.data));
                    console.log(response.data.result.rid);
                    var installData = JSON.stringify({ 
                    "token": authToken, 
                    "rid": response.data.result.rid, 
                    "filename": "app-release.apk", 
                    "grant_all_permissions": "true" });

                    var installConfig = {
                        method: 'post',
                        url: 'https://device.pcloudy.com/api/install_app',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: installData
                    };

                    axios(installConfig)
                        .then(function (response) {
                            console.log(JSON.stringify(response.data));
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
        .catch(function (error) {
            console.log(error);
        });

}

module.exports = { pCloudy };