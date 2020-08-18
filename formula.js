var FV = function (r, n, pmt, pv, type) {
    // Credits: algorithm inspired by Apache OpenOffice

    // Initialize type
    type = (typeof type === 'undefined') ? 0 : type;

    // Evaluate rate (TODO: replace with secure expression evaluator)
    r = eval(r);

    // Return future value
    var result;
    if (r === 0) {
        result = pv + pmt * n;
    } else {
        var term = Math.pow(1 + r, n);
        if (type === 1) {
            result = pv * term + pmt * (1 + r) * (term - 1.0) / r;
        } else {
            result = pv * term + pmt * (term - 1) / r;
        }
    }
    return -result;
};

var PMT = function (r, n, pv, fv, type) {
    var q = Math.pow(1 + r, n);
    return -(r * (fv + q * pv)) / ((-1 + q) * (1 + r * type));
};


/*
var CUMIPMT = function (r, n, pv, start, end, type) {
    // Credits: algorithm inspired by Apache OpenOffice
    // Credits: Hannes Stiebitzhofer for the translations of function and variable names
    // Requires Formula.FV() and Formula.PMT() from Formula.js [http://stoic.com/formula/]

    // Evaluate rate and periods (TODO: replace with secure expression evaluator)
    //r = eval(r);
    //n = eval(n);

    // Return error if either rate, periods, or value are lower than or equal to zero
    if (r <= 0 || n <= 0 || pv <= 0) {
        return '#NUM!';
    }

    // Return error if start < 1, end < 1, or start > end
    if (start < 1 || end < 1 || start > end) {
        return '#NUM!';
    }

    // Return error if type is neither 0 nor 1
    if (type !== 0 && type !== 1) {
        return '#NUM!';
    }

    // Compute cumulative interest
    var payment = PMT(r, n, pv, 0, type);
    var interest = 0;

    if (start === 1) {
        if (type === 0) {
            interest = -pv;
        }
        start++;
    }

    for (var i = start; i <= end; i++) {
        if (type === 1) {
            interest += (FV(r, i - 2, payment, pv, 1) - payment) * r;
        } else {
            interest += FV(r, i - 1, payment, pv, 0) * r;
        }
    }

    // Return cumulative interest
    return interest;
};
*/
/* New Method from Java Code */
var CUMIPMT = function(rate, periods, value, start, end,type) {

		// Compute cumulative principal
		var payment = calculatePayment(rate, periods, value, 0);
		var interest = 0;
		if (start == 1) {
			interest = -value;
			start++;
		}
		for (var i = start; i <= end; i++) {
			interest += fv(rate, i - 1, payment, value);
		}
		interest *= rate;
		// Return cumulative interest
		return interest;
	}

var calculatePayment = function(rate, periods, present, future) {

		var result = 0;
		if (rate != 0) {
			var term = Math.pow(1 + rate, periods);
			result = future * rate / (term - 1) + present * rate / (1 - 1 / term);
		} else {
			result = (present + future) / periods;
		}
		return -result;
	}

var fv = function(rate, periods, payment, value) {

		var result = 0;
		if (rate != 0) {
			var term = Math.pow(1 + rate, periods);
			result = value * term + payment * (term - 1) / rate;
		} else {
			result = value + payment * periods;
		}
		return -result;
	}

/** End of Java Code **/
/*
var CUMPRINC = function (r, n, pv, start, end, type) {
    // Credits: algorithm inspired by Apache OpenOffice
    // Credits: Hannes Stiebitzhofer for the translations of function and variable names
    // Requires Formula.FV() and Formula.PMT() from Formula.js [http://stoic.com/formula/]

    // Evaluate rate and periods (TODO: replace with secure expression evaluator)
    r = eval(r);
    n = eval(n);

    // Return error if either rate, periods, or value are lower than or equal to zero
    if (r <= 0 || n <= 0 || pv <= 0) {
        return '#NUM!';
    }

    // Return error if start < 1, end < 1, or start > end
    if (start < 1 || end < 1 || start > end) {
        return '#NUM!';
    }

    // Return error if type is neither 0 nor 1
    if (type !== 0 && type !== 1) {
        return '#NUM!';
    }

    // Compute cumulative principal
    var payment = PMT(r, n, pv, 0, type);
    var principal = 0;
    var interest = 0;
    if (start === 1) {
        if (type === 0) {
            principal = payment + pv * r;
        } else {
            principal = payment;
        }
        start++;
    }
    for (var i = start; i <= end; i++) {
        if (type > 0) {
            principal += payment - (FV(r, i - 2, payment, pv, 1) - payment) * r;
        } else {
            principal += payment - FV(r, i - 1, payment, pv, 0) * r;
        }
    }

    // Return cumulative principal
    return principal;
};
*/

/** Created CumPrincipal from Java Code */

var CUMPRINC = function (rate, periods, value, start, end, type) {

		// Compute cumulative principal
		payment = calculatePayment(rate, periods, value, 0);
		principal = 0;
		if (start == 1) {
			principal = payment + value * rate;
			start++;
		}
		for (var i = start; i <= end; i++) {
			principal += payment - fv(rate, i - 1, payment, value) * rate;
		}
		// Return cumulative principal
		return principal;
	}
/** END **/
var numberWithCommas =function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
