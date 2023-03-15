function showDateTime() {
    var now = new Date();
    var dateOptions = { day: 'numeric', month: 'numeric', year: 'numeric' };
    var timeOptions = { hour: 'numeric', minute: 'numeric'};
    var date = now.toLocaleDateString('en-GB', dateOptions);
    var time = now.toLocaleTimeString('en-US', timeOptions);
    document.getElementById('date').innerHTML = date;
    document.getElementById('time').innerHTML = time;
    document.getElementById('datetime-widget').classList.add('fade-in');
  }

  setInterval(showDateTime, 1000);