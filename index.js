const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'js')
    .get('index.html', (req, res) => res.render('/index'))
    .get('map2.html', (req, res) => res.render('/carte'))
    //.get('/about', (req, res) => res.render('pages/index2-about'))
    //.get('/how', (req, res) => res.render('pages/how'))
    //.get('/guide', (req, res) => res.render('pages/guide'))
    //.get(/styles/v1/'revyrob'/'mapbox://styles/revyrob/ckavkxl2pdm6f1iqtkary62a9'/wtms)
    // .get('/map', (req, res) => res.sendFile(path.join(__dirname + '/views/qgis/map.html')))

    .listen(PORT, () => console.log(`Listening on ${PORT}`))
