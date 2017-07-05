let chai = require('chai'),
    chaiHttp = require('chai-http'),
    expect = chai.expect,
    server = require('../server'),
    obj = {
        name: 'james'
    },
    fakeProduct = {
        name: 'bicycle',
        price: '$599'
    };
let mongojs = require('mongojs'),
    config = require('../config');
const db = mongojs(config.mongoURI[process.env.NODE_ENV]),
    Products = db.collection('products'),
    ObjectId = mongojs.ObjectId;
chai.use(chaiHttp);
let cleanDataBase = done => {
    Products.drop((e,r) => {
        done()
    })
}

describe('mainCtrl', () => {
    before(cleanDataBase)      //run before all its
    afterEach(cleanDataBase)
    afterEach     //run after all its
    beforeEach  //run before each it   run beforeEach and afterEach to sanitize database
    afterEach   //run after each it    drop all data before testing hits database
    it('expect true to equal true', () => {
        expect(true).to.equal(!false);
        expect(2 + 2).to.equal(4);
        expect(obj.name).to.equal('james');
    });
    it('expect test function to return foo', done => {
        chai.request(server)
            .get('/test')
            .end((err, res) => {
                expect(res).to.be.ok;
                expect(res).to.have.status(200);
                expect(res.body).to.be.ok;
                expect(res.body.message).to.equal('foo');
                expect(res.body).to.be.a('object');
                console.log(res.body);
                done();
            })
    })

    it('should make a new product', done => {
        chai.request(server)
            .post('/products')
            .send(fakeProduct)
            .end((err, res) => { //designate different database for testing

                expect(res).to.have.staus(200);
                expect(res.body).to.be.ok;
                expect(res.body.name).to.equal(fakeProduct.name);

                expect(res.body.id).to.be.ok;
                let id = res.body.id;

                Product.find({id:ObjectId(id)}, (e,r) => {
                    expect(r).to.be.ok;
                    expect(r[0].name).to.equal(fakeProduct.name);
                    done();
                })

            })
    })
})
