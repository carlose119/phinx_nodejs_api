import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../index'
import faker from 'faker'

chai.use(chaiHttp)

const token = '28c8edde3d61a0411511d3b1866f0636'

describe('GET /api/companies', () => {
    it('should GET all companies', (done) => {
        chai.request(app)
            .get('/api/companies')
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

describe('GET /api/companies/:id', () => {
    it('should GET a companies', (done) => {
        chai.request(app)
            .get('/api/companies/1')
            .set("Authorization", token)
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).to.have.property('name')
                expect(res.body.id).to.equal(1)
                done()
            })
    })
})

describe('POST /api/companies', () => {
    it('should POST a new companies', (done) => {
        let companies = {
            name: faker.company.companyName(),
            legal_name: faker.company.companySuffix(),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber(),
            address: faker.address.streetAddress()
        }
        chai.request(app)
            .post('/api/companies')
            .set("Authorization", token)
            .send(companies)
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(201)
                expect(res.body).to.be.not.null
                done()
            })
    })
})