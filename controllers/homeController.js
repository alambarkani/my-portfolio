const index = (req, res) => {
    res.render('home/index', {title: 'Home'})
}

export default{
    index
}