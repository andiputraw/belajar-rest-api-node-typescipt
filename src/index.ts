import express, { Application, NextFunction, Request, Response } from "express"

const app: Application = express()
const port: number = 3000

app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: "hello world", status: 200 })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
