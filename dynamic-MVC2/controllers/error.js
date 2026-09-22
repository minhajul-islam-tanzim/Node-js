exports.error = (req, res, next) => {
    res.status(404).render('404', {pageTitle: 'page not coming',value:404})
}