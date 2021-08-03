import express from 'express';
const router = express.Router();

import Workspace from '../models/Workspace.js';

// get all boards
router.get('/:workId/all', async (req, res) => {
    const { workId } = req.params;
    try {
        const workspaces = await Workspace.findById(workId);
        res.status(200).json(workspaces.boards);
    } catch (err) {
        res.status(500).json(err);
    }
})

// 61081696978cc70416669562

// put for create board
router.put('/:workId/create', async (req, res) => {
    const { workId } = req.params;
    const boardName = req.body;
    try {
        const workspaces = await Workspace.findByIdAndUpdate(workId, { $push: { boards: boardName } }, { new: true });
        res.status(200).json(workspaces);
    } catch (err) {
        res.status(500).json(err);
    }
})
// 610972fc3e6a8c03b647ee48
// 610973313e6a8c03b647ee4a

// put for update board
router.put('/:workId/update/:boardId', async (req, res) => {
    const { workId, boardId } = req.params;
    const { boardName } = req.body;
    try {
        const workspace = await Workspace.findOneAndUpdate({ _id: workId, boards: { $elemMatch: { _id: boardId } } }, { $set: { 'boards.$.boardName': boardName } }, { new: true });
        res.status(200).json(workspace);
    } catch (err) {
        res.status(500).json(err);
    }
})

// delete board
router.delete('/:workId/delete/:boardId', async (req, res) => {
    const { workId, boardId } = req.params;
    try {
        await Workspace.findOneAndUpdate({ _id: workId, boards: { $elemMatch: { _id: boardId } } }, { $pull: { "boards": {"_id":boardId} } });
        res.status(200).json("The Board is deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
})

export default router;