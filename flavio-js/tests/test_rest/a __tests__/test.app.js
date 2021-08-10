const request = require('supertest')
const app = require('.../app');

beforeAll(function(done) {
    app.on('appStarted', done)
})

describe("test trips api", ()=>{
    it('should create a new trip', (done)=>{
        request(app)
    .post("/trip")
    .send({
    name: "touring italy",
    })
    .set('Content-Type','application/json')
    .set('accept', 'application/json')
    .expect(200)
    .end(done)

})
it("should have the trip transfered in the database", async()=>{
    const res = await request(app).get("/trips")
    expect(res.statusCode).toEqual(200)
    expect(
        res.body.trips.filter((item)=>item.none === "touring italy").length > 0
    ).toEqual(true)
    })
})


afterAll(()=>{
    app.emit('closeApp')
})

