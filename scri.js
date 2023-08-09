$(document).ready(function () {
    let currentInput = '';

    $('.number').click(function () {
        currentInput += $(this).text();
        $('#result').val(currentInput);
    });

    $('#add').click(function () {
        currentInput += '+';
        $('#result').val(currentInput);
    });

    $('#subtract').click(function () {
        currentInput += '-';
        $('#result').val(currentInput);
    });

    $('#multiply').click(function () {
        currentInput += '*';
        $('#result').val(currentInput);
    });

    $('#divide').click(function () {
        currentInput += '/';
        $('#result').val(currentInput);
    });

    $('#power').click(function () {
        currentInput += '^';
        $('#result').val(currentInput);
    });

    $('#sqrt').click(function () {
        currentInput = Math.sqrt(currentInput);
        $('#result').val(currentInput);
    });

    $('#percent').click(function () {
        currentInput = parseFloat(currentInput) / 100;
        $('#result').val(currentInput);
    });

    $('#clear').click(function () {
        currentInput = '';
        $('#result').val(currentInput);
    });

    $('#calculate').click(function () {
        try {
            currentInput = eval(currentInput);
            $('#result').val(currentInput);
        } catch (e) {
            $('#result').val('Error');
        }
    });
});
