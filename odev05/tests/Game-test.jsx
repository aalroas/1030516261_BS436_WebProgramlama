const React = require('react');
const { mount } = require('enzyme');
const {Game}  = require('../src/client/Game');


test("game", ()=>{
    const driver = mount(<Game/>);
    const photos = driver.find('.card');
    expect(photos.length).toEqual(3);

})

test("answer", () => {
    const driver = mount(<Game/>);

    const first = driver.find('.card').at(0);
    first.simulate('click');

    const photos = driver.find('.card');
    expect(photos.length).toEqual(3);
    
})

test("newgame", () => {
    const driver = mount(<Game/>);
    const page = driver.find('.new-game-button');
    expect(page).toBeDefined(Game.newGame);
    
})


test("photo", () => {
    const driver = mount(<Game/>);
    const photos = driver.find('.card');
    expect(photos.length).toEqual(3);
    const first = driver.find('.card').at(1);
    first.simulate('click');

    const card = driver.find(".card").contains("cat.jpg");
    expect(card).toBeDefined();
    const page = driver.find('.message');
    expect(page).toBeDefined();
 })


 test("equal", ()=>{
    const driver = mount(<Game/>);

    for(let i=0;i<3;i++){
        const first = driver.find('.card').at(2);
        first.simulate('click');
        const photos = driver.find('.card');
        expect(photos.length).toEqual(3);
        expect(photos.src === 'cat.jpg' || photos.src === 'dog1.jpg' || photos.src === 'dog2.jpg').toBeDefined();
    }
 })