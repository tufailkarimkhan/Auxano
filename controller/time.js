const moment = require("moment")
exports.timePage = async (req, res) => {
    res.render("form", { error: null,data:null })
}

exports.time = async (req, res) => {
    let { startTime, endTime } = req.body

    function isValidTime(duration) {
        let [hours, minutes, seconds] = duration.split(':')

        if ((hours >= 0 && hours < 24) && (minutes >= 0 && minutes < 60) && (seconds >= 0 && seconds < 60)) {
            return true
        } else {
            return false
        }
    }

    if (!isValidTime(startTime)) {
        res.render("form", { error: 'Start time invalid Please Use HH:MM:SS' })
    }
    if (!isValidTime(endTime)) {
        res.render("form", { error: 'End time invalid Please Use HH:MM:SS' })
    }

    let [startHours, startMinutes, startSeconds] = startTime.split(':')
    let [endHours, endMinutes, endSeconds] = endTime.split(':')

    let starting = new Date()
    let ending = new Date()
    
    starting.setHours(startHours, startMinutes, startSeconds)
    ending.setHours(endHours, endMinutes, endSeconds)

    let intervalId = setInterval(() => {
        let duration = moment(starting).format('hh:mm:ss')
        let endingDuration = moment(ending).format('hh:mm:ss');
        
        if (duration == endingDuration) {
            res.render("form", { error: null })
            clearInterval(intervalId)
        }
        
        let durationString = duration.replaceAll(":", '')
        const uniqueElements = new Set([...durationString])
        if (uniqueElements.size <= 2) {
            console.log(duration)
        }
        starting.setSeconds(starting.getSeconds() + 1)

    }, 1000)
}





