var fe = document.forms["Shafayform"]

function validateshafayform() {
    if (fe["fullname"].value == 'abc') {
        alert("fakse user")
        return false
    }

    if (fe['phonenumber'].value.length != 11) {
        alert("fakse user")
        return false
    }

    if (fe['address'].value == 'abc') {
        alert("fakse user")
        return false
    }
    }
