$(function () {

    const getTemplate = function (show) {
        let image = show.image ? show.image.medium : ''
        return `<div class="card card-show mb-3">
            <div class="card-header">
                <h4 class="card-title">${show.name}</h4>
            </div>
            <div class="card-body">
                <div class="media">
                    <img class="align-self-center mr-5" src="${image}">
                    <div class="media-body">
                        <p class="card-text">${show.summary}</p>
                        <a href="#" class="btn btn-primary">Ver más</a>
                    </div>
                </div>
            </div>
        </div>`
    }

    const renderShow = function(shows) {
        shows.forEach(function (show) {
            let content = getTemplate(show)
            $contentShow = $('.shows')
            $contentShow.append(content)
        })
    }

    const getShow = function (query) {
        $.ajax({
            url: 'http://api.tvmaze.com/search/shows',
            data: { q: query },
        }).done(function (data) {
                $('.loader').hide()
                let shows = data.map(function (content) {
                    return content.show
                })
                renderShow(shows)
        }).fail(function (jqXHR, textStatus) {
            $('.loader').hide()
        }).always(function () {

        })
    }

    $('#search').on('submit',function (e) {
        e.preventDefault()
        $('.shows').find('.card-show').remove()
        $('.loader').show()
        let query = $('#txtShow').val()
        getShow(query)
    })

})
