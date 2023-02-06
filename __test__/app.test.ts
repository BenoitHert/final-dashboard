import request from "supertest"
import app from '../backend/server'
import { jest } from '@jest/globals'

const createUser = jest.fn()

describe("POST /users", () => {

    describe("when passed a username and password", () => {        

      // should respond with a 200 status code
      test("should respond with a 201 status code", async () => {
        const response = await request(app).post("/api/users").send({ 
          name: "username", 
          email: "email",
          password: "password" 
        })
        expect(response.statusCode).toBe(201)
      })

      // should specify json as the content type in the http header.
      test("should specify json as the content type in the http header", async () => {
        const response = await request(app).post("/api/users").send({ 
          name: "username", 
          email: "email",
          password: "password" 
        })
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
      })

      // should respond with a json object that contains the id from the database.
      test("should contain a userId in the response body", async () => {
        const response = await request(app).post("/api/users").send({ 
          name: "username", 
          email: "email",
          password: "password" 
        })
        expect(response.body.userId).toBeDefined()
      })

  // should save the username and password in the database
      test("should save the username and password in the database",async () => {
        const body = {
          username: "username",
          password: "password"
        }
        const response = await request(app).post("/api/users").send(body)
        expect(createUser.mock.calls[0][0]).toBe(body.username)
        expect(createUser.mock.calls[0][1]).toBe(body.password)
      })

    })
    describe("when the username or password is missing", () => {

      // should return a json object that contains an error message.
      test("should return a json object with an error message", async () => {
        const response = await request(app).post("/api/users").send({ 
          name: "username", 
        })
        expect(response.body.message).toBeDefined()
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
      })

      // should specify json as the content type in the http header.
      test("should specify json as the content type in the http header", async () => {
        const response = await request(app).post("/api/users").send({ 
          name: "username", 
        })
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
      })

      // should return a 400 status code to show there was a user error.
      test("should return a 400 status code", async () => {
        // try multiple cases
        const bodies = [
          { username: "username" },
          { password: "password" },
          { email: "email"}
        ]
        for (const body of bodies) {
          const response = await request(app).post("/api/users").send(body)
          expect(response.statusCode).toBe(400)
        }
      })
      })
    })
  
