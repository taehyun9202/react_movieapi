const MovieList = require('../models/MovieLists.models');

class ListController{
    getAll(req, res){
        MovieList.find({}).sort("-likes").exec()
            .then(movies => res.json(movies))
            .catch(err => res.json(err));
    }

    add(req, res){
        const newMovie = new MovieList(req.body);
        newMovie.save()
            .then(() => res.json({msg: "Movie added"}))
            .catch(err => res.json(err));
    }
    // getOne(req, res){
    //     Wall.findOne({_id: req.params._id})
    //         .then(post => res.json(post))
    //         .catch(err => res.json(err));
    // }
    delete(req, res){
        List.findOneAndDelete({_id: req.params._id})
            .then(() => res.json({msg: "Deleted "}))
            .catch(err => res.json(err));
    }
    // update(req, res){
    //     Wall.findOneAndUpdate({_id: req.params._id}, req.body, {runValidators: true, context: 'query'})
    //         .then( () => res.json({msg: "Updated "}))
    //         .catch(err => res.json(err));
    // }
}

module.exports = new ListController();