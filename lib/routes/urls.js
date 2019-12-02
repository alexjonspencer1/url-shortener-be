const { Router } = require('express');
const Urls = require('../model/Urls');
const shortid = require('shortid');
// const validUrl = require('valid-url');
const shortBaseUrl = 'http://localhost';
const errorUrl = 'http://localhost:7891/error';

module.exports = Router()
  .post('/', (req, res, next) => {
    const { originalUrl } = req.body;
    console.log(req);
    const urlCode = shortid.generate();
    const shortUrl = `${shortBaseUrl}/${urlCode}`;
    Urls
      .create({ originalUrl, urlCode, shortUrl, user: req.user._id })
      .then(shortenedUrl => res.send(shortenedUrl))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const urlId = req.params.id;
    Urls
      .findOne({ urlCode: urlId })
      .then(shortenedUrl => {
        if(shortenedUrl) return res.redirect(shortenedUrl.originalUrl);
        else return res.redirect(errorUrl);
      })
      .catch(next);
  });