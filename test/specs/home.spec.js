const homePage = require('../pageobjects/home.page');

describe('My Home Page', () => {
    it('It should verify list items', async () => {
        await homePage.open();

        await expect(homePage.listExamples).toBeElementsArrayOfSize({gte: 1});
    })
})