$(document).ready(function() {
    $('#date').bootstrapMaterialDatePicker({
        time: false,
        clearButton: true,
        minDate: new Date('1900-01-01'),
        maxDate: new Date('2025-12-31'),
        currentDate: new Date('2022-11-17'),
        switchOnClick: true
    });
});