$(function () {

    const getShow = function (query) {

    }

    $('#search').on('submit', function (e) {
        e.preventDefault()
        $('.loader').show()
        let query = $('#txtShow').val()
    })
})
