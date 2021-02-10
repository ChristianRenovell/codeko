export function getSentence(API, categories) {

    return new Promise(function (resolve, reject) {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Cookie", "__cfduid=dd0160345697b415f1a4331afa84428c31612909880");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${API}=${categories}`, requestOptions)
            .then(response => response.text())
            .then(result => resolve(result))
            .catch(error => reject(error));
        }
    )
}