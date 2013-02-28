(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* Το πεδίο είναι υποχρεωτικό",
                    "alertTextCheckboxMultiple": "* Παρακαλώ διαλέξτε μία επιλογή",
                    "alertTextCheckboxe": "* Η επιλογή είναι απαραίτητη",
                    "alertTextDateRange": "* Και οι δύο ημερομηνίες είναι απαραίτητες"
                },
                "requiredInFunction": { 
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* Το πεδίο πρέπει να ισούται με test"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* Μη έγκυρο ",
                    "alertText2": "ημερολογιακό διάστημα"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* Μη έγκυρο ",
                    "alertText2": "χρονικό διάστημα"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* Ελάχιστο πλήθος χαρακτήρων ",
                    "alertText2": " "
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Μέγιστο πλήθος χαρακτήρων ",
                    "alertText2": " "
                },
  			"groupRequired": {
                    "regex": "none",
                    "alertText": "* Πρέπει να συμπληρώσετε ένα από τα ακόλουθα πεδία"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* Ελάχιστη τιμή είναι "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* Μέγιστη τιμή είναι "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Ημερομηνία πριν από την "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Ημερομηνία παρελθούσα της "
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Μέγιστο ",
                    "alertText2": " επιτρεπόμενες επιλογές"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Παρακαλώ διαλέξτε ",
                    "alertText2": " επιλογή(ές)"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* Τα πεδία δεν ταιριάζουν"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* Μη έγκυρος αριθμός πιστωτικής"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}[\ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9\ \.\-\/]{3,20})((x|ext|extension)[\ ]?[0-9]{1,4})?$/,
                    "alertText": "* Μη έγκυρος τηλεφωνικός αριθμός"
                },
                "email": {
                    // HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#    e-mail-state-%28type=email%29 )
                    "regex": /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    "alertText": "* Μη έγκυρη διεύθυνση email"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* Μη έγκυρος ακέραιος"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* Μη έγκυρος δεκαδικός αριθμός"
                },
                "date": {                    
                    //	Check if date is valid by leap year
			"func": function (field) {
					var pattern = new RegExp(/^(\d{4})[\/\-\.](0?[1-9]|1[012])[\/\-\.](0?[1-9]|[12][0-9]|3[01])$/);
					var match = pattern.exec(field.val());
					if (match == null)
					   return false;
	
					var year = match[1];
					var month = match[2]*1;
					var day = match[3]*1;					
					var date = new Date(year, month - 1, day); // because months starts from 0.
	
					return (date.getFullYear() == year && date.getMonth() == (month - 1) && date.getDate() == day);
				},                		
			 "alertText": "* Μη έγκυρη ημερομηνία, πρέπει να είναι της μορφής YYYY-MM-DD"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* Μη έγκυρη διεύθυνση IP"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* Μη έγκυρο URL"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Μόνο αριθμοί"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Μόνο γράμματα"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* Δεν επιτρέπονται ειδικοί χαρακτήρες"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* Ο χρήστης ήδη χρησιμοποιείται",
                    "alertTextLoad": "* Επικύρωση, παρακαλώ περιμένετε"
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* Το username δεν είναι διαθέσιμο",
                    "alertText": "* Το όνομα είναι ήδη κατειλημμένο",
                    "alertTextLoad": "* Επικύρωση, παρακαλώ περιμένετε"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* This name is already taken",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This name is available",
                    // speaks by itself
                    "alertTextLoad": "* Επικύρωση, παρακαλώ περιμένετε"
                },
				 "ajaxNameCallPhp": {
	                    // remote json service location
	                    "url": "phpajax/ajaxValidateFieldName.php",
	                    // error
	                    "alertText": "* Το όνομα είναι ήδη κατειλημμένο",
	                    // speaks by itself
	                    "alertTextLoad": "* Επικύρωση, παρακαλώ περιμένετε"
	                },
                "validate2fields": {
                    "alertText": "* Παρακαλώ εισάγετε HELLO"
                },
	            //tls warning:homegrown not fielded 
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* Μη έγκυρη ημερομηνία"
                },
                //tls warning:homegrown not fielded 
				"dateTimeFormat": {
	                "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "* Μη έγκυρη ημερομηνία / ώρα",
                    "alertText2": "Επριτρεμόμενο φορμά: ",
                    "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM or ", 
                    "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
	            }
            };
            
        }
    };

    $.validationEngineLanguage.newLang();
    
})(jQuery);
