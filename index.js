// Call Function every second

setInterval(setClock, 1000);

function setClock() {
    // Variables for time/day elements

    let date = new Date

    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let month = date.getMonth()
    let day = date.getDate()
    let year = date.getFullYear()
    let dayOfWeek = date.getDay()
    let options = { weekday: 'long'}
    let dayFormat = new Intl.DateTimeFormat('en-US', options).format(dayOfWeek)
    let meridian = ''

    // Set Meridian conditions

    if(hour >= 12) {
        meridian = 'PM'
    } else {
        meridian = 'AM'
    }

    // Convert to standard US Time

    if(hour == 0) {
        hour = 12
    } else {
        if(hour > 12) {
            hour = hour - 12
        }
    }

    // Append 0 to time elements that are less than 10

    // hour
    if(hour < 10) {
        hour = '0' + hour
    }

    if(minutes < 10) {
        minutes = '0' + minutes
    }
    
    if(seconds < 10) {
        seconds = '0' + seconds
    }

    // Add date elements to div
    document.querySelector('.clock-date').innerText = month + ' - ' + day + ' - ' + year + ' ' + dayFormat

    // Add time elements to  div
    document.querySelector('.clock-time').innerText = hour + ' : ' + minutes + ' : ' + seconds + ' ' + meridian
}

