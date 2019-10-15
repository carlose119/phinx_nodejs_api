import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../index'
import faker from 'faker'

chai.use(chaiHttp)

const token = '28c8edde3d61a0411511d3b1866f0636'

describe('GET /api/users', () => {
    it('should GET all users', (done) => {
        chai.request(app)
            .get('/api/users')
            .set("Authorization", token)
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).be.a('array')
                expect(res.body).not.have.lengthOf(0)
                done()
            })
    })
})

describe('GET /api/users/:id', () => {
    it('should GET a users', (done) => {
        chai.request(app)
            .get('/api/users/1')
            .set("Authorization", token)
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).to.have.property('full_name')
                expect(res.body.id).to.equal(1)
                done()
            })
    })
})

describe('POST /api/users', () => {
    it('should POST a new users', (done) => {
        let users = {
            company_id: 1, 
            full_name: faker.name.firstName() + ' ' + faker.name.lastName(), 
            phone: faker.phone.phoneNumber(), 
            age: 32, 
            email: faker.internet.email(),
            position: 'Develop', 
            address: faker.address.streetAddress(),
        }
        chai.request(app)
            .post('/api/users')
            .set("Authorization", token)
            .send(users)
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(201)
                expect(res.body).to.be.not.null
                done()
            })
    })
})