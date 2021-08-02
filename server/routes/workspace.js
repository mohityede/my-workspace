import express from 'express';
const router = express.Router();

import Workspace from '../models/Workspace.js';

// get workspace
router.get('/all', async (req, res) => {
    try {
        const workspaces = await Workspace.find();
        res.status(200).json(workspaces);
    } catch (err) {
        res.status(500).json(err);
    }
})

// post workspace
router.post('/create', async (req, res) => {
    const newWorkspace = new Workspace(req.body);
    try {
        const workspace = await newWorkspace.save();
        res.status(200).json(workspace);
    } catch (err) {
        res.status(500).json(err);
    }
})

// put workspace
router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { workName } = req.body;
    try {
        const workspace = await Workspace.findByIdAndUpdate(id, { workName: workName }, { new: true });
        res.status(200).json(workspace);
    } catch (err) {
        res.status(500).json(err);
    }
})

// delete workspace
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Workspace.findByIdAndDelete(id);
        res.status(200).json("The Workspace is deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
})

export default router;