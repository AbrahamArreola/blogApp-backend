import { Comment } from "../models/Comment";
import express from "express";

export class CommentController {
    constructor() {}

    async create(req: express.Request, res: express.Response) {
        try {
            const body = req.body;

            const newComment = await Comment.create(body);

            res.json({
                ok: true,
                newComment,
            });
        } catch (error) {
            res.status(500).json({
                ok: false,
                error,
            });
        }
    }

    async get(req: express.Request, res: express.Response) {
        try {
            const comments = await Comment.findAll({
                order: [
                    ['id', 'DESC']
                ]
            });

            res.json({
                ok: true,
                comments,
            });
        } catch (error) {
            res.status(500).json({
                ok: false,
                error,
            });
        }
    }

    async update(req: express.Request, res: express.Response) {
        try {
            const commentId = req.params.id;
            const body = req.body;

            const updatedComment = await Comment.findByPk(commentId);
            await updatedComment?.update(body);

            res.json({
                ok: true,
                updatedComment,
            });
        } catch (error) {
            res.status(500).json({
                ok: false,
                error,
            });
        }
    }

    async delete(req: express.Request, res: express.Response) {
        try {
            const commentId = req.params.id;

            const deletedComment = await Comment.destroy({
                where: { id: commentId },
            });

            res.json({
                ok: true,
                deletedComment,
            });
        } catch (error) {
            res.status(500).json({
                ok: false,
                error,
            });
        }
    }
}
