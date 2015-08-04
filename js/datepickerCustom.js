/**
 * Created by nhuuduong on 7/21/15.
 */
$(document).ready(function() {
    $('#datePickerFrom')
        .datepicker({
            format: 'mm/dd/yyyy'
        })
        .on('changeDate', function(e) {
            // Revalidate the date field
            $('#reverseForm').formValidation('revalidateField', 'date');
        });

    $('#datePickerTo')
        .datepicker({
            format: 'mm/dd/yyyy'
        })
        .on('changeDate', function(e) {
            // Revalidate the date field
            $('#reverseForm').formValidation('revalidateField', 'date');
        });
});