var Clock = function(container){

        this.tickElem = document.createElement('div');
        this.tickElem.classList.add('clock');
        this.tickElem.id = 'clock';

        this.dateElem = document.createElement('div');
        this.dateElem.classList.add('dateElem');
        this.dateElem.id = 'date';

        container.appendChild(this.tickElem);
        container.appendChild(this.dateElem);

};

Clock.prototype.formatTime = function(date){

        var hours = this.time.getHours();
        var minutes = this.time.getMinutes();
        var seconds = this.time.getSeconds();

        if(hours === 0) {
            hours = '12';
        }
        if(hours < 10) {
            hours = '0' + hours
        }
        if(hours > 12) {
            hours = hours - 12;
        }
        if(minutes < 10) {
            minutes = ':0' + minutes
        } else {
            minutes = ':' + minutes
        }
        if(seconds < 10) {
            seconds = ':0' + seconds
        } else {
            seconds = ':' + seconds
        }

        return hours + minutes + seconds;

};

Clock.prototype.formatDate = function() {
      var dayOfWeek = this.time.getDay();
      var month = this.time.getMonth();
      var year = this.time.getFullYear();
      var dayOfMonth = this.time.getDate();

      switch (dayOfWeek) {
        case 0:
            dayOfWeek = "Sunday";
            break;
        case 1:
            dayOfWeek = "Monday";
            break;
        case 2:
            dayOfWeek = "Tuesday";
            break;
        case 3:
            dayOfWeek = "Wednesday";
            break;
        case 4:
            dayOfWeek = "Thursday";
            break;
        case 5:
            dayOfWeek = "Friday";
            break;
        case 6:
            dayOfWeek = "Saturday";
      }
      switch (month) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
          month = "July";
            break;
        case 7:
          month = "July";
            break;
        case 8:
          month = "August";
            break;
        case 9:
          month = "September";
            break;
        case 10:
          month = "October";
            break;
        case 11:
          month = "Novermber";
            break;
        case 12:
          month = "December";
            break;
      }
        return dayOfWeek + ', '  +  month + '\n ' + '  ' + dayOfMonth + ' ' + year;
    };


Clock.prototype.update = function(){
        this.time = new Date();
        this.tickElem.innerHTML = '<div class="date">'+this.formatTime(this.time)+'</div>';
        this.dateElem.innerHTML = '<div class="clock">'+this.formatDate(this.time)+'</div>';
};
