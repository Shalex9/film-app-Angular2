var express = require('express'),
    router  = express.Router(),
    favoritesController  = require("../../server/controllers/favoritesController");

router.get('/getFavoritesList', favoritesController.getFavoritesList);
router.post('/saveFavoriteItem', favoritesController.saveFavoriteItem);
router.get('/getFilmItemById', favoritesController.getFilmItemById);
router.delete('/deleteFavoriteItem', favoritesController.deleteFavoriteItem);


module.exports = router;