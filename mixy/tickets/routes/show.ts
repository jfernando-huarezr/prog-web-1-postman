import express, {Request, Response} from "express";

const router = express.Router();

router.get(
    '/api/tickets/:id',
    async(req: Request, res: Response) => {
        res.send({
            id: 2,
            ticket: "Test",
            price: 200
        })
    }
)

export {router as showTicketRouter }