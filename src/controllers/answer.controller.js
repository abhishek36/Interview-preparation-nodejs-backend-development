//import Answer model here

const addAnswer = async (req, res) => {
  //addAnswer api logic here
};

const getAnswerByQuestionId = async (req, res) => {
  //getAnswerByQuestionId api logic here
};

const getAnswerById = async (req, res) => {
  //getAnswerById api logic here
};

const updateAnswerById = async (req, res) => {
  //updateAnswerById api logic here
};

const deleteAnswerById = async (req, res) => {
  //deleteAnswerById api logic here
};

const AnswerController = {
  addAnswer,
  getAllAnswer,
  getAnswerByQuestionId,
  getAnswerById,
  updateAnswerById,
  deleteAnswerById,
};
module.exports = AnswerController;
