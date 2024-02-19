const currentTime = document.getElementById('current-time')

function updateCurrentTime() {
    const now = new Date()
    const formattedTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
    const formattedDate = now.toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    })

    currentTime.innerHTML = `<span class="time">${formattedTime}</span> <span class="date">${formattedDate}</span>`
}

// Call the function to update the time immediately
updateCurrentTime()

// Update the time every second (1000 milliseconds)
setInterval(updateCurrentTime, 1000)
