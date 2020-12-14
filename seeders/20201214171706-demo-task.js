'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */ 
   await queryInterface.bulkInsert('Tasks', [{
    name: 'Cafá da manhã',
    descricao: 'Prepara e tomar o café da manhã',
    prazo: 'Até as 07:30 horas',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    name: 'Trabalhar',
    descricao: 'Fazer a jornada de trabalho de dia',
    prazo: ' Das 08 até as 17 horas',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    name: 'Atender ao meu filho',
    descricao: 'Dar banho e comida no meu filho',
    prazo: ' Das 17 até as 18 horas',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    name: 'Projeto final TOTI',
    descricao: 'Presentar o projeto final do curso de programação da TOTI',
    prazo: ' Das 18 até as 19:30 horas',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    name: 'Jantar',
    descricao: 'Tomar banho, jantar e descansar um pouco',
    prazo: ' Das 08 até as 17 horas',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    name: 'Aulas de espanhol',
    descricao: 'Planejar as aulas de espanhol do primeiro trimestre do ano 2021',
    prazo: ' Das 21 até as 23 horas',
    createdAt: new Date(),
    updatedAt: new Date()
  }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
