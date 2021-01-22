// https://github.com/emranHkhan/Assignment-3


// ----KilometerToMeter----

function KilometerToMeter(kilometer) {
  
    if ( kilometer <= 0) {
        return ("Can't convert it. Input must be greater than 0");
    }

    else {
        return kilometer * 1000; //1km = 1000m
    }

}


// -------budgetCalculator-------

function budgetCalculator(watch,mobile,laptop) {
    
    if ( watch <= 0 || mobile <= 0 || laptop <= 0) {
        return ('You have to buy minimum 1 of each item');
    }

    else {
        return (watch * 50 + mobile * 100 + laptop * 500);
    }
}



// --------hotelCost-------

function hotelCost(days) {
    var firstTenDays = 1000;
    var secondTendDays = 800;
    if ( days <= 0) {
        return ('You have to stay at least 1 day');
    }
    else {
        if ( days <= 10 ) {
            return (days * 100);
        }

        else if ( days > 10 && days <= 20) {
            return (firstTenDays + (days-10) * 80);
        }

        else {
            return (firstTenDays + secondTendDays + (days - 20) * 50);
        }
    }
}



// ------megaFriend------

function megaFriend (friends) {
    var firstFriend = friends[0]; //first element of the array
    if ( friends.length == 0 || Array.isArray(friends) == false) {
        return ("You don't have friends");
    }
    else {
        for ( var i = 1; i < friends.length; i++) {
            if ( friends[i].length > firstFriend.length ) {
               firstFriend = friends[i];
            }
        }
        return firstFriend;
    }
}




