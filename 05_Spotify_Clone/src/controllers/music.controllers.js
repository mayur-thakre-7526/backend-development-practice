const musicModel = require("../models/music.model.js");
const jwt = require("jsonwebtoken");
const { uploadFile } = require("../services/storage.service.js");
const albumModel = require("../models/album.model.js");

async function createMusic(req, res) {
  const title = req.body.title;
  const file = req.file;

  const result = await uploadFile(file.buffer.toString("base64"));

  const music = await musicModel.create({
    url: result.url,
    title: title,
    artist: req.user.id,
  });

  res.status(201).json({
    message: "Music created successfully",
    music: {
      id: music._id,
      url: music.url,
      title: music.title,
      artist: music.artist,
    },
  });
}

async function createAlbum(req, res) {
  const { title, musics } = req.body;

  const album = await albumModel.create({
    title: title,
    musics: musics,
    artist: req.user.id,
  });

  res.status(201).json({
    message: "Album created Successfully.",
    album: {
      id: album._id,
      title: album.title,
      musics: album.musics,
      artist: album.artist,
    },
  });
}

async function getAllMusics(req, res) {
  const allMusics = await musicModel.find().skip(1).limit(3).populate();

  res.status(200).json({
    message: "musics fetched successfully",
    musics: allMusics,
  });
}

async function getAllAlbums(req, res) {
  const allAlbums = await albumModel
    .find()
    .select("title artist")
    .populate("artist", "username email");

  res.status(200).json({
    message: "Albums Fetched successfully",
    albums: allAlbums,
  });
}

async function getAlbum(req, res) {
  const Id = await req.params.albumId;

  const album = await albumModel
    .findById(Id)
    .populate("artist", "username email")
    .populate("musics");

  return res.status(200).json({
    message: "Album find successfully",
    album: album,
  });
}

module.exports = {
  createMusic,
  createAlbum,
  getAllMusics,
  getAllAlbums,
  getAlbum,
};
